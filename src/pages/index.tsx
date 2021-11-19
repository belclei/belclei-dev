import React from 'react'

import { GetStaticProps } from 'next'
import Link from 'next/link'
import { Meta } from '../components/Meta'
import { getAllPosts } from '../services/Content'
import { Main } from '../components/Main'
import { Box, Heading, Text } from '@chakra-ui/react'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { PostInfo } from '../components/PostInfo'
import { markdownToHtml } from '../services/Markdown'
import { useRouter } from 'next/router'
import { Loading } from '../components/Loading'

interface BlogProps {
  posts: [
    {
      slug: string
      title: string
      subtitle: string
      createdAt: string
      time: number
    }
  ]
}
const Blog = ({ posts }: BlogProps) => {
  const router = useRouter()
  if (router.isFallback) {
    return <Loading />
  }
  return (
    <Main meta={<Meta title="Blog" />}>
      <div>
        {posts.map(post => (
          <Box px="4" mb="4" pb="4" key={post.slug}>
            <Heading colorScheme="heading" size="lg">
              <Link href={`/blog/${post.slug}`}>
                <a>{post.title}</a>
              </Link>
            </Heading>
            <PostInfo createdAt={post.createdAt} time={post.time} />
            <Box fontSize="md" dangerouslySetInnerHTML={{ __html: post.subtitle }} />
          </Box>
        ))}
      </div>
    </Main>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts(['slug', 'title', 'subtitle', 'createdAt', 'content'])

  const formattedPosts = posts.map(async post => {
    const formattedSubtitle = await markdownToHtml(post.subtitle || '')
    const time = Math.ceil(post.content.split(' ').length / 200)
    const formattedCreatedAt = format(new Date(post.createdAt), "dd MMM yyyy', às ' HH:mm", {
      locale: ptBR
    })
    return {
      ...post,
      subtitle: formattedSubtitle,
      createdAt: formattedCreatedAt,
      time
    }
  })

  return {
    props: {
      posts: await Promise.all(formattedPosts)
    }
  }
}

interface BlogProps {}
export default Blog

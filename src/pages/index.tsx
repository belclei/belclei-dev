import React from 'react'

import { GetStaticProps } from 'next'
import Link from 'next/link'
import { TiCalendarOutline, TiStopwatch } from 'react-icons/ti'
import { Meta } from '../components/Meta'
import { getAllPosts } from '../services/Content'
import { Main } from '../components/Main'
import { Box, Heading, HStack, Text } from '@chakra-ui/layout'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { PostInfo } from '../components/PostInfo'

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
const Blog = ({ posts }: BlogProps) => (
  <Main meta={<Meta title="Blog" />}>
    <div>
      {posts.map(post => (
        <Box px="4" mb="4" pb="4" key={post.slug}>
          <Link href={`/blog/${post.slug}`}>
            <a>
              <Heading colorScheme="heading" size="lg">
                {post.title}
              </Heading>
            </a>
          </Link>
          <PostInfo createdAt={post.createdAt} time={post.time} />
          <Text fontSize="lg">{post.subtitle}</Text>
        </Box>
      ))}
    </div>
  </Main>
)

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts(['slug', 'title', 'subtitle', 'createdAt', 'content'])

  const formattedPosts = posts.map(post => {
    const time = Math.ceil(post.content.split(' ').length / 200)
    const formattedCreatedAt = format(new Date(post.createdAt), "dd MMM yyyy', às ' HH:mm", {
      locale: ptBR
    })
    return {
      ...post,
      createdAt: formattedCreatedAt,
      time
    }
  })

  return {
    props: {
      posts: formattedPosts
    }
  }
}

interface BlogProps {}
export default Blog

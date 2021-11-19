import React from 'react'

import { GetStaticPaths, GetStaticProps } from 'next'
import { getAllPosts, getPostBySlug } from '../../services/Content'
import { markdownToHtml } from '../../services/Markdown'
import { Meta } from '../../components/Meta'
import { Main } from '../../components/Main'
import { PostHeader } from '../../components/PostHeader'
import { ptBR } from 'date-fns/locale'
import { format } from 'date-fns'
import { PostContent } from '../../components/PostContent'
import { useRouter } from 'next/router'
import { Text, Heading } from '@chakra-ui/react'
import { Loading } from '../../components/Loading'
import Comments from '../../components/Comments'
import { Share } from '../../components/Share'

type IPostUrl = {
  slug: string
}
type PostPageProps = {
  slug: string
  title: string
  subtitle: string
  createdAt: string
  time: number
  content: string
}

const PostPage = (props: PostPageProps) => {
  const router = useRouter()
  if (router.isFallback) {
    return <Loading />
  }
  return (
    <Main meta={<Meta title={props.title} description={props.subtitle} />}>
      <PostHeader title={props.title} subtitle={props.subtitle} time={props.time} createdAt={props.createdAt} />
      <PostContent content={props.content} />
      <Share post={props} />
      <Heading my="4" colorScheme="heading" size="md">
        Comentários
      </Heading>
      <Comments />
    </Main>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map(post => ({
      params: {
        slug: post.slug
      }
    })),
    fallback: true
  }
}

export const getStaticProps: GetStaticProps<PostPageProps, IPostUrl> = async ({ params }) => {
  const {
    title,
    subtitle,
    createdAt,
    content: postContent
  } = getPostBySlug(params!.slug, ['title', 'subtitle', 'createdAt', 'content'])

  const content = await markdownToHtml(postContent || '')

  const time = Math.ceil(postContent.split(' ').length / 200)
  const formattedCreatedAt = format(new Date(createdAt), "dd MMM yyyy', às ' HH:mm", {
    locale: ptBR
  })

  return {
    props: {
      slug: params!.slug,
      title,
      subtitle,
      createdAt: formattedCreatedAt,
      time,
      content
    }
  }
}

export default PostPage

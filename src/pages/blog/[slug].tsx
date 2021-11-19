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

const PostPage = (props: PostPageProps) => (
  <Main meta={<Meta title={props.title} description={props.subtitle} />}>
    <PostHeader title={props.title} subtitle={props.subtitle} time={props.time} createdAt={props.createdAt} />
    <PostContent content={props.content} />
  </Main>
)

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
  const formattedSubtitle = await markdownToHtml(subtitle || '')

  const time = Math.ceil(postContent.split(' ').length / 200)
  const formattedCreatedAt = format(new Date(createdAt), "dd MMM yyyy', às ' HH:mm", {
    locale: ptBR
  })

  return {
    props: {
      slug: params!.slug,
      title,
      subtitle: formattedSubtitle,
      createdAt: formattedCreatedAt,
      time,
      content
    }
  }
}

export default PostPage

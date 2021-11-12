import React from 'react'

import { GetStaticPaths, GetStaticProps } from 'next'

import { getAllPosts, getPostBySlug } from '../../services/Content'
import { markdownToHtml } from '../../services/Markdown'

type IPostUrl = {
  slug: string
}
type IPostProps = {
  content: string
}

const DisplayPost = (props: IPostProps) => (
  <div
    // eslint-disable-next-line react/no-danger
    dangerouslySetInnerHTML={{ __html: props.content }}
  />
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

export const getStaticProps: GetStaticProps<IPostProps, IPostUrl> = async ({ params }) => {
  const post = getPostBySlug(params!.slug, ['content'])

  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      content
    }
  }
}

export default DisplayPost

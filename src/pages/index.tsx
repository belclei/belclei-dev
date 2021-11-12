import React from 'react'

import { GetStaticProps } from 'next'

import { Meta } from '../components/Meta'
// import { IPaginationProps } from '../pagination/Pagination'
// import { Main } from '../templates/Main'
// import { Config } from '../utils/Config'
import { getAllPosts } from '../services/Content'

interface BlogProps {
  posts: [
    {
      slug: string
      title: string
      subtitle: string
      createdAt: string
    }
  ]
}
const Blog = ({ posts }: BlogProps) => (
  <>
    <Meta title="Blog" />
    {posts.map(post => (
      <div key={post.slug}>
        <h1>{post.title}</h1>
        <p>{post.subtitle}</p>
        <output>{post.createdAt}</output>
      </div>
    ))}
  </>
)

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts(['slug', 'title', 'subtitle', 'createdAt'])

  return {
    props: {
      posts
    }
  }
}

interface BlogProps {}
export default Blog

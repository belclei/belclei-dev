import React from 'react'

import { GetStaticProps } from 'next'

import { Meta } from '../components/Meta'
// import { IPaginationProps } from '../pagination/Pagination'
// import { Main } from '../templates/Main'
// import { Config } from '../utils/Config'
import { getAllPosts } from '../services/Content'
import { Main } from '../components/Main'

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
  <Main meta={<Meta title="Blog" />}>
    <div>
      {posts.map(post => (
        <div key={post.slug}>
          <h1>{post.title}</h1>
          <p>{post.subtitle}</p>
          <output>{post.createdAt}</output>
        </div>
      ))}
    </div>
  </Main>
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

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
import { Text, Heading, Image } from '@chakra-ui/react'
import { Loading } from '../../components/Loading'
import { Share } from '../../components/Share'
import Comments from '../../components/Comments'

type IPostUrl = {
  slug: string
}
type PostPageProps = {
  slug: string
  title: string
  subtitle: string
  createdAt: string
  metaDate: string
  time: number
  image: string
  content: string
}

const PostPage = (props: PostPageProps) => {
  const router = useRouter()
  if (router.isFallback) {
    return <Loading />
  }
  const metaPost = {
    image: props.image,
    date: props.metaDate,
    modified_date: props.metaDate
  }
  return (
    <Main meta={<Meta title={props.title} description={props.subtitle} post={metaPost} />}>
      <PostHeader title={props.title} subtitle={props.subtitle} time={props.time} createdAt={props.createdAt} />
      <Image src={props.image} alt={props.title} />
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
  //const posts = getAllPosts(['slug'])

  return {
    paths: [0, 1, 2].map(post => ({
      params: {
        slug: 'teste'
      }
    })),
    fallback: true
  }
}

export const getStaticProps: GetStaticProps<PostPageProps, IPostUrl> = async ({ params }) => {
  /*
  if (!params || !params.slug) {
    return {
      notFound: true
    }
  }
  const post = getPostBySlug(params.slug, ['title', 'subtitle', 'createdAt', 'content', 'image'])
  if (post === null) {
    return {
      notFound: true
    }
  }
  const { title, subtitle, createdAt, content: postContent, image } = post
  const content = await markdownToHtml(postContent || '')

  const time = Math.ceil(postContent.split(' ').length / 200)
  const formattedCreatedAt = format(new Date(createdAt), "dd MMM yyyy', às ' HH:mm", {
    locale: ptBR
  })

  return {
    props: {
      slug: params.slug,
      title,
      subtitle,
      createdAt: formattedCreatedAt,
      metaDate: createdAt,
      time,
      image,
      content
    }
  } */
  return {
    props: {
      slug: 'teste',
      title: 'Teste Titulo',
      subtitle:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nihil fugiat voluptatem ullam quos doloribus minima dignissimos, exercitationem blanditiis eius, praesentium eum vitae tempore reiciendis voluptates maiores totam iusto omnis!',
      createdAt: '02 out 2020, às 23:44',
      metaDate: '2020-10-02 23:44:00',
      time: 6,
      image: '/posts/000/helloworld.jpg',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ratione animi vel rerum officiis molestiae, eveniet error? Distinctio quia sed quam illo non ipsam ipsum earum omnis, aliquam tempora perspiciatis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi voluptatum recusandae cum asperiores aliquam libero ad, assumenda mollitia ut quos. Deleniti laborum quo, consequuntur reprehenderit saepe doloribus id! Distinctio, corrupti.'
    }
  }
}

export default PostPage

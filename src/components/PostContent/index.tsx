import React from 'react'
import { Box } from '@chakra-ui/react'

interface PostContentProps {
  content: string
}

export function PostContent(props: PostContentProps) {
  const sx = {
    h1: {
      my: '2rem',
      fontSize: '1.5rem',
      fontWeight: 'bold'
    },
    h2: {
      my: '1.5rem',
      fontSize: '1.25rem',
      fontWeight: '600'
    },
    h3: {
      my: '1.5rem',
      fontSize: '1rem',
      fontWeight: '600'
    },
    p: {
      my: '.75rem'
    },
    ul: {
      my: '.75rem',
      mx: '2rem'
    },
    img: {
      my: '1.5rem'
    },
    pre: {
      margin: '3rem'
    },
    blockquote: {
      fontWeight: '400',
      borderLeft: '6px solid',
      borderLeftColor: 'body.600',
      padding: '.5rem .5rem .5rem 1.5rem',
      bgColor: 'body.700'
    }
  }
  return <Box as="article" sx={sx} dangerouslySetInnerHTML={{ __html: props.content }} />
}

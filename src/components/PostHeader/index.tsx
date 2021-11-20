import React from 'react'
import { Flex, Heading, Text } from '@chakra-ui/react'
import { PostInfo } from '../PostInfo'
import { Share } from '../Share'

interface PostHeaderProps {
  title: string
  subtitle: string
  createdAt: string
  time: number
}

export function PostHeader(props: PostHeaderProps) {
  return (
    <Flex as="section" direction="column" my="8" alignItems="center">
      <Heading colorScheme="heading" size="2xl">
        {props.title}
      </Heading>
      <PostInfo createdAt={props.createdAt} time={props.time} />
      {/*<Share post={props} />*/}
      <Text my="4" fontSize="md">
        {props.subtitle}
      </Text>
    </Flex>
  )
}

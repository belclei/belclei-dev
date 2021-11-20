import React from 'react'
import { HStack, Text, Flex, Spacer } from '@chakra-ui/react'
import { TiCalendarOutline, TiStopwatch } from 'react-icons/ti'

interface PostInfoProps {
  createdAt: string
  time: number
}

export function PostInfo(props: PostInfoProps) {
  return (
    <Flex direction={{ base: 'column', md: 'row' }} my="2" color="text.200" alignItems="center">
      <HStack alignItems="start" mx="2">
        <TiCalendarOutline size={20} />
        <Text>{props.createdAt}</Text>
      </HStack>
      <HStack alignItems="start" mx="2">
        <TiStopwatch size={20} />
        <Text>{props.time} min de leitura</Text>
      </HStack>
    </Flex>
  )
}

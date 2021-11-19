import React from 'react'
import { HStack, Text } from '@chakra-ui/react'
import { TiCalendarOutline, TiStopwatch } from 'react-icons/ti'

interface PostInfoProps {
  createdAt: string
  time: number
}

export function PostInfo(props: PostInfoProps) {
  return (
    <HStack my="2" spacing="4" color="text.200">
      <HStack>
        <TiCalendarOutline size={18} />
        <Text>{props.createdAt}</Text>
      </HStack>
      <HStack>
        <TiStopwatch size={18} />
        <Text>{props.time} min de leitura</Text>
      </HStack>
    </HStack>
  )
}

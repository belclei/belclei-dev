import React from 'react'
import { Flex, Heading } from '@chakra-ui/react'

export function Loading() {
  return (
    <Flex alignItems="center" justifyContent="center" w="100vw" h="100vh">
      <Heading colorScheme="heading">Aguarde um pouquinho...</Heading>
    </Flex>
  )
}

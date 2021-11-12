import React, { ReactNode } from 'react'
import { Flex, Box } from '@chakra-ui/react'
import { Header } from '../../components/Header'

interface MainProps {
  meta: ReactNode
  children: ReactNode
}

export function Main(props: MainProps) {
  return (
    <Flex as="main" w="100vw" h="100vh" direction="column">
      {props.meta}
      <Header />
      <Box maxW="800px" w="50rem" mx="auto">
        {props.children}
      </Box>
    </Flex>
  )
}

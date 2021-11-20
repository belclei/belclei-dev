import React from 'react'

import { Meta } from '../components/Meta'
import { Main } from '../components/Main'
import { Heading, Flex } from '@chakra-ui/react'

const Page404 = () => {
  return (
    <Main meta={<Meta title="Blog" />}>
      <Flex alignItems="center" justifyContent="center" w="full">
        <Heading colorScheme="heading">Ué?! Parece que esse conteúdo não existe.</Heading>
      </Flex>
    </Main>
  )
}

export default Page404

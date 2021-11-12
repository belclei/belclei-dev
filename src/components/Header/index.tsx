import { Flex, Text, HStack } from '@chakra-ui/react'
import Link from 'next/link'
import { SiLinkedin, SiTwitter, SiGithub, SiGmail } from 'react-icons/si'
import { Config } from '../../constants/config'

export function Header() {
  return (
    <Flex
      as="header"
      px="8"
      h="40"
      bgGradient="linear(to-b, body.600, body.800)"
      justifyContent="space-between"
      alignItems="center"
    >
      <Link href="/">
        <a>
          <Text fontFamily="logo" fontSize="5xl">
            {Config.site_name}
          </Text>
        </a>
      </Link>
      <HStack spacing="4">
        <a href="https://www.linkedin.com/in/belclei/" target="_blank" rel="noreferrer">
          <SiLinkedin size={20} />
        </a>
        <a href="https://www.twitter.com/belclei/" target="_blank" rel="noreferrer">
          <SiTwitter size={20} />
        </a>
        <a href="mailto:belclei@gmail.com">
          <SiGmail size={20} />
        </a>
        <a href="https://github.com/belclei" target="_blank" rel="noreferrer">
          <SiGithub size={20} />
        </a>
      </HStack>
    </Flex>
  )
}

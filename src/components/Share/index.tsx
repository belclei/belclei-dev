import { Heading, HStack } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { SiLinkedin, SiTwitter } from 'react-icons/si'
import { Config } from '../../constants/config'

interface ShareProps {
  post: {
    title: string
    subtitle: string
  }
}
export function Share(props: ShareProps) {
  const [currentURL, setCurrentURL] = useState('')
  useEffect(() => {
    setCurrentURL(window.location.href)
  }, [])
  return (
    <HStack w="full" alignItems="baseline" my="4">
      <Heading as="h3" pl="4" size="sm" colorScheme="heading" fontWeight="400" textAlign="end" flex={1}>
        Compartilhe este post:
      </Heading>
      <a
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(props.post.title)}&url=${encodeURIComponent(
          currentURL
        )}`}
        target="_blank"
        rel="noreferrer"
      >
        <SiTwitter size={18} />
      </a>
      <a
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
          currentURL
        )}&title=${encodeURIComponent(props.post.title)}&summary=${encodeURIComponent(props.post.subtitle)}&source="${
          Config.site_name
        }"`}
        target="_blank"
        rel="noreferrer"
      >
        <SiLinkedin size={18} />
      </a>
    </HStack>
  )
}

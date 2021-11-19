import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    heading: {
      '700': '#F11F15',
      '600': '#F1154A'
    },
    body: {
      '800': '#220054',
      '700': '#322074',
      '600': '#4300A8'
    },
    text: {
      '600': '#2EF188',
      '400': '#F1D2D9',
      '200': '#D9C3C8'
    }
  },
  fonts: {
    logo: 'Kaushan Script',
    heading: 'Poppins',
    body: 'Montserrat'
  },
  styles: {
    global: {
      body: {
        bg: 'body.800',
        color: 'text.400'
      },
      a: {
        color: 'heading.700',
        _hover: { color: 'heading.600' }
      },
      h1: {
        color: 'heading.700',
        fontSize: 'xl',
        _hover: { color: 'heading.600' }
      },
      h2: {
        color: 'heading.700',
        _hover: { color: 'heading.600' }
      },
      h3: {
        color: 'heading.700',
        _hover: { color: 'heading.600' }
      },
      h4: {
        color: 'heading.700',
        _hover: { color: 'heading.600' }
      },
      h5: {
        color: 'heading.700',
        _hover: { color: 'heading.600' }
      },
      h6: {
        color: 'heading.700',
        _hover: { color: 'heading.600' }
      }
    }
  }
})

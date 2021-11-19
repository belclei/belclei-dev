import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    heading: {
      '700': '#F11F15',
      '600': '#CC3355'
    },
    body: {
      '800': '#220054',
      '700': '#322074',
      '600': '#4300A8'
    },
    text: {
      '400': '#F1EECD',
      '200': '#BDAAAE'
    }
  },
  fonts: {
    logo: 'Kaushan Script',
    heading: 'Mukta',
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
        fontSize: 'xl'
      },
      h2: {
        color: 'heading.700'
      },
      h3: {
        color: 'heading.700'
      },
      h4: {
        color: 'heading.700'
      },
      h5: {
        color: 'heading.700'
      },
      h6: {
        color: 'heading.700'
      }
    }
  }
})

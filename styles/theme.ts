import { extendTheme } from '@chakra-ui/react'
import { colors } from './colors'
import { Headings } from './components/heading'
import { Text } from './components/text'
import { Tabs } from './components/Tabs'

const theme = extendTheme({
  initialColorMode: 'dark',
  useSystemColorMode: false,
  breakpoints: {
    xs: '16em',
    sm: '30em', // 480px
    md: '48em', // 768px
    lg: '62em', // 992px
    xl: '80em', // 1280px
    '2xl': '96em', // 1536px
    '3xl': '110em', // 1760px
  },
  semanticTokens: {
    colors: {
      ...colors,
    },
  },
  styles: {
    global: {
      body: {
        bg: 'primaryBackround',
        color: 'primaryText',
        overflowX: 'hidden',
      },
      html: {
        scrollBehavior: 'smooth',
        bg: 'primaryBackround',
        overflowX: 'hidden',
      },
      ...Headings,
    },
  },
  components: {
    Text,
    Tabs,
  },
  fonts: {
    heading: `'Montserrat', sans-serif`,
    // body: `"Calibre","Inter","San Francisco","SF Pro Text",-apple-system,system-ui,sans-serif`,
    body: `'Montserrat', sans-serif`
  },
})

export default theme

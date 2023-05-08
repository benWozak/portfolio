import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { CacheProvider } from '@chakra-ui/next-js'

import theme from '../styles/theme'
import '@fontsource/raleway/400.css'
import '@fontsource/open-sans/700.css'
import '@fontsource/inter/700.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        <main>
          <Component {...pageProps} />
        </main>
      </ChakraProvider>
    </CacheProvider>
  )
}

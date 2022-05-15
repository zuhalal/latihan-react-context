import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { Navbar } from '../components'
import { ContextExampleProvider } from '../context'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ContextExampleProvider>
      <ChakraProvider>
        <Navbar />
        <Component {...pageProps} />
      </ChakraProvider>
    </ContextExampleProvider>
  )
}

export default MyApp

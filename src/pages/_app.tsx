import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { extendTheme } from "@chakra-ui/react"

/* Configurando tema */
const theme = extendTheme({
  colors: {
    background: '#F6F6F6'
  },
})



/* Configurando o chakra UI */

export default function App({ Component, pageProps }: AppProps) {
  return (

      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>

   
  

    
  )
}




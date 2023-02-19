import '@/styles/globals.css'
import {Layout} from '../component/Layout'
import {Container} from '@mui/material'
import type { AppProps } from 'next/app'
export default function App({ Component, pageProps }: AppProps) {
  return <Layout> <Container> <Component {...pageProps} /> </Container></Layout>
}

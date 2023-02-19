
import { Inter } from '@next/font/google';
import {Box, Stack, Typography, Chip} from '@mui/material'
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Head>
      <title>Next.js | Home</title>
      <meta name='keyword' content='home'/>
    </Head>
     <Box>
      <Stack alignItems='center' justifyContent='center' marginBottom={10}>
         <Image src='/logo.png'alt='image' width={200} height={100} />
         <Stack alignSelf='start' mt={10} spacing={5} mb={10}>
        <Typography variant="h3">Introduction</Typography>
        <Typography color="gray">
        Next. js is a React framework that enables several extra features, including server-side rendering and generating static websites. React is a JavaScript library that is traditionally used to build web applications rendered in the client's browser with JavaScript.
        </Typography>
       
      </Stack>
      <Link href='/nested'><Chip label='go to nested'></Chip></Link>
      </Stack>
     </Box>
    </>
  )
}

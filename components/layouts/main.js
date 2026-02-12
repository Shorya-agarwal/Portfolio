import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import VoxelDogLoader from '../voxel-dog-loader'
import NetworkBackgroundLoader from '../network-background-loader'

const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})

const LazyNetworkBackground = dynamic(() => import('../network-background'), {
  ssr: false,
  loading: () => <NetworkBackgroundLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Shorya's homepage" />
        <meta name="author" content="Shorya Agarwal" />
        <meta name="author" content="Shorya Agarwal" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta property="og:site_name" content="Shorya Agarwal" />
        <meta name="og:title" content="Shorya Agarwal" />
        <meta property="og:type" content="website" />
        <title>Shorya Agarwal - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <LazyNetworkBackground />

      <Container maxW="container.xl" pt={14}>
        <LazyVoxelDog />

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main

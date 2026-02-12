import { Box, Spinner } from '@chakra-ui/react'

const Loader = () => {
  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      w="100vw"
      h="100vh"
      zIndex="-1"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Spinner size="xl" color="teal.500" />
    </Box>
  )
}

export default Loader

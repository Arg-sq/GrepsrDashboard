import { Box, HStack, Progress } from '@chakra-ui/react'

const SuspenseComponent = () => {
  return (
  <>
        <HStack justifyContent="center" h="100dvh" w="100dvw">
                <Box width={"100dvw"} height={"100dvh"}>
                  <Progress size="xs" isIndeterminate hasStripe />
                </Box>
              </HStack>
  </>
  )
}

export default SuspenseComponent
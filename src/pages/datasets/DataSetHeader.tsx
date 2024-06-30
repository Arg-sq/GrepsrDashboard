import { Button, Flex, Image, Text } from '@chakra-ui/react'
import { svgs } from '@grepsr/assets/svgs'
import { grepsr_colors } from '@grepsr/theme/Color'

const DataSetHeader = () => {
  return (
<Flex mt={3} justifyContent={"space-between"} width={"100%"}>
   <Flex gap={3}>
   <Button variant={"primary"}>
        Operations
    </Button>
    <Button variant={"ghost"}>
        <Image src={svgs.Filter} alt ="filter" pr={2}/>
        Add Filters
    </Button>
   </Flex>
   <Flex>
    <Flex alignItems={"center"} mr={3}>
        <Text>Edit mode</Text>
    </Flex>
    <Flex mr={3}>
    <Button variant={"ghost"}>
        <Image src={svgs.Hide} alt ="filter" pr={2}/>
        Show metadata
    </Button>
    </Flex>
    <Flex borderRadius={8} border={`1px solid ${grepsr_colors.gray}`} cursor={"pointer"} background={grepsr_colors.white} alignItems="center"px={1}>
        <Image src={svgs.Download} alt ="download dataset"/>
    </Flex>
   </Flex>
</Flex>
  )
}

export default DataSetHeader
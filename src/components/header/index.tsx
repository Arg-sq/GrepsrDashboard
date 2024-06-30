import { Avatar, Box, Flex, Image, Text } from "@chakra-ui/react"
import { svgs } from "@grepsr/assets/svgs"
import { grepsr_colors } from "@grepsr/theme/Color"
import GetSidebarState from "@grepsr/utils/GetSidebarState"

const Header = () => {
   const{setShowSidebar,showSidebar}= GetSidebarState()
   
  return (
<Flex justifyContent={"space-between"} px={6} py={3} bg={grepsr_colors.white} h={"64px"} borderBottom={`2px solid ${grepsr_colors.gray}`}>
<Flex  alignItems="center" gap={2}>
       <Box cursor="pointer" height="24px" onClick={()=>setShowSidebar((prev)=>!prev)}>
       <Image src={svgs.BackArrow} alt="sidebar hide button" h="100%" w="100%"
       transform={showSidebar?"rotate(0deg)": "rotate(180deg)"}/>
       </Box>
        <Text fontWeight={700} fontSize={"xl"}>
            Amazon product price
        </Text>
        <Box cursor="pointer" height="24px">
       <Image src={svgs.Info} alt="info button" h="100%" w="100%"/>
       </Box>
    </Flex>
    <Flex gap={3} alignItems={"center"}>
        <Flex bg={grepsr_colors.gray_100} borderRadius={22} textAlign={"center"} pr={2.5} py={1}>
        <Box height="28px" pl={1}>
       <Image src={svgs.Credit} alt="sidebar hide button" h="100%" w="100%"/>
       </Box>
            <Text fontWeight={600} pt={1} fontSize={"sm"}>Credit usage:1018 / &infin;</Text>
        </Flex>
        <Box cursor="pointer" height="28px">
       <Image src={svgs.Bell} alt="info button" h="100%" w="100%"/>
       </Box>
       <Avatar cursor={"pointer"} size="sm" name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
    </Flex>
</Flex>
  )
}

export default Header
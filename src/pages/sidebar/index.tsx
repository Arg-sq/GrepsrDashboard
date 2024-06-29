
import { NAVIGATION_ROUTES } from '../../routes/routes.constants'
import { Box, Divider, Flex, Text, VStack } from '@chakra-ui/react'
import { grepsr_colors } from '../../theme/color'
import { svgs } from '../../assets/svgs'
import Item from './NavItem'
import { useLocation } from 'react-router-dom'
import React from "react"


const navItems = [
  {
    id: 1,
    icon: svgs.DataSet,
    name: "DataSets",
    path: NAVIGATION_ROUTES.DATASETS,
  },
  {
    id: 2,
    icon: svgs.Workflow,
    name: "Workflows",
    path: NAVIGATION_ROUTES.WORKFLOWS,
  },
  { id: 3, icon: svgs.CreditUsage, name: "Credit Usage", path: NAVIGATION_ROUTES.CREDIT_USAGE },
 
    ]
  

const Siderbar = () => {
  const { pathname } = useLocation();

  return (
    <Box
    borderRight={`2px solid ${grepsr_colors.gray}`}
    height={"full"}
    fontWeight={700}
    letterSpacing={"0.1px"}
    color={grepsr_colors.black}
    bg={grepsr_colors.white}
    position={"fixed"}
    width={"242px"}
  >
    <Text
      textAlign={"left"}
      fontSize={'large'}
      my={4}
      ml={10}
    >
Grepsr
    </Text>
    <Divider border={"1px"} opacity={0.1}/>
    <Box height="full" mt={6}>
      <Flex
        direction={"column"}
        height="full"
        maxH={`calc(100% - 225px)`}
        overflowY={"scroll"}
        width={"246px"}
        css={{
          scrollbarGutter: "stable",
          "&::-webkit-scrollbar": {
            width: "0.2rem",
            height: "0.6rem",
            position: "absolute",
          },
          "&::-webkit-scrollbar-track": {
            position: "absolute",
            background: `${grepsr_colors.white}`,
            opacity: 0.1,
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#EDF2F7",
            borderRadius: 20,
          },
        }}
      >
        <VStack
          align={"left"}
      gap={1}
          justifyContent={"flex-start"}
          px={4}
        >
          {
            navItems?.map(item => (
    <React.Fragment key={item.id}>
      <Item
      item={item}
      isSelected={pathname === item.path}
      />
      </React.Fragment>  
            ))}
        </VStack>
      </Flex>

    </Box>
  </Box>
  )
}

export default Siderbar
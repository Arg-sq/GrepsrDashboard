
import { NAVIGATION_ROUTES } from '../../routes/routes.constants'
import { Box, Flex, VStack } from '@chakra-ui/react'
import { grepsr_colors } from '../../theme/color'
import { svgs } from '../../assets/svgs'

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
  return (
    <Box
    as="aside"
    height={"full"}
    fontWeight={500}
    letterSpacing={"0.1px"}
    color={grepsr_colors.white}
    bg={grepsr_colors.primary_600}
    zIndex={999}
    position={"fixed"}
    width={"240px"}
    minW={"240px"}
    maxW={"240px"}
  >
    <Flex
      minH={"57px"}
      minW={"115px"}
      align={"center"}
      overflow={"hidden"}
      width={"100px"}
      my={"20px"}
      ml={"7px"}
    >
Grepsr
    </Flex>
    <Box height="full">
      <Flex
        direction={"column"}
        height="full"
        maxH={`calc(100% - 225px)`}
        overflowY={"scroll"}
        width={"240px"}
        minW={"240px"}
        maxW={"240px"}
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
          spacing={"10px"}
          justifyContent={"flex-start"}
          px={"20px"}
        >
          {
            navItems?.map(item => (
              // <SidebarItem
              //   key={item.id}
              //   item={item}
              //   isSelected={pathname === item.path}
              //   clickedMasterAccordion={clickedMasterAccordion}
              //   handleClickedMasterAccordion={handleClickedMasterAccordion}
              // />
              <p>ashesh</p>
            ))}
        </VStack>
      </Flex>

      <VStack
        position={"absolute"}
        left={"0px"}
        bottom={"32px"}
        width={"100%"}
        px={"20px"}
      >
        {/* {actions.map(item => (
          <SidebarItem key={item.id} item={item} />
        ))} */}
      </VStack>
    </Box>
  </Box>
  )
}

export default Siderbar
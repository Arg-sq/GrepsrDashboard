import { Box, HStack, Image, Text } from "@chakra-ui/react";
import { grepsr_colors } from "@grepsr/theme/color";
import {  useNavigate } from "react-router-dom";

interface ISidebarItem{
    item: {
        id: number;
        icon: string;
        name: string;
        path?: string;
     
      };
    isSelected:boolean;
}
const Item: React.FC<ISidebarItem> = ({
    item,
    isSelected,
  
  }) => {
    const navigate = useNavigate();

      return (
        <Box
          bg={isSelected ? grepsr_colors.primary_100 : grepsr_colors.white}
          color={isSelected ? grepsr_colors.primary : grepsr_colors.black}
          borderRadius={"8px"}
          cursor={"pointer"}
          onClick={()=> navigate(`${item?.path}`)}
          _hover={!isSelected ? { bg: grepsr_colors.primary_600 } : {}}
        >
          <HStack spacing={2} py={"12px"} columnGap={"8px"} px={"12px"}>
            <Image src={item.icon} alt={item.name} fontSize={"14px"} />
            <Text
              color={item.name === "logout" ? grepsr_colors.primary : ""}
              fontSize={"14px"}
              fontWeight={"500"}
            >
              {item.name}
            </Text>
          </HStack>
        </Box>
      );
  };
  export default Item
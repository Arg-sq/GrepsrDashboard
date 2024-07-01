import React from 'react';
import { Box, HStack, Image, Text } from '@chakra-ui/react';
import { grepsr_colors } from '@grepsr/theme/Color';
import { GetSidebarState } from '@grepsr/utils/GetSidebarState';
import { useNavigate } from 'react-router-dom';

interface ISidebarItem {
  item: {
    id: number;
    icon: string;
    name: string;
    path?: string;
  };
  isSelected: boolean;
}
const Item: React.FC<ISidebarItem> = ({ item, isSelected }) => {
  const navigate = useNavigate();
  const { showSidebar } = GetSidebarState();

  return (
    <Box
      bg={isSelected ? grepsr_colors.primary_100 : grepsr_colors.white}
      color={isSelected ? grepsr_colors.primary : grepsr_colors.black}
      borderRadius={8}
      cursor={'pointer'}
      _hover={!isSelected ? { bg: grepsr_colors.primary_100 } : {}}
      onClick={() => navigate(`${item?.path}`)}>
      <HStack
        spacing={2}
        columnGap={2}
        p={showSidebar ? 3 : 2}
        justifyContent={showSidebar ? 'start' : 'center'}>
        <Image src={item.icon} alt={item.name} h={'20px'} />
        {showSidebar && (
          <Text fontSize={'medium'} fontWeight={'500'} transition={'0.3s ease-in-out'}>
            {item.name}
          </Text>
        )}
      </HStack>
    </Box>
  );
};
export default Item;

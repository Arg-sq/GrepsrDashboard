import React from 'react';
import { Button, Flex, Image, Switch, Text } from '@chakra-ui/react';
import { svgs } from '@grepsr/assets/svgs';
import { grepsr_colors } from '@grepsr/theme/Color';
import { useState } from 'react';

const DataSetHeader = () => {
  const [isEditMode, setEditMode] = useState(false);
  return (
    <Flex mt={3} justifyContent={'space-between'} width={'100%'}>
      <Flex gap={3}>
        <Button variant={'primary'}>Operations</Button>
        <Button variant={'ghost'}>
          <Image src={svgs.Filter} alt="filter" pr={2} />
          Add Filters
        </Button>
      </Flex>
      <Flex>
        <Flex alignItems={'center'} mr={3} gap={2}>
          <Text>Edit mode</Text>
          <Switch
            isChecked={isEditMode}
            h="38px"
            size="md"
            sx={{
              top: 2,
              '.chakra-switch__track::after': {
                content: isEditMode ? '"ON"' : '"OFF"',
                color: grepsr_colors.white,
                display: 'block',
                position: 'absolute',
                transform: 'translate(-50%,-50%)',
                top: '12px',
                left: isEditMode ? '28%' : '66%',
                fontWeight: 'bold',
                fontSize: 'xs'
              },
              '.chakra-switch__track': {
                width: '50px',
                height: '20px'
              },
              '.chakra-switch__thumb': {
                top: '4px',
                width: '20px',
                height: '20px',
                _checked: {
                  transform: 'translateX(30px)'
                }
              }
            }}
            onChange={() => setEditMode((prev) => !prev)}
          />
        </Flex>
        <Flex mx={3}>
          <Button variant={'ghost'}>
            <Image src={svgs.Hide} alt="filter" pr={2} />
            Show metadata
          </Button>
        </Flex>
        <Flex
          borderRadius={8}
          border={`1px solid ${grepsr_colors.gray}`}
          cursor={'pointer'}
          background={grepsr_colors.white}
          alignItems="center"
          px={1}
          height={8}>
          <Image src={svgs.Download} alt="download dataset" />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default DataSetHeader;

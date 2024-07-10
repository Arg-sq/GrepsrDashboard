import { Switch } from '@chakra-ui/react';
import { grepsr_colors } from '@grepsr/theme/Color';
import React, { FC } from 'react';

interface ISwitch {
  action: () => void;
  isChecked: boolean;
}
const ChakraSwitch: FC<ISwitch> = ({ isChecked, action }) => {
  return (
    <Switch
      isChecked={isChecked}
      h="38px"
      size="md"
      sx={{
        top: 1.5,
        '.chakra-switch__track::after': {
          content: isChecked ? '"ON"' : '"OFF"',
          color: grepsr_colors.white,
          position: 'absolute',
          top: '12px',
          transform: 'translate(-50%,-50%)',
          left: isChecked ? '28%' : '66%',
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
      onChange={action}
    />
  );
};

export default ChakraSwitch;

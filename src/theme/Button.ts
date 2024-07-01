import { defineStyle, defineStyleConfig } from '@chakra-ui/react';
import { grepsr_colors } from './Color';

const baseStyles = {
  px: 3,
  py: 4,
  borderRadius: 8,
  _focus: {
    outline: 'none '
  }
};

const primary = defineStyle({
  background: grepsr_colors.primary,
  color: grepsr_colors.white,
  ...baseStyles,
  _hover: {
    background: grepsr_colors.primary_100,
    color: grepsr_colors.primary,
    outline: 'none ',
    border: `1px solid ${grepsr_colors.primary_100}`
  }
});

const secondary = defineStyle({
  background: grepsr_colors.primary_100,
  color: grepsr_colors.primary,
  ...baseStyles,
  _hover: {
    background: grepsr_colors.gray_100,
    outline: 'none ',
    border: `1px solid ${grepsr_colors.gray_100}`
  }
});

const ghost = defineStyle({
  background: grepsr_colors.white,
  border: `1px solid ${grepsr_colors.gray}`,
  ...baseStyles,
  _hover: {
    color: grepsr_colors.black,
    outline: 'none ',
    border: `1px solid ${grepsr_colors.gray_100}`
  }
});

export const buttonTheme = defineStyleConfig({
  variants: {
    primary,
    secondary,
    ghost
  },
  sizes: {
    sm: {
      height: '32px',
      fontSize: 14,
      fontWeight: '500',
      width: 97
    },
    md: {
      height: '32px',
      fontSize: 14,
      fontWeight: '500',
      width: 'fit-content'
    }
  },

  defaultProps: {
    size: 'md',
    variant: 'primary'
  }
});

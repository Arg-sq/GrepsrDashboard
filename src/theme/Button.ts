import { defineStyle, defineStyleConfig } from "@chakra-ui/react";
import { grepsr_colors } from "./Color";

const baseStyles = {
  px: 3,
  py: 4,
  borderRadius: 8,
};

const primary = defineStyle({
  background: grepsr_colors.primary,
  color: grepsr_colors.white,
  ...baseStyles,
  _hover: {
    background: grepsr_colors.primary_100,
    color: grepsr_colors.primary,
  },
});

const secondary = defineStyle({
  background: grepsr_colors.primary_100,
  color: grepsr_colors.primary,
  ...baseStyles,
  _hover: {
    background: grepsr_colors.gray_100,
  },
});

const ghost = defineStyle({
  background: grepsr_colors.white,
  border: `1px solid ${grepsr_colors.gray}`,
  ...baseStyles,
  _hover: {
    color: grepsr_colors.black,
  },
});

export const buttonTheme = defineStyleConfig({
  variants: {
    primary,
    secondary,
    ghost,
  },
  sizes: {
    sm: {
      height: "32px",
      fontSize: 14,
      fontWeight: "500",
      width: 97,
    },
    md: {
      height: "32px",
      fontSize: 14,
      fontWeight: "500",
      width: "fit-content",
    },
    fit: {
      height: "32px",
      fontSize: 14,
      fontWeight: "500",
      width: "fit-content",
    },
    lg_fit: {
      height: "32px",
      fontSize: 16,
      fontWeight: "600",
      width: "fit-content",
    },
    lg: {
      height: "32px",
      fontSize: 16,
      fontWeight: "600",
      width: "317px",
    },
  },

  defaultProps: {
    size: "md",
    variant: "primary",
  },
});

import { extendTheme } from "@chakra-ui/react";
import { grepsr_colors } from "./Color";
import { buttonTheme } from "./Button";

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        bgColor: grepsr_colors.background,
        fontFamily: "Manrope",
        width:"100%",
      },
      a: {
        _hover: {
          textDecoration: "none !important",
          outline: "none !important",
          border: "0px !important",
        },
      },
    },
  },
  components: {
    Button: buttonTheme,
  },
});

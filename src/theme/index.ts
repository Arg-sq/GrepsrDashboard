import { extendTheme } from "@chakra-ui/react";
import { grepsr_colors } from "./color";
// import { buttonTheme } from "./Button";
// import { textTheme } from "./text";

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        bgColor: grepsr_colors.white,
        fontFamily: "'San Fransisco', sans-serif",
      },
      a: {
        _hover: {
          textDecoration: "none !important",
          outline: "none !important",
          border: "0px !important",
        },
      },
      button: {
        _hover: {
          textDecoration: "none !important",
          outline: "none !important",
          border: "0px !important",
        },
        _focus: {
          outline: "none !important",
          border: "0px !important",
        },
      },
    

    },
  },
//   components: {
//     Button: buttonTheme,
//     Text: textTheme,
//   },
});

import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: `'Inconsolata', monospace`,
    body: `'Raleway', sans-serif`,
    mono: `'Roboto Mono, monospace'`,
  },
  colors: {
    brand: {
      900: "#326789", // dark blue
      800: "#78a6c8", // light blue
      700: "#e9eef2", // light grey
      600: "#e65c4f", // red
      500: "#9f9f9f", // grey
      400: "#212427", // dark grey
    },
  },
});

export default theme;

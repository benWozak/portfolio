import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import { colors } from "./colors";
import { Headings } from "./components/heading";
import { Text } from "./components/text";
import { Tabs } from './components/Tabs'

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  breakpoints: {
    sm: "30em", // 480px
    md: "48em", // 768px
    lg: "62em", // 992px
    xl: "80em", // 1280px
    "2xl": "96em", // 1536px
    "3xl": "110em", // 1760px
  },
  semanticTokens: {
    colors: {
      ...colors,
    },
  },
  styles: {
    global: {
      body: {
        bg: "primaryBackround",
        color: "primaryText",       
        overflowX: "hidden"
      },
      html: {
        scrollBehavior: "smooth",
        bg: "primaryBackround",
        overflowX: "hidden"
      },
      ...Headings,
    },
  },
  components: {
    Text,
    Tabs,
  },
  fonts: {
    heading: `"SF Mono","Fira Code","Fira Mono","Roboto Mono",monospace;`,
    body: `"Calibre","Inter","San Francisco","SF Pro Text",-apple-system,system-ui,sans-serif`,
  },
});

export default theme;
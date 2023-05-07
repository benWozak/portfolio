import { tabsAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tabsAnatomy.keys)

const baseStyle = definePartsStyle({
  tab: {
    _selected: {
      color: 'mainColor',
      borderColor: 'inherit',
      mb: '-2px',
    },
  },
})

export const Tabs = defineMultiStyleConfig({ baseStyle })

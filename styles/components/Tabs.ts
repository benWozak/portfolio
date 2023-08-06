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
      background: 'rgb(77, 209, 202, 0.2)',
    },
    _hover: {
      background: 'rgb(77, 209, 202, 0.1)',
    },
    colorScheme: 'mainColor',
    width: '12rem'
  },
})

export const Tabs = defineMultiStyleConfig({ baseStyle })

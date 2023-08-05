import { Button, useColorMode } from '@chakra-ui/react'

interface ButtonProps {
  text: string
  type?: 'button' | 'submit' | 'reset' | undefined
}
export const ActionButton = ({ text, type }: ButtonProps) => {
  const { colorMode } = useColorMode()
  return (
    <Button
      w="15rem"
      borderWidth="1px"
      borderStyle="solid"
      borderColor="accentColor"
      h="3.5rem"
      alignItems="center"
      borderRadius="5px"
      _hover={{ bg: 'ActionButtonHover', color: 'ActionButtonHover', borderColor: 'ActionButtonHover' }}
      transition="0.2s"
      cursor="pointer"
      color="mainColor"
      _active={{ bg: 'ActionButtonActive' }}
      backdropFilter={colorMode === 'light' ? 'blur(24px)' : ''}
      type={type}
      bg="none"
      fontWeight="400"
    >
      {text}
    </Button>
  )
}

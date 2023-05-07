import { Box } from '@chakra-ui/react'

interface NavAnchorProps {
  id: string
}

export const NavAnchor = ({ id }: NavAnchorProps) => (
  <Box position={{ base: 'relative', xl: 'unset' }}>
    <Box
      id={id}
      top={{ base: '-7rem', xl: 'unset' }}
      position={{ base: 'absolute', xl: 'unset' }}
    />
  </Box>
)

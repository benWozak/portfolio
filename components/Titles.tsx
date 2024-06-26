import { Flex, Heading, useMediaQuery } from '@chakra-ui/react'
import { motion } from 'framer-motion'

interface SectionTitleProps {
  title: string
}

export const SectionTitle = ({ title }: SectionTitleProps) => {
  const [isSmallerThan768] = useMediaQuery('(max-width: 768px)')
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <Flex
        justify={{ base: 'center', xl: 'flex-start' }}
        alignItems="center"
        gap="2rem"
        mb="4rem"
        direction="row"
        pl={{ base: '0%', xl: '7%', '2xl': '12%', '3xl': '13%' }}
      >
        <Flex w={{ base: '2rem', md: '3rem' }} h="1px" bg="accentColor" />
        <Heading
          as="h2"
          fontSize={{
            base: '2rem !important',
            sm: '2rem !important',
            md: '2.8rem !important',
            lg: '3rem !important',
          }}
          textAlign="center"
          mx={{ base: '-1rem', sm: 'unset' }}
        >
          {title === 'My recent projects' && isSmallerThan768
            ? 'My projects'
            : title}
        </Heading>
        <Flex
          w={{ base: '2rem', md: '3rem' }}
          h="1px"
          bg="accentColor"
          display={{ base: 'flex', md: 'flex', xl: 'none' }}
        />
      </Flex>
    </motion.div>
  )
}

export const SectionSubTitle = ({ title }: SectionTitleProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
        <Flex w="100%" justify="center" alignItems="center" mt="4.5rem">
          <Flex
            w={{ base: '2rem', md: '3rem' }}
            h="1px"
            bg="accentColor"
          />
            <Heading as="h4" mx="2rem">{title}</Heading>
          <Flex
            w={{ base: '2rem', md: '3rem' }}
            h="1px"
            bg="accentColor"
          />
        </Flex> 
    </motion.div>
  )
}

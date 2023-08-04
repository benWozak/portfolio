import { Flex, Text, Link } from '@chakra-ui/react'
import { motion } from 'framer-motion'

import { TransparentButton } from './buttons/TransparentButton'
import { NavAnchor } from './NavAnchor'


interface Props {
  content: any
}

export const Hero = (props: Props) => {
  const { content } = props

  return (
    <Flex
      w="100%"
      h="100vh"
      alignItems="center"
      justify="center"
      id="home"
      pt={{ base: '10rem', md: '0' }}
      mb={{ base: '5rem', md: '0' }}
    >
      <NavAnchor id="home" />
      <Flex
        w="90%"
        alignItems="center"
        justify="flex-start"
        pb={{ base: '5rem', xl: '2rem' }}
        pl={{ base: '4%', md: '8%', lg: '11%', xl: '6vw', '2xl': '12vw' }}
      >
        <Flex direction="column" w="57rem" gap="1rem">
          <Flex>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Text
                as="p"
                variant="paragraphSecondary"
                fontSize={{ base: '1rem', xl: '1.1rem' }}
                lineHeight="36px"
              >
                {content.hero_prefix}
              </Text>
              <Text
                as="h1"
                variant="titleColored"
                fontSize={{ base: '4rem', md: '4.5rem', xl: '4.8rem' }}
                lineHeight="54px"
              >
                {content.hero_title}
              </Text>
              <Text
                as="p"
                variant="secondaryText"
                fontSize={{ base: '2rem', md: '2.8rem', xl: '3.8rem' }}
              >
                {/* {content.hero_title_secondary} */}
              </Text>
            </motion.div>
          </Flex>
          <Flex>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Text
                variant="secondaryText"
                mb="2rem"
                maxW="45rem"
                fontSize={{ base: '1.1rem', xl: '1.6rem' }}
              >
                {content.hero_description}
              </Text>
            </motion.div>
          </Flex>
          <Link
            // href='#projects'
            _hover={{ textDecoration: 'none' }}
            w='15rem'
            alignSelf={{ base: 'center', sm: 'unset' }}
            mr={{ base: '1rem', sm: 'unset' }}
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <TransparentButton text='Hire Me' />
            </motion.div>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  )
}

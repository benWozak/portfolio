import { Flex, Text, Link, Image, Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'

import { ActionButton } from './buttons/ActionButton'
import { NavAnchor } from './NavAnchor'

interface Props {
  content: any
}

export const Hero = (props: Props) => {
  const { content } = props

  return (
    <Flex
      w="100%"
      minHeight="100vh"
      alignItems="center"
      justify="center"
      id="home"
      pt={{ base: '6rem', sm: '0' }}
      mb={{ base: '5rem', md: '0' }}
    >
      <NavAnchor id="home" />
      <Flex
        w="95%"
        alignItems="center"
        justify="flex-start"
        // direction={{ base: 'column-reverse', md: 'row' }}
        pb={{ base: '5rem', xl: '2rem' }}
        pl={{ base: '2%', md: '2%', '2xl': '12vw' }}
      >
        <Flex
          direction="column"
          w={{
            sm: '44rem',
            md: '44rem',
            lg: '57rem',
          }}
          gap="1rem"
        >
          <Flex>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Text
                as="p"
                variant="subTextColored"
                fontSize={{ base: '1.2rem', xl: '1.4rem' }}
                lineHeight="56px"
              >
                {content.hero_prefix}
              </Text>
              <Text
                as="h1"
                variant="titlePrimary"
                fontSize={{
                  base: '5rem',
                  sm: '4rem',
                  md: '5.5rem',
                  xl: '5.8rem',
                }}
                lineHeight={{ base: '84px', sm: '60px', md: '84px' }}
              >
                {content.hero_title}
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
                variant="paragraphSecondary"
                mb="2rem"
                maxW="45rem"
                fontSize={{ base: '1.1rem', xl: '1.5rem' }}
              >
                {content.hero_description}
              </Text>
            </motion.div>
          </Flex>
          <Link
            href="#contact"
            _hover={{ textDecoration: 'none' }}
            w="15rem"
            alignSelf={{ base: 'center', sm: 'unset' }}
            mr={{ base: '1rem', sm: 'unset' }}
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <ActionButton text="Contact Me" />
            </motion.div>
          </Link>
        </Flex>
        <Flex
          direction="column"
          w={{
            sm: '28rem',
            md: '24rem',
            lg: '57rem',
          }}
          h={{ sm: '34rem', md: '44rem', lg: '44rem' }}
          gap="1rem"
          overflow="hidden"
          display={{ base: 'block', xs: 'none', sm: 'none', md: 'block' }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Box
              pt="2rem"
              background="mainColor"
              borderRadius="50% 25% 10% 0"
              overflow="hidden"
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <Image
                  boxSize="40rem"
                  objectFit="contain"
                  src="/img/heroImage.png"
                  alt="Ben Wozak"
                />
              </motion.div>
            </Box>
          </motion.div>
        </Flex>
      </Flex>
    </Flex>
  )
}

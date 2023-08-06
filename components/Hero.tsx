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
            sm: '18rem',
            md: '14rem',
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
                fontSize={{ base: '5rem',sm: '3.5rem', md: '5.5rem', xl: '5.8rem' }}
                lineHeight="84px"
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
              <ActionButton text='View Resume' />
            </motion.div>
          </Link>
        </Flex>
        <Flex 
          direction="column" 
          w={{
            sm: '18rem',
            md: '24rem',
            lg: '57rem',
          }}
          h={{ sm: '5rem', md: '25rem', lg: '44rem' }}
          gap="1rem" 
          overflowX='hidden'
          
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
              <Box 
                background={{ base: "primaryBackround", sm: "primaryBackround", md: 'mainColor'}}
                borderRadius="50% 25% 10% 0"
                overflow='hidden'
              >
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3}}
                >
                  <Image 
                      boxSize='40rem'
                      h={{ base: '35rem', sm: '35rem'}}
                      objectFit='contain'
                      src='/img/heroImage.png' 
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

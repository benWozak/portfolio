import { Flex, HStack, Tag, TagLabel, Heading, Link, Text, useColorMode, Image } from '@chakra-ui/react'
import { motion } from 'framer-motion'

interface ProjectItemProps {
  title: string
  description: string
  techStack: string[]
  liveLink: string
  codeLink?: string
  image: string
  previewLink?: string
  index: number
}

export const ProjectItem = ({
  title,
  description,
  techStack,
  liveLink,
  codeLink,
  image,
  previewLink,
  index,
}: ProjectItemProps) => {
  const { colorMode } = useColorMode()

  return (
      <Flex
        w={{
          base: '85%',
          sm: '80%',
          md: '75%',
          lg: '65%',
          xl: '80%',
          '2xl': '75%',
        }}
        borderWidth="1px"
        borderStyle="solid"
        borderColor="secondaryText"
        borderRadius="10px"
        p="2rem"
        mx="3rem"
        mb="2rem"
        direction={{ base: 'column', xl: index % 2 == 0 ? 'row' : 'row-reverse' }}
        gap={{ base: '2rem', md: '4rem' }}
        alignItems={{ base: 'flex-start', xl: 'center' }}
        justify="center"
      >
        <Flex
          w={{ base: '100%', sm: '100%', xl: '60%' }}
          borderStyle="solid"
          borderWidth="0px"
          zIndex="0"
          borderColor="grayBorder"
          borderRadius="6px"
          overflow="hidden"
          mb={{ base: '1.5rem', md: '0' }}
          cursor="pointer"
          position="relative"
          bg="rgb(255,255,255,0)"
          transition="0.3s"
          sx={{
            '&:hover': {
              transform: 'scale(1.04)',
            },

            '& img': {
              width: '100%',
              opacity: '0.9',
            },
            '& div': {
              width: '100%',
            },
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Image src={image} alt="" />
          </motion.div>
          <Link
            position="absolute"
            top="0"
            left="0"
            w="100%"
            h="100%"
            backgroundColor='rgb(255,255,255,0.05)'
            opacity="0"
            transition="0.2s"
            href={liveLink}
            isExternal
          />
        </Flex>

        <Flex
          direction="column"
          pl={{ base: '0.2rem', md: '0rem' }}
          w={{ base: '100%', xl: '40%' }}
          ml={{ base: '0', md: index % 2 == 0 ? '-0rem' : '0rem' }}
        >
          <Flex
            color="titleColor"
            fontWeight="500"
            alignItems="flex-start"
            mt={{ base: '-0.4rem', '2xl': '0' }}
            mb="1rem"
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Heading
                as="h3"
                fontSize={{
                  base: '1.8rem !important',
                  md: '2rem !important',
                  '2xl': '2rem !important',
                }}
              >
                {title}
              </Heading>
            </motion.div>
          </Flex>
          <Flex color="primaryText" mt="0.5rem">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Text variant="paragraphLarge">{description}</Text>{' '}
            </motion.div>
          </Flex>
          <Flex
            color="secondaryText"
            mt="0.7rem"
            fontSize={{ base: '0.9rem', '2xl': '1rem' }}
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <HStack 
                  spacing={4}
                  mt={'1rem'}
                  flexWrap='wrap'
                >
                  {techStack.map((item: string, index: number) => (
                    <Tag key={index} variant='outline' color='mainColor' borderColor="mainColor">
                      <TagLabel>{` ${item} `}</TagLabel>
                    </Tag>
                  ))}
              </HStack>
            </motion.div>
          </Flex>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Flex gap="1.2rem" mt="1.3rem">
              <Link
                w={{ base: '11rem', '2xl': '49%' }}
                h="3rem"
                href={liveLink}
                borderRadius="5px"
                textDecoration="none"
                _hover={{ bg: 'coloredButtonHover' }}
                transition="0.2s"
                isExternal
                borderWidth="0px"
                borderStyle="solid"
                borderColor="mainColor"
                bg="mainColor"
              >
                <Flex
                  w="100%"
                  h="100%"
                  justify="center"
                  alignItems="center"
                  color="white"
                  fontWeight="500"
                  fontSize="0.9rem"
                  textDecoration="none"
                  transition="0.2s"
                >
                  Live
                </Flex>
              </Link>
              {(codeLink || previewLink) && (
                <Link
                  w={{ base: '11rem', '2xl': '49%' }}
                  h="3rem"
                  bg="ActionButton"
                  href={codeLink ? codeLink : previewLink}
                  borderRadius="5px"
                  borderWidth="1px"
                  borderStyle="solid"
                  borderColor="mainColor"
                  _hover={{ bg: 'ActionButtonHover' }}
                  transition="0.2s"
                  isExternal
                  backdropFilter={colorMode === 'light' ? 'blur(24px)' : ''}
                >
                  <Flex
                    w="100%"
                    h="100%"
                    justify="center"
                    alignItems="center"
                    color="primaryText"
                    fontWeight="500"
                    fontSize="0.9rem"
                    transition="0.2s"
                  >
                    {codeLink ? 'Code' : 'Preview'}
                  </Flex>
                </Link>
              )}
            </Flex>
          </motion.div>
        </Flex>
      </Flex>
  )
}

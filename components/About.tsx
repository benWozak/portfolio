import React from 'react'
import {
  Flex,
  Stack,
  Text,
  Link,
  Heading,
  Icon,
  useColorMode,
  Image,
  Box
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import {
  ReactIcon,
  TypescriptIcon,
  MongoIcon,
  NodeIcon,
  CssIcon,
} from 'assets/icons'

import { SectionTitle } from './SectionTitle'
import { NavAnchor } from './NavAnchor'
import { useWindowSize } from 'utils/hooks'

interface Props {
  content: any
}

interface SkillBoxProps {
  title: string
  text: string
  logoList: React.FC<React.SVGProps<SVGSVGElement>>[]
  show: boolean
}

export const About = (props: Props) => {
  const { content } = props
  const windowSize = useWindowSize()

  const skillsList = [
    {
      title: 'Front-end Focus',
      text: 'Specializing in ReactJS, Typescript and NextJS, I build high-quality web applications that are tailored to your needs.',
      logoList: [ReactIcon, TypescriptIcon, CssIcon],
      show: content.showFE,
    },
    {
      title: 'Full Stack Development',
      text: 'Object-Oriented Programing using MERN or PERN stack: ReactJS, NodeJs, ExpressJS, MongoDB or Postrgres',
      logoList: [ReactIcon, NodeIcon, MongoIcon],
      show: content.showFS,
    },
    // {
    //   title: 'Mobile applications',
    //   text: 'Using React-Native and Progressive Web App for cross-platform compatability.',
    //   logoList: [ReactIcon, AppleIcon, AndroidIcon],
    //   show: content.showMB
    // },
  ]

  const SkillBox = ({ title, text, logoList }: SkillBoxProps) => {
    const { colorMode } = useColorMode()
    return (
      <Flex
        w={{
          base: '90%',
          sm: '70%',
          md: '24rem',
          xl: '21vw',
          '2xl': '19.5rem',
          '3xl': '20.5em',
        }}
        h={{ base: 'unset', md: '20rem', lg: '23rem' }}
        borderWidth="1px"
        borderColor="grayBorder"
        borderStyle="solid"
        borderRadius="15px"
        direction="column"
        justify="flex-start"
        alignItems="center"
        gap="1rem"
        textAlign="center"
        mx="auto"
        pt="1.5rem"
        pb="0.5rem"
        _hover={{ bg: 'primaryBgHover' }}
        transition="0.3s"
        backdropFilter={colorMode === 'light' ? 'blur(24px)' : ''}
        px={{ base: '2rem', lg: '2rem' }}
        zIndex="0"
      >
        <Flex gap="1rem" h="3.5rem" alignItems="flex-start">
          {logoList.map((logo, index) => (
            <Icon as={logo} key={index} w="36px" minW="36px" maxH="36px" />
          ))}
        </Flex>
        <Flex justify="center" alignItems="flex-start" px="2rem" mb="0rem">
          <Heading as="h4">{title}</Heading>
        </Flex>
        <Text variant="paragraphSecondary">{text}</Text>
      </Flex>
    )
  }

  return (
    <>
      <NavAnchor id="about" />
      <SectionTitle title="About Me" />
      <Flex
        w="100%"
        justify="center"
        alignItems="flex-start"
        direction={{base: "row", sm: "column", md: 'row'}}
        gap="2"
        mt="1rem"
      >
        <Flex 
          w={{
            sm: '100%',
            md: '24rem',
            lg: '57rem',
          }}
          h={{ sm: '34rem', md: '44rem', lg: '44rem' }}
          gap="1rem" 
          overflow='hidden'
          display={{base: 'block', xs:'block', sm: 'block', md: 'none'}}
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
                borderRadius={{base: "50% 25% 10% 0", sm: '40% 40% 20% 20%'}}
                overflow='hidden'
                w={{ base: '100%' }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3}}
                >
                  <Image 
                      boxSize='40rem'
                      objectFit='contain'
                      src='/img/heroImage.png' 
                      alt="Ben Wozak"
                    />
                </motion.div>
              </Box>
            </motion.div>
        </Flex>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <Stack
            spacing={8}
            direction={
              windowSize.width && windowSize.width < 1280 ? 'column' : 'row'
            }
          >
            <Flex
              justify="flex-start"
              alignItems="center"
              direction="column"
              gap={{ base: '2rem', lg: '1.7rem', xl: '1.4rem', '2xl': '2rem' }}
              px={{ base: '1rem', md: '5%', lg: '10%', xl: '0rem' }}
              wrap={{ base: 'wrap', md: 'wrap', xl: 'wrap', '2xl': 'nowrap' }}
              maxWidth={{ base: '40rem', md: '40rem', xl: '60rem' }}
              mb="4rem"
            >
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  p: (props: any) => {
                    return (
                      <Text variant="paragraphSecondary">{props.children}</Text>
                    )
                  },
                  a: (props: any) => {
                    return (
                      <Link
                        href={props.href}
                        isExternal
                        color="mainColor"
                      >{`@${props.children}`}</Link>
                    )
                  },
                }}
              >
                {content.description}
              </ReactMarkdown>
            </Flex>
          </Stack>
        </motion.div>
      </Flex>
      <Flex
        w="100%"
        justify="center"
        alignItems="center"
        direction="column"
        mb="10rem"
      >
        <Flex
          justify="center"
          alignItems="center"
          direction="row"
          gap={{ base: '2rem', lg: '1.7rem', xl: '1.4rem', '2xl': '2rem' }}
          px={{ base: '1rem', md: '15%', lg: '20%', xl: '0rem' }}
          wrap={{ base: 'wrap', md: 'wrap', xl: 'wrap', '2xl': 'nowrap' }}
          mt="2rem"
        >
          {skillsList.map((service, index, show) => (
            <>
              {show ? (
                <motion.div
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.8, delay: 0.3 * index }}
                  key={`${service.title}-${index}`}
                >
                  <SkillBox
                    title={service.title}
                    text={service.text}
                    logoList={service.logoList}
                    show={service.show}
                  />
                </motion.div>
              ) : null}
            </>
          ))}
        </Flex>
      </Flex>
    </>
  )
}

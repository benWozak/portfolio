import {
  Flex,
  ListItem,
  Text,
  UnorderedList,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Link,
  Icon,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { NavAnchor } from './NavAnchor'
import { SectionTitle } from './SectionTitle'
import { useWindowSize } from 'utils/hooks'
import { FaAngleDoubleRight } from 'react-icons/fa'

interface Props {
  content: any
}

export const Experience = (props: Props) => {
  const { content } = props
  const windowSize = useWindowSize()
  return (
    <>
      <NavAnchor id="experience" />
      <SectionTitle title="Experience" />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Flex
          w="100%"
          minHeight="20rem"
          alignItems="center"
          mb="4rem"
          direction="column"
        >
          <Flex
            w={{ base: '100%', xl: '70rem', '2xl': '72rem', '3xl': '76rem' }}
            justify="center"
            alignItems="center"
            direction="column"
          >
            <Flex
              direction="column"
              pr="2rem"
              gap="1rem"
              w={{ base: '100%', lg: '95%', xl: '85%' }}
            >
              <Tabs
                orientation={
                  windowSize.width && windowSize.width < 1000
                    ? 'horizontal'
                    : 'vertical'
                }
                defaultIndex={0}
                isLazy
              >
                <TabList>
                  {content.entries.map((entry: any, index: number) => {
                    return <Tab key={index}>{entry.employer}</Tab>
                  })}
                </TabList>
                <TabPanels>
                  {content.entries.map((entry: any, index: number) => {
                    return (
                      <TabPanel key={index}>
                        <Text
                          variant="experienceSubTitle"
                          as="p"
                          ml={{ base: 0, md: '1rem' }}
                        >
                          {entry.title}{' '}
                          <Link
                            href={entry.employer_website}
                            isExternal
                            color="mainColor"
                          >{`@${entry.employer}`}</Link>
                        </Text>
                        <Text
                          fontSize="sm"
                          as="b"
                          mb="2rem"
                          ml={{ base: 0, md: '1rem' }}
                        >
                          {entry.date}
                        </Text>
                        <UnorderedList
                          listStyleType="none"
                          mt={'1rem'}
                          ml={{ base: 0, md: '2rem' }}
                        >
                          {entry.description.map((item: any, index: number) => (
                            <ListItem key={index}>
                              <Text variant="paragraph" mb="0.2rem">
                              <Icon as={FaAngleDoubleRight} color="mainColor" />{` ${item}`}
                              </Text>
                            </ListItem>
                          ))}
                        </UnorderedList>
                      </TabPanel>
                    )
                  })}
                </TabPanels>
              </Tabs>
            </Flex>
          </Flex>
        </Flex>
      </motion.div>
    </>
  )
}

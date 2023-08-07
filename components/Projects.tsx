import { Flex, Heading } from '@chakra-ui/react'
import { ProjectItem } from './ProjectItem'
import { SectionTitle } from './SectionTitle'
import { NavAnchor } from './NavAnchor'

type Project = {
  title: string
  description: string
  techStack: string[],
  liveLink: string,
  codeLink: string,
  image: string,
}

interface Props {
  content: any
}

export const Projects = ({ content }: Props) => {
  console.log(content.projects)
  return (
    <>
      <NavAnchor id="projects" />
      <SectionTitle title="Projects" />
      <Flex w="100%" direction="column" justify="center" alignItems="center" mt="1.5rem" mb="12rem">
        <Flex
          w="100%"
          wrap="nowrap"
          justify="flex-start"
          alignItems="center"
          direction="column"
          gap={{ base: '0rem', md: '3rem' }}
          px={{ sm: '1rem', '2xl': '5rem' }}
        >
          {content.projects.map((project: Project, index: number) => (
            <ProjectItem {...project} key={project.title} index={index} />
          ))}
        </Flex>
        <Flex w="100%" justify="center" alignItems="center" mt="4.5rem">
          <Flex
            w={{ base: '2rem', md: '3rem' }}
            h="1px"
            bg="accentColor"
          />
            <Heading as="h4" mx="2rem">More On The Way</Heading>
          <Flex
            w={{ base: '2rem', md: '3rem' }}
            h="1px"
            bg="accentColor"
          />
        </Flex>
      </Flex>
    </>
  )
}

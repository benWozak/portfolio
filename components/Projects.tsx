import { Flex, Heading } from '@chakra-ui/react'
import { ProjectItem } from './ProjectItem'
import { SectionTitle, SectionSubTitle } from './Titles'
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
        <SectionSubTitle title="More On The Way" />
      </Flex>
    </>
  )
}

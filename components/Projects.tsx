import { Flex, Heading } from '@chakra-ui/react'

import PortfolioImage from '../assets/images/portfolio_pre.png'
import { ProjectItem } from './ProjectItem'
import { SectionTitle } from './SectionTitle'
import { NavAnchor } from './NavAnchor'

const projectsData = [
  {
    title: 'Portfolio',
    desc: 'My developer portfolio.',
    techStack: ['NextJS', 'Typescript', 'Chakra-UI', 'DecapCMS'],
    liveLink: 'https://benwozak.netlify.app/',
    codeLink: 'https://github.com/benWozak/portfolio',
    image: PortfolioImage,
  },
]

export const Projects = () => {
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
          {projectsData.map((project, index) => (
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

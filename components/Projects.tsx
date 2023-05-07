import { Flex } from '@chakra-ui/react'

import TailcastImage from '../assets/images/placeholder.png'
import CoinstackImage from '../assets/images/placeholder.png'
import InnovateImage from '../assets/images/placeholder.png'
import FoodhubImage from '../assets/images/placeholder.png'
import { ProjectItem } from './ProjectItem'
import { SectionTitle } from './SectionTitle'
import { NavAnchor } from './NavAnchor'

const projectsData = [
  {
    title: 'Tailcast',
    desc: 'Dark themed website template built on AstroJS, designed for SaaS startup.',
    techStack: 'Astro, React, Tailwind',
    liveLink: '',
    codeLink: '',
    image: TailcastImage,
  },
  {
    title: 'InnoVate',
    desc: 'Website for interior design company, created using client-first design rules',
    techStack: 'Webflow',
    liveLink: '',
    previewLink: '',
    image: InnovateImage,
  },
  {
    title: 'GreenHub',
    desc: 'Healthy and organic food restaurant website with lots of images and vivid color palette',
    techStack: 'HTML, CSS, JS, Shuffle.dev',
    liveLink: '',
    image: FoodhubImage,
  },
  {
    title: 'PaySafeNow',
    desc: 'Example of a website template for a startup that offers safe online payment solutions',
    techStack: 'Webflow',
    liveLink: '',
    image: CoinstackImage,
    isLight: true,
  },
]

export const Projects = () => {
  return (
    <>
      <NavAnchor id="projects" />
      <SectionTitle title="My recent projects" />
      <Flex w="100%" justify="center" alignItems="center" mt="1.5rem" mb="2rem">
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
      </Flex>
    </>
  )
}

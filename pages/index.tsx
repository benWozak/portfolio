import Head from 'next/head'
import { Flex, useColorMode } from '@chakra-ui/react'

import { NextPage, GetStaticProps } from 'next'

import { Navbar, MobileNavbar } from 'components/Navbar'
import { Hero } from 'components/Hero'
import { About } from 'components/About'
import { Projects } from 'components/Projects'
import { Experience } from 'components/Experience'
import { Contact } from 'components/Contact'


interface Props {
  hero: HeroAttributes
  experience: ExperienceAttributes
  about: AboutAttributes
  projects: ProjectAttributes
}
type HeroAttributes = {
  attributes: {
    hero_into: string
    hero_prefix: string
    hero_title_secondary: string
    hero_description: string
  }
}

type Entry = {
  title: string
  employer: string
  date: string
  location: string
  description: string[]
}

type ExperienceAttributes = {
  attributes: {
    entries: Entry[]
  }
}

type AboutAttributes = {
  attributes: {
    photo: string
    image: string
    skills: string[]
  }
}

type Project = {
  title: string
  desc: string
  techStack: string[],
  liveLink: string,
  codeLink: string,
  image: string,
}

type ProjectAttributes = {
  attributes: {
    projects: Project[]
  }
}

const Home: NextPage<Props> = (props: Props) => {
  const { colorMode } = useColorMode()
  const { hero, experience, about, projects } = props

  return (
    <>
      <Head>
        <title>Ben Wozak Portfolio</title>
        <meta name="description" content="Web development portfolio" />
        <meta name="viewport" content="width=device-width, minimum-scale=1.0" />
        <link rel="icon" href="/img/favicon.ico" />
        {/* <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" /> */}
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#0b1b1e" />


        <script
          src="https://identity.netlify.com/v1/netlify-identity-widget.js"
          async
        ></script>
      </Head>
      <Flex
        direction="column"
        pl={{ base: '0vw', md: '0vw', lg: '13rem' }}
        bgImage={colorMode === 'light' ? 'url(mountains.jpg)' : ''}
        bgRepeat="no-repeat"
        bgAttachment="fixed"
        bgSize="cover"
        transition="0.5s"
      >
        <Navbar />
        <MobileNavbar />
        <Hero content={hero.attributes} />
        <About content={about.attributes} />
        <Experience content={experience.attributes} />
        <Projects content={projects.attributes} />
        <Contact />
      </Flex>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const hero = await import(`../content/${'hero'}.md`)
  const experince = await import(`../content/${'experience'}.md`)
  const about = await import(`../content/${'about.md'}`)
  const projects = await import(`../content/${'projects.md'}`)
  return {
    props: {
      hero: hero.default,
      experience: experince.default,
      about: about.default,
      projects: projects.default
    },
  }
}

export default Home

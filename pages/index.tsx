import Head from 'next/head'
import { Flex, useColorMode } from '@chakra-ui/react'

import { NextPage, GetStaticProps } from 'next'

import { Navbar, MobileNavbar } from 'components/Navbar'
import { Hero } from 'components/Hero'
import { About } from 'components/About'
// import { Projects } from 'components/Projects'
import { Experience } from 'components/Experience'
import { Contact } from 'components/Contact'
// import { ThemeToggle } from 'components/buttons/ThemeToggle'

interface Props {
  hero: HeroAttributes
  experience: ExperienceAttributes
  about: AboutAttributes
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

const Home: NextPage<Props> = ({hero, experience, about}) => {
  const { colorMode } = useColorMode()

  return (
    <>
      <Head>
        <title>Ben Wozak Portfolio</title>
        <meta name='description' content='Web development portfolio' />
        <meta name='viewport' content='width=device-width, minimum-scale=1.0' />
        <link rel='icon' href='/favicon.ico' />
        <script src='https://identity.netlify.com/v1/netlify-identity-widget.js' async></script>
      </Head>
      <Flex
        direction='column'
        pl={{ base: '0vw', md: '0vw', lg: '13rem' }}
        bgImage={colorMode === 'light' ? 'url(mountains.jpg)' : ''}
        bgRepeat='no-repeat'
        bgAttachment='fixed'
        bgSize='cover'
        transition='0.5s'
      >
        <Navbar />
        <MobileNavbar />
        <Hero content={hero.attributes} />
        <About content={about.attributes} />
        {/* <Projects /> */}
        <Experience content={experience.attributes} />
        <Contact />
        {/* <ThemeToggle /> */}
      </Flex>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const hero = await import(`../content/${'hero'}.md`)
  const experince = await import(`../content/${'experience'}.md`)
  const about = await import(`../content/${'about.md'}`)
  return { props: { 
    hero: hero.default,
    experience: experince.default,
    about: about.default,
  } }
}

export default Home

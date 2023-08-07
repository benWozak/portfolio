import { Flex, Icon, Link, Text, Image } from '@chakra-ui/react'
import { GithubIcon } from 'assets/icons/github'
import { LinkedInIcon } from 'assets/icons/linkedIn'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface NavbarItemProps {
  text: string
  color?: string
  path: string
  onClick?: () => void
  isActive?: boolean
}

const NavbarItem = ({ text, color, path, isActive }: NavbarItemProps) => (
  <Link _hover={{ textDecoration: 'none' }} href={path}>
    <Text
      w="8rem"
      variant="navbarItem"
      textTransform="uppercase"
      fontWeight="400"
      letterSpacing="3px"
      fontSize="0.9rem"
      color={isActive ? 'mainColor' : color}
      _hover={{
        color: 'mainColor',
      }}
      cursor="pointer"
      transition="0.2s"
    >
      {text}
    </Text>
  </Link>
)

export const Navbar = () => {
  const [activeItem, setActiveItem] = useState<string>('home')
  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = ['home', 'about', 'experience','projects', 'contact']
      const scrollPosition = window.scrollY
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i])
        if (section && scrollPosition >= section.offsetTop - 300) {
          setActiveItem(sectionIds[i])
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    {
      text: 'Home',
      path: '#home',
      isActive: activeItem === 'home',
    },
    {
      text: 'About',
      path: '#about',
      isActive: activeItem === 'about',
    },
    {
      text: 'Experience',
      path: '#experience',
      isActive: activeItem === 'experience',
    },
    {
      text: 'Projects',
      path: '#projects',
      isActive: activeItem === 'projects',
    },
    {
      text: 'Contact',
      path: '#contact',
      isActive: activeItem === 'contact',
    },
  ]

  return (
    <Flex
      w="14rem"
      position="fixed"
      left="0"
      top="0"
      direction="column"
      alignItems="flex-start"
      borderWidth="0 1px 0 0"
      borderStyle="solid"
      borderColor="grayBorder"
      h="100%"
      pb="6rem"
      pl="3rem"
      bg="secondaryBackround"
      display={{ base: 'none', lg: 'flex' }}
      backdropFilter={'blur(24px)'}
    >
      <Flex direction="column" alignItems="flex-start" pb="10rem">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href='#home'>
            <Flex mb='2rem' ml='-1rem'>
              <Image boxSize='10rem' src='/img/BW_logo_light.svg' />
            </Flex>
          </Link>
        </motion.div>
      </Flex>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <nav>
          <Flex gap="1.5rem" direction="column" alignItems="flex-start">
            {navItems.map((navItem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.3 }}
              >
                <NavbarItem
                  text={navItem.text}
                  path={navItem.path}
                  isActive={navItem.isActive}
                />
              </motion.div>
            ))}
          </Flex>
        </nav>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
       <Flex justify="center" alignItems="center" gap="0rem" mt="16rem" ml="1rem">
          <Link
            href="https://github.com/benWozak"
            isExternal
            width="3rem"
            fill="githubIcon"
            _hover={{
              '& *': {
                fill: 'rgb(255,255,255,0.9)',
              },
            }}
            transition="0.3s"
            sx={{
              '& *': {
                fill: 'rgb(255,255,255,0.6)',
              },
            }}
          >
            <Flex width="1.6rem">
              <Icon as={GithubIcon} />
            </Flex>
          </Link>
          <Link
            href="https://ca.linkedin.com/in/ben-wozak"
            isExternal
            width="3rem"
            fill="LinkedInIcon"
            _hover={{
              '& *': {
                fill: 'rgb(255,255,255,0.9)',
              },
            }}
            transition="0.3s"
            sx={{
              '& *': {
                fill: 'rgb(255,255,255,0.6)',
              },
            }}
          >
            <Flex width="1.6rem">
              <Icon as={LinkedInIcon} />
            </Flex>
          </Link>
        </Flex> 
      </motion.div>
    </Flex>
  )
}

const MobileNavbarItem = ({ text, color, path, onClick }: NavbarItemProps) => (
  <Flex w="100%" justify="center" textAlign="center" alignItems="center">
    <Link _hover={{ textDecoration: 'none' }} href={path} onClick={onClick}>
      <Text
        w="12rem"
        variant="navbarItem"
        textTransform="uppercase"
        fontWeight="400"
        letterSpacing="3px"
        fontSize="1.3rem"
        color={color}
        _hover={{
          color: 'mainColor',
        }}
        cursor="pointer"
        transition="0.2s"
      >
        {text}
      </Text>
    </Link>
  </Flex>
)

export const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const mobileNavItems = [
    {
      text: 'Home',
      color: 'mainColor',
      path: '#home',
      onClick: () => setIsOpen(false),
    },
    {
      text: 'About',
      path: '#about',
      onClick: () => setIsOpen(false),
    },
    {
      text: 'Experience',
      path: '#experience',
      onClick: () => setIsOpen(false),
    },
    {
      text: 'Projects',
      path: '#projects',
      onClick: () => setIsOpen(false),
    },
    {
      text: 'Contact',
      path: '#contact',
      onClick: () => setIsOpen(false),
    },
  ]
  return (
    <>
      <Flex
        w="100%"
        h="5rem"
        bg="secondaryBackround"
        justify="space-between"
        display={{ base: 'flex', lg: 'none' }}
        position="fixed"
        top="0"
        left="0"
        pr="1.5rem"
        pl="0.8rem"
        py="0.3rem"
        alignItems="center"
        zIndex="999"
        backdropFilter={'blur(24px)'}
        borderWidth="0 0 1px 0"
        borderStyle="solid"
        borderColor="mobileNavbarBorder"
        maxW="100vw"
      >
        <Image boxSize='5rem' src='/img/BW_logo_light.svg' />
        <Flex
          w="2.7rem"
          h="3rem"
          bg="hamburgerBg"
          borderStyle="solid"
          borderWidth="1px"
          borderColor="rgb(255,255,255,0.2)"
          borderRadius="6px"
          justify="center"
          alignItems="center"
          direction="column"
          gap="0.35rem"
          cursor="pointer"
          _hover={{ bg: 'rgb(255,255,255,0.05)' }}
          transition="0.2s"
          _active={{ bg: 'rgb(255,255,255,0.05)' }}
          onClick={() => setIsOpen(!isOpen)}
          zIndex="99999"
        >
          <Flex w="1.3rem" h="1px" bg="rgb(255,255,255,0.5)"></Flex>
          <Flex w="1.3rem" h="1px" bg="rgb(255,255,255,0.5)"></Flex>
          <Flex w="1.3rem" h="1px" bg="rgb(255,255,255,0.5)"></Flex>
        </Flex>
      </Flex>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1 }}
          exit={{ opacity: 0 }}
        >
          <Flex
            gap="1.5rem"
            direction="column"
            alignItems="flex-start"
            w="100%"
            h="100%"
            bg="hamburgerBg"
            position="fixed"
            top="5rem"
            left="0"
            borderStyle="solid"
            borderWidth="1px 0 0 0"
            borderColor="rgb(255,255,255,0.1)"
            pt="2rem"
            display={{ base: 'flex', lg: 'none' }}
            zIndex="99"
            backdropFilter={'blur(24px)'}
          >
            {mobileNavItems.map((mobileNavItem, index) => (
              <MobileNavbarItem
                key={index}
                text={mobileNavItem.text}
                color={mobileNavItem.color}
                path={mobileNavItem.path}
                onClick={mobileNavItem.onClick}
              />
            ))}
            <Flex justify="center" alignItems="center" gap="0rem" ml="10rem">
              <Link
                href="https://github.com/benWozak"
                isExternal
                width="3rem"
                fill="githubIcon"
                _hover={{
                  '& *': {
                    fill: 'rgb(255,255,255,0.9)',
                  },
                }}
                transition="0.3s"
                sx={{
                  '& *': {
                    fill: 'rgb(255,255,255,0.6)',
                  },
                }}
              >
                <Flex width="1.6rem">
                  <Icon as={GithubIcon} />
                </Flex>
              </Link>
              <Link
                href="https://ca.linkedin.com/in/ben-wozak"
                isExternal
                width="3rem"
                fill="LinkedInIcon"
                _hover={{
                  '& *': {
                    fill: 'rgb(255,255,255,0.9)',
                  },
                }}
                transition="0.3s"
                sx={{
                  '& *': {
                    fill: 'rgb(255,255,255,0.6)',
                  },
                }}
              >
                <Flex width="1.6rem">
                  <Icon as={LinkedInIcon} />
                </Flex>
              </Link>
            </Flex>
          </Flex>
        </motion.div>
      )}
    </>
  )
}

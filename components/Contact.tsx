import React from 'react'
import { motion } from 'framer-motion'
import {
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  Input,
  Link,
  Textarea,
  useColorMode,
  Alert,
  AlertIcon,
} from '@chakra-ui/react'
import emailjs from 'emailjs-com'
import { ActionButton } from './buttons/ActionButton'
import { NavAnchor } from './NavAnchor'

const NEXT_SERVICE_ID = process.env.NEXT_SERVICE_ID
const NEXT_TEMPLATE_ID = process.env.NEXT_TEMPLATE_ID
const NEXT_PUBLIC_KEY = process.env.NEXT_PUBLIC_KEY

interface AlertProps {
  trigger: boolean
  status: 'success' | 'info' | 'warning' | 'error' | 'loading' | undefined
  message: string
}

export const Contact = () => {
  const form = React.useRef<any>()
  const { colorMode } = useColorMode()
  const [contact, setContact] = React.useState({
    from_name: '',
    user_email: '',
    message: '',
  })
  const [alert, setAlert] = React.useState<AlertProps>({
    trigger: false,
    status: undefined,
    message: '',
  })

  function handleAlert(status: 'success' | 'error' | undefined) {
    setAlert({
      trigger: true,
      status: status,
      message:
        status === 'success'
          ? 'Message Sent.'
          : 'Unable to send. Please try again later.',
    })
    setTimeout(() => {
      setAlert({
        trigger: false,
        status: undefined,
        message: '',
      })
    }, 5000)
  }

  const handleForm = (e: any) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    })
  }

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (NEXT_SERVICE_ID && NEXT_TEMPLATE_ID && NEXT_PUBLIC_KEY) {
      emailjs
        .sendForm(
          NEXT_SERVICE_ID,
          NEXT_TEMPLATE_ID,
          form.current,
          NEXT_PUBLIC_KEY
        )
        .then(
          () => {
            handleAlert('success')
          },
          () => {
            handleAlert('error')
          }
        )
      e.currentTarget.reset()
    } else {
      handleAlert('error')
    }
  }

  return (
    <Flex
      align="center"
      justify="center"
      direction="column"
      w={{ base: '85%', sm: '80%', md: '30rem' }}
      mx="auto"
      gap="1.5rem"
      mb="2rem"
      pb="2rem"
      mt="4rem"
      sx={{
        '& form': {
          width: '100%',
        },
      }}
    >
      <NavAnchor id="contact" />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Flex alignItems="center">
          <Flex
            w={{ base: '2rem', md: '3rem' }}
            h="1px"
            bg="accentColor"
            mb="1.5rem"
            mr={{ base: '1rem', md: '2rem' }}
          />
          <Heading
            as="h2"
            mb="2rem"
            fontSize={{
              base: '2rem !important',
              sm: '2rem !important',
              md: '2.8rem !important',
              lg: '3rem !important',
            }}
          >
            Contact me
          </Heading>
          <Flex
            w={{ base: '2rem', md: '3rem' }}
            h="1px"
            bg="accentColor"
            mb="1.5rem"
            ml={{ base: '1rem', md: '2rem' }}
          />
        </Flex>
      </motion.div>
      <form ref={form} onSubmit={handleOnSubmit}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <FormControl isRequired mb="1.5rem">
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              id="from_name"
              name="from_name"
              onChange={handleForm}
              borderColor="inputBorder"
              _hover={{
                borderColor: 'inputBorderHover',
              }}
              focusBorderColor="rgba(42, 142, 139, 0.7)"
              backdropFilter={colorMode === 'light' ? 'blur(24px)' : ''}
            />
          </FormControl>
          <FormControl isRequired mb="1.5rem">
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="user_email"
              onChange={handleForm}
              borderColor="inputBorder"
              _hover={{
                borderColor: 'inputBorderHover',
              }}
              focusBorderColor="rgba(42, 142, 139, 0.7)"
              backdropFilter={colorMode === 'light' ? 'blur(24px)' : ''}
            />
          </FormControl>
          <FormControl isRequired mb="2rem">
            <FormLabel>Message</FormLabel>
            <Textarea
              name="message"
              onChange={handleForm}
              rows={6}
              resize="none"
              borderColor="inputBorder"
              _hover={{
                borderColor: 'inputBorderHover',
              }}
              focusBorderColor="rgba(42, 142, 139, 0.7)"
              backdropFilter={colorMode === 'light' ? 'blur(24px)' : ''}
            />
          </FormControl>
          <Flex w="100%" justify="center" mt="3rem">
            <ActionButton text="Get in touch" type="submit" />
          </Flex>
        </motion.div>
      </form>
      {alert.trigger && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          exit={{ y: -30, opacity: 0 }}
        >
          <Alert status={alert.status}>
            <AlertIcon />
            {alert.message}
          </Alert>
        </motion.div>
      )}
    </Flex>
  )
}

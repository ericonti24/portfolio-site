'use client'

import {
    Box,
    Center,
    Heading,
    Text,
    Stack,
    useColorModeValue,
    Button,
    Image,
    chakra, 
    Flex
  } from '@chakra-ui/react'
  import {PROJECTS} from '../api/projects/projectsData'
  import { FaLinkedin, FaGithub, FaBars } from 'react-icons/fa';
  import { Link } from 'react-router-dom';

  
  export default function Project() {
  
    return (
    <Center id='project-section' >
    <Flex 
        // minHeight="100vh" 
        // id='project-section'
        // alignItems="center" 
        // justifyContent="center"
        direction="column"
        alignItems="center"
        justifyContent="center"
        // minHeight="100vh"
        textAlign="center"
        position="relative"
        zIndex="1"
        // p={4}
      >
        <Heading
          fontSize={{ base: '5xl', md: '8xl' }}
          mb={10}
          fontFamily={'DejaVu Sans Mono, monospace'}
          color='white'
        >
          PERSONAL PROJECTS
        </Heading>
      <Stack spacing="24" mb={24}>
      {/* <chakra.h1 
        // fontSize="4xl" 
        fontSize={{ base: '5xl', md: '8xl' }}
        fontWeight="bold" 
        textAlign="center" 
        color={'white'}
        fontFamily={'DejaVu Sans Mono, monospace'}
      >
          PERSONAL PROJECTS
        </chakra.h1> */}
        {PROJECTS.map((project, index) => (
        <Box
          maxW={{base: '380px', md: "700px"}}
          height='100%'
          // w={'full'}
          // bg={useColorModeValue('lightgray')}
          bg={useColorModeValue('white')}
          boxShadow={'5xl'}
          rounded={'md'}
          p="4"
          overflow={'hidden'}
          key={project.id}
          mb={4}
          border="8px solid white"
        >
        <Box>
          <Box bg={'gray.100'} mt={-5} mx={-6} mb={{ base: 6, md: "none" }} pos={'relative'}>
           <Image objectFit="contain" width='100%' src={project.image} alt='project-image'/>
          </Box>
          <Stack>
          <Heading
            color={useColorModeValue('black')}
            fontSize={'2xl'}
            // fontFamily={'body'}
            fontFamily={'DejaVu Sans Mono, monospace'}
            align={'center'}
            >
              {project.title}
            </Heading>
            <Text color={'black'} fontFamily={'DejaVu Sans Mono, monospace'} mb='6'>
              {project.description}
            </Text>
          </Stack>
          </Box>
          <Stack 
            direction='row' 
            spacing={4} 
            justifyContent={'center'} 
            // m={{base: '2', mb: '4'}}
          >
            <Button
              _hover={{ color: 'black', bg: 'white' }}
              color='white'
              // bg={useColorModeValue('teal')}
              bg={useColorModeValue('black')}
              variant='outline' 
              as="a" 
              href={project.link}
              target='_blank'
              rel='noopener noreferrer'
              border='none'
              fontFamily={'DejaVu Sans Mono, monospace'}
              size={{base: 'md', mb: 'md'}}
              >
                Go to project
              </Button>
            <Button
              _hover={{ color: 'black', bg: 'white' }}
              color='white'
              // bg={useColorModeValue('teal')}
              bg={useColorModeValue('black')}
              variant='outline' 
              as="a" 
              href={project.github}
              target='_blank'
              rel='noopener noreferrer'
              border='none'
              fontFamily={'DejaVu Sans Mono, monospace'}
              size={{base: 'md', mb: 'md'}}
              >
                Go to GitHub Repo
              </Button>
          </Stack>
        </Box>
      ))}
      </Stack>
    </Flex>
    </Center>
    )
  }
  





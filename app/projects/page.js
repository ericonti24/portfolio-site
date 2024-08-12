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
  import { Link } from 'react-router-dom';

  
  export default function Project() {
  
    return (
    // <Center id='project-section' border="1px solid red">
    <Flex 
        // minHeight="100vh" 
        id='project-section'
        alignItems="center" 
        justifyContent="center"
      >
      <Stack spacing="24" mb={24}>
      <chakra.h3 fontSize="4xl" fontWeight="bold" textAlign="center" color={'white'}>
          PROJECTS
        </chakra.h3>
        {PROJECTS.map((project, index) => (
        <Box
          maxW={{base: '380px', md: "700px"}}
          height='100%'
          // w={'full'}
          bg={useColorModeValue('lightgray')}
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
            fontFamily={'body'}
            align={'center'}
            >
              {project.title}
            </Heading>
            <Text color={'black'}>
              {project.description}
            </Text>
          </Stack>
          </Box>
          <Stack 
            direction='row' 
            spacing={4} 
            justifyContent={'center'} 
            m={6}
          >
            <Button
              _hover={{ color: 'black', bg: 'teal' }}
              color='white'
              bg={useColorModeValue('teal')}
              variant='outline' 
              as="a" 
              href={project.link}
              target='_blank'
              rel='noopener noreferrer'
              border='none'
              >
                Go to project
              </Button>
            <Button
              _hover={{ color: 'black', bg: 'teal' }}
              color='white'
              bg={useColorModeValue('teal')}
              variant='outline' 
              as="a" 
              href={project.github}
              target='_blank'
              rel='noopener noreferrer'
              border='none'
              >
                Go to GitHub Repo
              </Button>
          </Stack>
        </Box>
      ))}
      </Stack>
    </Flex>
    // </Center>
    )
  }
  





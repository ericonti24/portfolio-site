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
    chakra
  } from '@chakra-ui/react'
  import {PROJECTS} from '../api/projects/projectsData'
  
  export default function Project() {
  
    return (<Center id='project-section'>
      <Stack spacing="24" >
      <chakra.h3 fontSize="4xl" fontWeight="bold" textAlign="center" color={'white'}>
          PROJECTS
        </chakra.h3>
        {PROJECTS.map((project, index) => (
        <Box
          maxW={'500px'}
          height='100%'
          w={'full'}
          bg={useColorModeValue('lightgray')}
          boxShadow={'5xl'}
          rounded={'md'}
          p={4}
          overflow={'hidden'}
          key={project.id}
          mt={12}
          mb={12}
          border="1px solid black"
        >
        <Box>
          <Box h={'300px'} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
           <Image objectFit="cover" width='100%' src={project.image} alt='project-image'/>
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
              _hover={{ color: 'white', bg: 'teal' }}
              color='white'
              bg={useColorModeValue('black')}
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
              _hover={{ color: 'white', bg: 'teal' }}
              color='white'
              bg={useColorModeValue('black')}
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
    </Center>
    )
  }
  
  
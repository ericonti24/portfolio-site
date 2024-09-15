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
  
  export default function Project() {
  
    return (
    <Center id='project-section' bg='white' >
    <Flex 
        direction="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        position="relative"
        zIndex="1"
      >
        <Heading
          fontSize={{ base: '5xl', md: '8xl' }}
          mb={10}
          fontFamily={'DejaVu Sans Mono, monospace'}
          color='black'
        >
          PERSONAL PROJECTS
        </Heading>
      <Stack spacing="24" mb={24}>
        {PROJECTS.map((project, index) => (
        <Box
          maxW={{base: '370px', md: "700px"}}
          bg={useColorModeValue('white')}
          boxShadow={'5xl'}
          rounded={'xl'}
          p="4"
          overflow={'hidden'}
          key={project.id}
          mb={4}
          border="8px solid black"
        >
        <Box>
          
          <Box mt={-5} mx={-6} mb={{ base: 5, md: "none" }} textAlign="center">
            <Image   
              src={project.image} 
              alt='project-image'
              mx="auto" 
            />
          </Box>
          <Stack>
          <Heading
            color={useColorModeValue('black')}
            fontSize={'2xl'}
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
          >
            <Button
              _hover={{ color: 'black', bg: 'white' }}
              color='white'
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
  





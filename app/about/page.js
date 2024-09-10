'use client'

import { Box, Flex, Heading, Text, VStack, Grid } from '@chakra-ui/react';


const AboutSection = () => {
  return (
    <Grid
      id="about-section"
      templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
      gap={8}
      justifyItems="center"
      textAlign='center'
      mt={0}
      mb={0}
      bg='white'
      p="8"
      height={{ base: '100%', md: '100vh' }}
    >
      <Box maxW='900px' textAlign="center" gridColumn="1 / -1" >
        <Heading 
          fontSize={{ base: '5xl', md: '8xl' }}
          mb={10}
          fontFamily={'DejaVu Sans Mono, monospace'}
          color='black'
        >
          ABOUT ME
        </Heading>
        <Text fontSize='xl'fontFamily={'DejaVu Sans Mono, monospace'}>
          Here you will find out more about me, and what I continue to persue in my skills in terms of programming and technology. 
        </Text>
      </Box>
      <Box p='1' maxW='xl' fontFamily={'DejaVu Sans Mono, monospace'}>
        <Heading mb={4} fontFamily={'DejaVu Sans Mono, monospace'}>Get to know me!</Heading>
        <Text fontSize="xl" >
          Working in IT with hardware and then wanting to explore the software engineering side, I attended Flatiron school in 2021. After schooling, I continued to build and improve personal projects, as well as to learn different programming languages, frameworks, and tools.
        </Text>
        <Text fontSize="xl" mt={4}>
          I enjoy collaborating with others, solving problems, and continuously learning to improve my skills.
        </Text>
      </Box>
      <Box p='1'>
        <Heading mb={4} fontFamily={'DejaVu Sans Mono, monospace'}>My Skills</Heading>
        <Grid 
        templateColumns="repeat(2, 1fr)" 
        gap={6} textColor='white' 
        fontFamily={'DejaVu Sans Mono, monospace'}
        // border='1px solid red'
        fontSize={'xl'}
        >
          <Box bg="black" p={2} textAlign="center" borderRadius={8}>
            <Text>JavaScript</Text>
          </Box>
          <Box bg="black" p={2} textAlign="center" borderRadius={8}>
            <Text>HTML</Text>
          </Box>
          <Box bg="black" p={2} textAlign="center" borderRadius={8}>
            <Text>CSS</Text>
          </Box>
          <Box bg="black" p={2} textAlign="center" borderRadius={8}>
            <Text>React</Text>
          </Box>
          <Box bg="black" p={2} textAlign="center" borderRadius={8}>
            <Text>Next.js</Text>
          </Box>
          <Box bg="black" p={2} textAlign="center" borderRadius={8}>
            <Text>jQuery</Text>
          </Box>
          <Box bg="black" p={2} textAlign="center" borderRadius={8}>
            <Text>Ruby</Text>
          </Box>
          <Box bg="black" p={2} textAlign="center" borderRadius={8}>
            <Text>Rails</Text>
          </Box>
          <Box bg="black" p={2} textAlign="center" borderRadius={8}>
            <Text>Github</Text>
          </Box>
          <Box bg="black" p={2} textAlign="center" borderRadius={8}>
            <Text>Postman</Text>
          </Box>
          <Box bg="black" p={2} textAlign="center" borderRadius={8}>
            <Text>Tailwind</Text>
          </Box>
          <Box bg="black" p={2} textAlign="center" borderRadius={8}>
            <Text>Firebase</Text>
          </Box>
          <Box bg="black" p={2} textAlign="center" borderRadius={8}>
            <Text>PHP</Text>
          </Box>
          <Box bg="black" p={2} textAlign="center" borderRadius={8}>
            <Text>Drupal</Text>
          </Box>
          <Box bg="black" p={2} textAlign="center" borderRadius={8}>
            <Text>Squarespace</Text>
          </Box>
        </Grid>
      </Box>
    </Grid>
  )
}

export default AboutSection

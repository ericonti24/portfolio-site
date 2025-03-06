'use client'

import { Box, Flex, Heading, Text, VStack, Grid } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import {fetchAboutSectionData, fetchMySkillsData} from '../contentful/config'


const AboutSection = () => {
  const [aboutSectionData, setAboutSectionData] = useState(null)
  const [mySkilsData, setMySkillsData] = useState(null)

  useEffect(() => {
    const aboutData = async () => {
      const data = await fetchAboutSectionData();
      setAboutSectionData(data)
    }
    aboutData()
  }, [])

  useEffect(() => {
    const fetchSkills = async () => {
      const data = await fetchMySkillsData();
      setMySkillsData(data);
    };
    fetchSkills();
  }, []);
  

  if (!aboutSectionData) return null;
  if (!mySkilsData) return null;

  const {description} = aboutSectionData
  const {skills} = mySkilsData

  return (
    <Grid
      id="about-section"
      templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
      gap={8}
      justifyItems="center"
      textAlign='center'
      mt={20}
      mb={40}
      p="8"
      height={{ base: '100%', md: '100vh' }}
      color='white'
    >
      <Box maxW='900px' textAlign="center" gridColumn="1 / -1" >
        <Heading 
          fontSize={{ base: '5xl', md: '8xl' }}
          mb={10}
          fontFamily={'DejaVu Sans Mono, monospace'}
        >
          ABOUT ME
        </Heading>
      </Box>
      <Box p='1' maxW='xl' fontFamily={'DejaVu Sans Mono, monospace'}>
        <Box 
          p={{ base: '4', md: '4' }}
          position="relative" 
        >
        {/* Top Left Corner */}
        <Box
          position="absolute"
          top={0}
          left={0}
          width="20px"
          height="20px"
          borderTop="4px solid black"
          borderLeft="4px solid black"
        />

        {/* Top Right Corner */}
        <Box
          position="absolute"
          top={0}
          right={0}
          width="20px"
          height="20px"
          borderTop="4px solid black"
          borderRight="4px solid black"
        />

        {/* Bottom Left Corner */}
        <Box
          position="absolute"
          bottom={0}
          left={0}
          width="20px"
          height="20px"
          borderBottom="4px solid black"
          borderLeft="4px solid black"
        />

        {/* Bottom Right Corner */}
        <Box
          position="absolute"
          bottom={0}
          right={0}
          width="20px"
          height="20px"
          borderBottom="4px solid black"
          borderRight="4px solid black"
        />
        <Text fontSize={{base: "2xl", md: "1xl"}} mt={4}>
          {description}
        </Text>
        </Box>
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
          {skills.map((skill, index) => (
            <Box key={index} bg="black" p={2} textAlign="center" borderRadius={8}>
              <Text>{skill}</Text>
            </Box>
          ))}
          {/* <Box bg="black" p={2} textAlign="center" borderRadius={8}>
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
          </Box> */}
        </Grid>
      </Box>
    </Grid>
  )
}

export default AboutSection

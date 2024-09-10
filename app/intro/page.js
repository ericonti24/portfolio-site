"use client";

import React from 'react';
import {
  Container,
  Text,
  Flex,
  Heading,
  Image,  
  Box, 
  IconButton
} from '@chakra-ui/react';
import { FaLinkedin, FaGithub, FaBars } from 'react-icons/fa';

const IntroSection = () => {
  const SelfImage = "/img_bnr/self-image3.png";

  return (
    <Container 
      pt={{ base: 'none', md: 16 }} 
      display="flex" 
      alignItems="center" 
      justifyContent="center"
      position="relative"
    >
      <Flex
        direction={{ base: 'column-reverse', md: 'row' }} // Stack image on top of text on mobile, row on desktop
        alignItems="center"
        justifyContent="center" // Center the content horizontally and vertically
        textAlign={{ base: 'center', md: 'left' }} // Center text on mobile, left-align on desktop
        w="full"
        spacing={{ base: 4, md: 8 }} // Space between items
        // height={{ base: 'auto', md: '3xl' }} // Match height with the image on desktop
      >
        {/* Left Side: Heading and Text */}
        <Flex
          flex="1"
          direction="column"
          justifyContent="center" // Center content vertically
          align="center"
          textAlign={{ base: 'center', md: 'left' }}
          p={{ base: 'none', md: '2' }}
          // height="100%" // Make the flex container take full height
          // border='1px solid red'
        >
          <Box 
            p={{base: '0', md: '13'}}
            position="relative"
          >
            {/* Top Left Corner */}
            <Box
              position="absolute"
              top={0}
              left={0}
              width="20px"
              height="20px"
              borderTop={`2px solid white`}
              borderLeft={`2px solid white`}
            />

            {/* Top Right Corner */}
            <Box
              position="absolute"
              top={0}
              right={0}
              width="20px"
              height="20px"
              borderTop={`2px solid white`}
              borderRight={`2px solid white`}
            />

            {/* Bottom Left Corner */}
            <Box
              position="absolute"
              bottom={0}
              left={0}
              width="20px"
              height="20px"
              borderBottom={`2px solid white`}
              borderLeft={`2px solid white`}
            />

            {/* Bottom Right Corner */}
            <Box
              position="absolute"
              bottom={0}
              right={0}
              width="20px"
              height="20px"
              borderBottom={`2px solid white`}
              borderRight={`2px solid white`}
            />
            <Heading
              fontWeight={600}
              fontSize={{ base: '5xl', md: '9xl' }}
              lineHeight={'110%'}
              color={'white'}
              textDecoration="underline" // Underline the heading
              fontFamily={'DejaVu Sans Mono, monospace'}
            >
              ERIC ONTIVEROS
            </Heading>
            <Text
              fontSize={{ base: '2xl', md: '4xl' }}
              color='white'
              fontFamily={'DejaVu Sans Mono, monospace'}
              mt={{ base: '4', md: '8' }}
            >
              SOFTWARE ENGINEER & TECH ENTHUSIAST.
            </Text>
            <Text
              fontSize={{ base: 'sm', md: 'md' }}
              color='white'
              fontFamily={'DejaVu Sans Mono, monospace'}
              mt={{ base: '4', md: '8' }}
            >
              I am a passionate Software Engineer with a focus on creating dynamic web applications using modern web technologies. 
              I thrive on problem-solving and continuously look for ways to improve efficiency and usability across my projects.            
            </Text>
            {/* Social Media Icons */}
            <Flex flex="1" justifyContent="center" mt={{ base: '1', md: '14' }}>
              <IconButton
                as='a'
                aria-label="LinkedIn"
                icon={<FaLinkedin />}
                variant="ghost"
                color="white"
                fontSize="lg"
                href="https://www.linkedin.com/in/eontiveros"
                target="_blank"
                rel="noopener noreferrer"
                ml={4}
                bg='black'
                _hover={{
                  color: 'none',
                  bg: 'black',
                }}
              />
              <IconButton
                as='a'
                aria-label="GitHub"
                icon={<FaGithub />}
                variant="ghost"
                color="white"
                fontSize="lg"
                href="https://github.com/ericonti24"
                target="_blank"
                rel="noopener noreferrer"
                ml={4}
                bg='black'
                _hover={{
                  color: 'none',
                  bg: 'black',
                }}
              />
            </Flex>
          </Box>
        </Flex>
        {/* Right Side: Image */}
        <Image
          src={SelfImage}
          alt="Eric Ontiveros"
          objectFit="contain" 
          boxSize={{ base: "xs", md: "2xl" }} // Ensure the image takes the same height as the Flex
          mb={{ base: '6', md: '0' }}
          // border='1px solid white'
          // filter='grayscale(100%)'
        />
      </Flex>
    </Container>
  );
};

export default IntroSection;
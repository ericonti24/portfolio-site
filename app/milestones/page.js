'use client';

import React, { useState, useEffect } from 'react';
import { Box, Container, Flex, Text, Heading, VStack, HStack, Divider, Center } from '@chakra-ui/react';
import { MILESTONES } from '../api/milestones/milestonesData';
import '@fontsource/orbitron/400.css';

const frameColor = 'black';
const borderRadius = '25px'; 
const borderSize = '7px'; 
const inlaySize = '4px'; 
const inlayOpacity = '0.5'; 
const cardSize = '300px'; 
const spacing = '60px'; 
const font = "'DejaVu Sans Mono, monospace'"

const Milestones = () => {
  const [isMobile, setIsMobile] = useState(false); 

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Container
      id='milestones-section'
      maxWidth="100%"
      p={0}
      m={0}
      color="white"
      position="relative"
      overflow="hidden"
      fontFamily={'DejaVu Sans Mono, monospace'}
      bg='white'
      // border='solid black'
    >
      {/* Background */}
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        zIndex="-2"
      />

      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
        textAlign="center"
        position="relative"
        zIndex="1"
        p={4}
      >
        <Heading
          fontSize={{ base: '6xl', md: '8xl' }}
          mb={10}
          fontFamily={'DejaVu Sans Mono, monospace'}
          color='black'
        >
          MILESTONES
        </Heading>
      <HStack
        spacing={spacing} 
        wrap="wrap"
        justify="center"
        align="center"
      >
        {MILESTONES.map((milestone) => (
          <Box
            key={milestone.id}
            width={'80%'} 
            height={'100%'} 
            p={4}
            position="relative"
            overflow="hidden"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
            }}
          >
            {/* Top Left Corner */}
            <Box
              position="absolute"
              top={0}
              left={0}
              width="20px"
              height="20px"
              borderTop={`4px solid black`}
              borderLeft={`4px solid black`}
            />

            {/* Top Right Corner */}
            <Box
              position="absolute"
              top={0}
              right={0}
              width="20px"
              height="20px"
              borderTop={`4px solid black`}
              borderRight={`4px solid black`}
            />

            {/* Bottom Left Corner */}
            <Box
              position="absolute"
              bottom={0}
              left={0}
              width="20px"
              height="20px"
              borderBottom={`4px solid black`}
              borderLeft={`4px solid black`}
            />

            {/* Bottom Right Corner */}
            <Box
              position="absolute"
              bottom={0}
              right={0}
              width="20px"
              height="20px"
              borderBottom={`4px solid black`}
              borderRight={`4px solid black`}
            />

            {/* Content */}
            <Text fontSize="lg" color={frameColor} textAlign="center" fontFamily={font}>
              {milestone.date}
            </Text>
            <VStack spacing={2} mb={3} alignItems="center" textAlign="center">
              <Heading fontSize="2xl" color="black" fontFamily={font}>
                {milestone.title}
              </Heading>
              <Text fontSize="lg" color="black" fontFamily={font}>
                {milestone.description}
              </Text>
            </VStack>
          </Box>
        ))}
      </HStack>
      </Flex>
    </Container>
  );
};

export default Milestones;




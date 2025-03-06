'use client';

import React, { useState, useEffect } from 'react';
import { Box, Container, Flex, Text, Heading, VStack, HStack } from '@chakra-ui/react';
import { fetchMilestonesData } from '../contentful/config';
import '@fontsource/orbitron/400.css';

const frameColor = 'black';
const borderRadius = '25px'; 
const borderSize = '7px'; 
const inlaySize = '4px'; 
const inlayOpacity = '0.5'; 
const cardSize = '300px'; 
const spacing = '60px'; 
const font = "'DejaVu Sans Mono, monospace'";

const Milestones = () => {
  const [milestones, setMilestones] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchMilestonesData();
      // console.log("Milestones received in component:", data); 
      if (Array.isArray(data) && data.length > 0) {
        const sortedMilestones = data.sort((a, b) => new Date(b.date) - new Date(a.date));
        setMilestones(sortedMilestones);
      } else {
        console.error("Milestones data is not valid:", data);
      }
    };

    getData();
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
      fontFamily={font}
      bg='white'
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
          fontSize={{ base: '5xl', md: '8xl' }}
          mb={10}
          fontFamily={font}
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
          {milestones.length > 0 &&
            milestones.map((milestone, index) => (
              <Box
                key={index}
                width={'80%'}
                height={'100%'}
                p={4}
                position="relative"
                overflow="hidden"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
              >
                {/* Top Left Corner */}
                <Box
                  position="absolute"
                  top={0}
                  left={0}
                  width="20px"
                  height="20px"
                  borderTop={`4px solid ${frameColor}`}
                  borderLeft={`4px solid ${frameColor}`}
                />

                {/* Top Right Corner */}
                <Box
                  position="absolute"
                  top={0}
                  right={0}
                  width="20px"
                  height="20px"
                  borderTop={`4px solid ${frameColor}`}
                  borderRight={`4px solid ${frameColor}`}
                />

                {/* Bottom Left Corner */}
                <Box
                  position="absolute"
                  bottom={0}
                  left={0}
                  width="20px"
                  height="20px"
                  borderBottom={`4px solid ${frameColor}`}
                  borderLeft={`4px solid ${frameColor}`}
                />

                {/* Bottom Right Corner */}
                <Box
                  position="absolute"
                  bottom={0}
                  right={0}
                  width="20px"
                  height="20px"
                  borderBottom={`4px solid ${frameColor}`}
                  borderRight={`4px solid ${frameColor}`}
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
            ))
          }
        </HStack>
      </Flex>
    </Container>
  );
};

export default Milestones;








"use client"

import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Text,
  Flex,
  Heading,
  Grid,
  Image
} from '@chakra-ui/react';
import selfImage from '../api/img_bnr/self-image3.png'

const IntroSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); 
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Container maxWidth="7xl" p={{ base: 2, sm: 10 }} >
       <Grid
        templateColumns={{ base: "1fr", md: "1fr 1fr" }}
        gap={10}
        alignItems="center"
        justifyContent="center"
        mb={20}
      >
        <Box textAlign={{ base: "center", md: "left" }}>
          <Heading as="h1" fontSize="8xl" fontWeight="bold" mb={2} fontFamily='sans-serif' color='teal'>
            Hi, I'm Eric
          </Heading>
          <Text fontSize="2xl" color='lightgray' mb={1}>
            I enjoy web designing, developing and passionate about tech!
          </Text>
        </Box>
        {!isMobile && (
          <Box>
            <Image src="/_next/static/media/self-image3.f98e0bfe.png" alt="Eric's Image" borderRadius="15px 90px" boxSize="500px" />
          </Box>
        )}
      </Grid>
      {isMobile && (
        <Flex justifyContent="center" mt={8} mb={20}>
          <Box>
            <Image src="/_next/static/media/self-image3.f98e0bfe.png" alt="Eric's Image" borderRadius="15px 90px" boxSize="300px" />
          </Box>
        </Flex>
      )}
    </Container>
  );
};

export default IntroSection;



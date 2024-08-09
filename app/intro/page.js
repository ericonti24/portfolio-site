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
    <Container maxWidth="7xl" p={{ base: 2, sm: 20 }} >
       <Grid
        templateColumns={{ base: "1fr", md: "1fr 1fr" }}
        gap={10}
        alignItems="center"
        justifyContent="center"
        mb={0}
        mt={8}
      >
        <Box textAlign={{ base: "center", md: "left" }} mt={0} >
          <Heading as="h1" fontSize="7xl" fontWeight="bold" mt={0} fontFamily='sans-serif' color='teal'>
            Hi, I'm Eric
          </Heading>
          <Text fontSize="4xl" color='lightgray' mt={10} >
            I enjoy web designing, developing and passionate about tech!
          </Text>
        </Box>
        {!isMobile && (
          <Box>
            <Image ml={50} src="/_next/static/media/self-image3.f98e0bfe.png" alt="Eric's Image" borderRadius="0px 210px" boxSize="500px" objectFit="contain"/>
          </Box>
        )}
      </Grid>
      {isMobile && (
        <Flex justifyContent="center" mb={10} mt={10}>
          <Box>
            <Image src="/_next/static/media/self-image3.f98e0bfe.png" alt="Eric's Image" borderRadius="0px 150px" boxSize="390px" objectFit="contain"/>
          </Box>
        </Flex>
      )}
    </Container>
  );
};

export default IntroSection;



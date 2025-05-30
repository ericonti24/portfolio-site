'use client';

import { useEffect, useState } from 'react';
import { Box, Button, Heading, Text, Flex, Image } from '@chakra-ui/react';
import { scrollToSection } from '../components/scrollToSection';
import { fetchHeroSectionData } from '../contentful/config';

export default function IntroSection() {
  const [heroSectionData, setHeroSectionData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchHeroSectionData();
      setHeroSectionData(data);
    };
    
    getData();
  }, []);

  if (!heroSectionData) return null;

  const { descriptionLine1, descriptionLine, imageUrl } = heroSectionData;
  const [firstWord, secondWord] = descriptionLine1.split(' ');

  const scrollWithOffset = (section) => {
    const offset = 70;
    scrollToSection(section, offset);
  };

  return (
    <>
      <Box
        textAlign={{ base: 'center', md: 'left' }}
        alignItems={{ base: 'center', md: 'flex-start' }}
        width={{ base: '100%', md: 'fit-content' }}
        float={{ base: 'none', md: 'left' }}
        mb={{ base: '6', md: '0' }}
        mt={{ base: '6', md: '40' }}
      >
        <Heading as="h1" fontSize={{ base: '6xl', md: '160px' }} fontFamily={'DejaVu Sans Mono, monospace'} color='white'>
          {firstWord}
        </Heading>
        <Heading as="h1" fontSize={{ base: '6xl', md: '160px' }} mb="0" fontFamily={'DejaVu Sans Mono, monospace'} color='black'>
          {secondWord}
        </Heading>

        <Flex justifyContent="center" mt="4">
          <Button onClick={() => scrollWithOffset('project')} size="lg" bg='transparent' color='white' border='4px solid white' mb={{ base: '4', md: '0' }} _hover={{ color: 'none' }}>
            My Projects
          </Button>
        </Flex>
      </Box>

      <Box p={{ base: '4', md: '4' }} position="relative" width={{ base: '100%', md: '50%' }} float={{ base: 'none', md: 'right' }} mt={{ base: '6', md: '60' }}>
        <Box position="absolute" top={0} left={0} width="20px" height="20px" borderTop="4px solid black" borderLeft="4px solid black" />
        <Box position="absolute" top={0} right={0} width="20px" height="20px" borderTop="4px solid black" borderRight="4px solid black" />
        <Box position="absolute" bottom={0} left={0} width="20px" height="20px" borderBottom="4px solid black" borderLeft="4px solid black" />
        <Box position="absolute" bottom={0} right={0} width="20px" height="20px" borderBottom="4px solid black" borderRight="4px solid black" />
        <Text fontSize={{ base: "md", md: "xl" }} textAlign={{ base: 'center', md: 'center' }} fontWeight='bold' color='white' fontFamily={'DejaVu Sans Mono, monospace'}>
          {descriptionLine}
        </Text>
      </Box>

      <Box position="relative" width={{ base: '100%', md: '45%' }} float={{ base: 'none', md: 'right' }} mb={{ base: '20', md: 'none' }}>
        <Image src={imageUrl} alt='Coding Image' boxSize={{ base: 'none', md: '620px' }} />
      </Box>
    </>
  );
}

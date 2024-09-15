'use client'
import { Box, Button, Heading, Text, Flex, Image } from '@chakra-ui/react';
import { scrollToSection } from '../components/scrollToSection';
import image from '../api/img_bnr/codingImage.png'
// console.log(image);


export default function IntroSection() {
  const codingImage = "/_next/static/media/codingImage.0cd690b6.png"

  const scrollWithOffset = (section) => {
    const offset = 70; 
    scrollToSection(section, offset);
  };

  return (
    <>
      <Box
        textAlign={{ base: 'center', md: 'left' }}
        alignItems={{ base: 'center', md: 'flex-start' }}
        // border='1px solid red'
        width={{ base: '100%', md: 'fit-content' }}
        float={{ base: 'none', md: 'left' }} 
        mb={{ base: '6', md: '0' }} 
        mt={{ base: '6', md: '40' }}
      >
        <Heading 
          as="h1" 
          fontSize={{ base: '6xl', md: '160px' }} 
          fontFamily={'DejaVu Sans Mono, monospace'}
          color='white'
        >
          Eric
        </Heading>
        <Heading 
          as="h1" 
          fontSize={{ base: '6xl', md: '160px' }} 
          mb="0" 
          fontFamily={'DejaVu Sans Mono, monospace'}
          color='black'
        >
          Ontiveros
        </Heading>
        
        {/* Button Container */}
        <Flex justifyContent="center" mt="4"> 
          <Button 
            onClick={() => scrollWithOffset('project')}
            size="lg" 
            bg='transparent' 
            color='white' 
            border='4px solid white'
            mb={{ base: '4', md: '0' }} 
            _hover={{color: 'none'}}
          >
            My Projects
          </Button>
        </Flex>
      </Box>

      {/* Right Side - Text */}
      <Box 
        p={{ base: '4', md: '4' }}
        position="relative"
        width={{ base: '100%', md: '50%' }} 
        float={{ base: 'none', md: 'right' }} 
        mt={{ base: '6', md: '60' }} 
        // border="1px solid red" 
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

        <Text 
          fontSize={{ base: "2xl", md: "xl"}} 
          textAlign={{ base: 'center', md: 'center' }} 
          fontWeight='bold'
          color='white'
          fontFamily={'DejaVu Sans Mono, monospace'}
        >
          Software Engineer with a focus on creating dynamic web applications
          using modern web technologies.
        </Text>
      </Box>

      {/* Image Box */}
      <Box 
        position="relative"
        width={{ base: '100%', md: '45%' }}
        float={{ base: 'none', md: 'right' }} 
        // border="1px solid red" 
        mb={{ base: '12', md: '12'}}
      >
        <Image src={codingImage} alt='Coding Image' boxSize={{base: 'none', md: '620px'}}/>
      </Box>
    </>
  );
}
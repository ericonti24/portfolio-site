"use client"

import { useEffect } from 'react'
// import { ChakraProvider, Box } from "@chakra-ui/react";
import NavBar from './components/NavBar.js';
import Footer from './components/Footer.js'
import IntroSection from './intro/page.js';
import Milestones from './milestones/page.js';
import AboutSection from './about/page.js';
import ProjectSection from './projects/page.js'

export default function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const scrollToSection = (section, offset = 0) => {
    let target = document.getElementById(`${section}-section`);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - offset,
        behavior: "smooth",
      });
    }
  };

  return (
      <div id='home-section'>
          {/* <NavBar scrollToSection={scrollToSection}/> */}
          <IntroSection />
          {/* <Milestones />
          <AboutSection />
          <ProjectSection />
          <Footer /> */}
        </div>
  );
}

// 'use client'

// import { Box, Flex, Heading, Text, Image } from '@chakra-ui/react';

// const Home = () => {
//   const SelfImage = "/img_bnr/self-image3.png";

//   return (
//     <Box
//       as="section"
//       // height="100vh" 
//       display="flex"
//       flexDirection="column"
//       justifyContent="center"
//       alignItems="center"
//       bg="black"
//       color="white"
//       fontFamily={'Arial, sans-serif'}
//       overflow="hidden"
//     >
//       <Flex
//         direction={{ base: 'column', md: 'row' }} // Column on mobile, row on desktop
//         alignItems="center" // Center items vertically
//         justifyContent="center" // Center on all devices
//         textAlign="center" // Center text on all devices
//         width="100%"
//         maxW="1200px" // Max width for large screens
//         px={{ base: 4, md: 8 }}
//         py={{ base: 8, md: 10 }}
//       >
//         {/* Heading and Text Section */}
//         <Box 
//           flex="1" 
//           display="flex"
//           flexDirection="column"
//           alignItems="center"
//           justifyContent="center"
//           mb={{ base: 6, md: 0 }}
//           textAlign="center"
//         >
//           {/* Heading */}
//           <Box mb={6}>
//             <Heading
//               as="h1"
//               fontSize={{ base: '4xl', md: '6xl' }}
//               fontWeight="bold"
//               color="white"
//               mb={4}
//               textTransform="uppercase"
//               letterSpacing="wide"
//               fontFamily={'Arial, sans-serif'}
//             >
//               Eric Ontiveros
//             </Heading>
//           </Box>

//           {/* Text */}
//           <Box>
//             <Text fontSize={{ base: 'lg', md: '2xl' }} opacity={0.8} color="gray.300">
//               FULL STACK SOFTWARE ENGINEER & TECH ENTHUSIAST
//             </Text>
//           </Box>
//         </Box>
  
//         {/* Image Section */}
//         <Box
//           flex="1"
//           display="flex"
//           justifyContent="center"
//           alignItems="center"
//           mb={{ base: 6, md: 0 }}
//           px={{ base: 4, md: 8 }}
//         >
//           <Image
//             src={SelfImage}
//             alt="Eric Ontiveros"
//             borderRadius="full"
//             boxSize={{ base: '80%', md: '60%' }} // Adjusted box size for mobile
//             maxH={{ base: '400px', md: '500px' }}
//             objectFit="cover"
//             border="4px solid white"
//           />
//         </Box>
//       </Flex>
//     </Box>
//   );      
// }

// export default Home;



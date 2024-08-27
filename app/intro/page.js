// "use client"

// import React, { useEffect, useState } from 'react';
// import {
//   Box,
//   Container,
//   Text,
//   Flex,
//   Heading,
//   Grid,
//   Image, 
//   Center
// } from '@chakra-ui/react';

// const IntroSection = () => {

//   return (
//     <Container maxWidth="8xl" p={{ base: 2, sm: 110 }} >
//        <Grid
//         templateColumns={{ base: "1fr", md: "1fr 1fr" }}
//         gap={10}
//         alignItems="center"
//         justifyContent="center"
//         mb={0}
//         mt={8}
//       >
//         <Box textAlign={{ base: "center", md: "left" }} mt={6} >
//           <Box
//             as="span"
//             borderBottom={{ base: '6px solid', md: '9px solid' }}
//             borderColor={{ base: 'teal.400', md: 'teal.400'}}
//             display="inline-block"
//           >
//             <Heading 
//               fontWeight={600}
//               fontSize={{ base: '6xl', md: '9xl' }}
//               lineHeight={'110%'}
//               color={'black'}
//               textAlign="center"
//             >
//               Hi, I'm Eric
//             </Heading>
//           </Box>
//           <Text fontSize="4xl" color='black' mt={2} >
//             I enjoy web designing, developing and passionate about tech!
//           </Text>
//         </Box>
//         <Flex justifyContent="center" mb={{base: "0", md: "0"}} mt={{base: "0", md: "0"}}>
//           <Box>
//             <Image 
//               src="/_next/static/media/self-image3.f98e0bfe.png" 
//               alt="Eric's Image" 
//               ml={{base: "0", md: "50"}}
//               // borderRadius={{base: "900px 900px", md: "900px 900px"}} 
//               boxSize={{base: "390px", md: "600px"}} 
//               objectFit="contain"
//             />
//           </Box>
//         </Flex>
//       </Grid>
//     </Container>
//   );
// };

// export default IntroSection;


"use client"

import React from 'react';
import {
  Box,
  Container,
  Text,
  Flex,
  Heading,
} from '@chakra-ui/react';

const IntroSection = () => {
  return (
    <Container maxWidth="8xl" >
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        minHeight={{ base: '470px', sm: '550px' }}
        textAlign="center"
        mt={{ base: 10, md: 40 }}
        mb={{ base: 40, md: 60 }}
      >
        <Box
          as="span"
          borderBottom={{ base: '6px solid', md: '9px solid' }}
          borderColor={{ base: 'teal.400', md: 'teal.400'}}
          display="inline-block"
          mb={{ base: '4', md: '4' }}
          width={{base: '310px', md: 'auto'}}
        >
          <Heading 
            fontWeight={600}
            fontSize={{ base: '4xl', md: '9xl' }}
            lineHeight={'110%'}
            color={'white'}
            textAlign="center" 
            fontFamily={'DejaVu Sans Mono, monospace'}
          >
            ERIC ONTIVEROS
          </Heading>
        </Box>
        <Text 
          fontSize={{ base: '2xl', md: '4xl' }} 
          color='white' 
          fontFamily={'DejaVu Sans Mono, monospace'}
        >
          FREELANCE FULL STACK SOFTWARE ENGINEER & TECH ENTHUSIAST.
        </Text>
      </Flex>
    </Container>
  );
};

export default IntroSection;


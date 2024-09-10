// 'use client'

// import React, { useState, useEffect } from 'react';
// import {
//   Box,
//   chakra,
//   Container,
//   Text,
//   HStack,
//   VStack,
//   Flex,
//   useColorModeValue,
// } from '@chakra-ui/react';
// import { MILESTONES } from '../api/milestones/milestonesData';

// const Milestones = () => {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     function handleResize() {
//       setIsMobile(window.innerWidth < 768); 
//     }

//     handleResize(); 

//     window.addEventListener('resize', handleResize);

//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   return (
//     <Container id='milestones-section' maxWidth="100%" p={{ base: 4, sm: 10 }} >
//       <chakra.h3 
//         fontSize="4xl" 
//         fontWeight="bold" 
//         mb={4} 
//         textAlign="center" 
//         color={'white'}
//         fontFamily={'DejaVu Sans Mono, monospace'}
//       >
//         MILESTONES
//       </chakra.h3>
//       {MILESTONES.map((milestone) => (
//         <Flex key={milestone.id} mb="10px">
//           {/* Desktop view(left card) */}
//           {!isMobile && milestone.id % 2 === 0 && (
//             <>
//               <EmptyCard />
//               <LineWithDot />
//               <Card {...milestone} />
//             </>
//           )}
//           {/* Mobile view */}
//           {isMobile && (
//             <>
//               <LineWithDot />
//               <Card {...milestone} />
//             </>
//           )}
//           {/* Desktop view(right card) */}
//           {!isMobile && milestone.id % 2 !== 0 && (
//             <>
//               <Card {...milestone} />
//               <LineWithDot />
//               <EmptyCard />
//             </>
//           )}
//         </Flex>
//       ))}
//     </Container>
//   );
// };

// const Card = ({ id, title, description, date, isMobile }) => {
//   const isEvenId = id % 2 === 0;
//   let borderWidthValue = isEvenId ? '15px 15px 15px 0' : '15px 0 15px 15px';
//   let leftValue = isEvenId ? '-15px' : 'unset';
//   let rightValue = isEvenId ? 'unset' : '-15px';

//   if (isMobile) {
//     leftValue = '-15px';
//     rightValue = 'unset';
//     borderWidthValue = '15px 15px 15px 0';
//   }

//   return (
//     <HStack
//       flex={1}
//       p={{ base: 3, sm: 6 }}
//       bg={useColorModeValue('gray.100', 'gray.800')}
//       spacing={5}
//       rounded="lg"
//       alignItems="center"
//       pos="relative"
//       // _before={{
//       //   content: `""`,
//       //   w: '0',
//       //   h: '0',
//       //   borderColor: `transparent ${useColorModeValue('#edf2f6', '#1a202c')} transparent`,
//       //   borderStyle: 'solid',
//       //   borderWidth: borderWidthValue,
//       //   position: 'absolute',
//       //   left: leftValue,
//       //   right: rightValue,
//       //   display: 'block'
//       // }}
//     >
//       <Box >
//         <Text fontSize="lg" color={isEvenId ? 'teal' : 'teal'}>
//           {date}
//         </Text>

//         <VStack spacing={2} mb={3} textAlign="left">
//           <chakra.h1 fontSize="2xl" lineHeight={1.2} fontWeight="bold" w="100%" color="black">
//             {title}
//           </chakra.h1>
//           <Text fontSize="md" color="black">{description}</Text>
//         </VStack>
//       </Box>
//     </HStack>
//   );
// };

// const LineWithDot = () => {
//   return (
//     <Flex
//       pos="relative"
//       alignItems="center"
//       mr={{ base: '40px', md: '40px' }}
//       ml={{ base: '0', md: '40px' }}
//     >
//       <chakra.span
//         position="absolute"
//         left="50%"
//         height="calc(100% + 10px)"
//         border="1px solid"
//         borderColor={useColorModeValue('gray.200', 'gray.700')}
//         top="0px"
//       ></chakra.span>
//       <Box pos="relative" p="10px">
//         <Box
//           pos="absolute"
//           top="0"
//           left="0"
//           bottom="0"
//           right="0"
//           width="100%"
//           height="100%"
//           backgroundSize="cover"
//           backgroundRepeat="no-repeat"
//           backgroundPosition="center center"
//           bg={useColorModeValue('teal')}
//           borderRadius="100px"
//           backgroundImage="none"
//           opacity={1}
//         ></Box>
//       </Box>
//     </Flex>
//   );
// };

// const EmptyCard = () => {
//   return <Box flex={{ base: 0, md: 1 }} p={{ base: 0, md: 6 }} bg="transparent"></Box>;
// };

// export default Milestones;

// 'use client';

// import React, { useState, useEffect } from 'react';
// import { Box, Container, Flex, Text, Heading, VStack, HStack } from '@chakra-ui/react';
// import { MILESTONES } from '../api/milestones/milestonesData';

// // Define color for frame
// const frameColor = 'rgba(0, 255, 255, 0.5)';
// const cardSize = '300px'; // Fixed size for each milestone card

// const Milestones = () => {
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768);
//     };

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   return (
//     <Container
//       maxWidth="100%"
//       p={0}
//       m={0}
//       minHeight="100vh"
//       color="white"
//       position="relative"
//       overflow="hidden"
//     >
//       {/* Background */}
//       <Box
//         position="absolute"
//         top="0"
//         left="0"
//         width="100%"
//         height="100%"
//         bg="linear-gradient(135deg, rgba(0, 0, 0, 1), rgba(50, 50, 50, 0.8))"
//         zIndex="-2"
//       />

//       <Flex
//         direction="column"
//         alignItems="center"
//         justifyContent="center"
//         minHeight="100vh"
//         textAlign="center"
//         position="relative"
//         zIndex="1"
//         p={4}
//       >
//         <Heading
//           fontSize="4xl"
//           mb={12}
//           fontFamily="Orbitron, sans-serif"
//           textShadow="0 0 20px rgba(255, 255, 255, 0.7)"
//         >
//           MILESTONES
//         </Heading>
//         <HStack spacing={10} wrap="wrap" justify="center">
//           {MILESTONES.map((milestone) => (
//             <Box
//               key={milestone.id}
//               width={cardSize}
//               height={cardSize}
//               mb={8}
//               p={4}
//               position="relative"
//               overflow="hidden"
//               border={`5px solid ${frameColor}`}
//               borderRadius="lg"
//               bg="rgba(0, 0, 0, 0.7)"
//               style={{
//                 // Frame styling with slanted corners
//                 borderImage: `linear-gradient(135deg, ${frameColor} 0%, transparent 50%, ${frameColor} 100%)`,
//                 borderImageSlice: 1,
//                 borderWidth: '5px',
//                 borderStyle: 'solid',
//                 // clipPath: 'polygon(0% 0%, 90% 0%, 100% 10%, 100% 90%, 10% 100%, 0% 90%)'
//                 clipPath: 'polygon(0% 10%, 10% 0%, 90% 0%, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0% 90%)'
//               }}
//             >
//               <Text fontSize="lg" color={frameColor}>
//                 {milestone.date}
//               </Text>
//               <VStack spacing={2} mb={3} alignItems="start">
//                 <Heading fontSize="2xl" color="white">
//                   {milestone.title}
//                 </Heading>
//                 <Text fontSize="md" color="white">
//                   {milestone.description}
//                 </Text>
//               </VStack>
//             </Box>
//           ))}
//         </HStack>
//       </Flex>
//     </Container>
//   );
// };

// export default Milestones;

'use client';

import React, { useState, useEffect } from 'react';
import { Box, Container, Flex, Text, Heading, VStack, HStack, Divider, Center } from '@chakra-ui/react';
import { MILESTONES } from '../api/milestones/milestonesData';
import '@fontsource/orbitron/400.css';

// Define colors and sizes based on Augmented UI documentation
const frameColor = 'black';
const borderRadius = '25px'; // Using --aug-tr
const borderSize = '7px'; // Using --aug-border-all
const inlaySize = '4px'; // Using --aug-inlay-all
const inlayOpacity = '0.5'; // Using --aug-inlay-opacity
const cardSize = '300px'; // Fixed size for each milestone card
const spacing = '60px'; // Space around each card
const font = "'DejaVu Sans Mono, monospace'"

const Milestones = () => {
  const [isMobile, setIsMobile] = useState(false); 

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Container
      maxWidth="100%"
      p={0}
      m={0}
      // minHeight="100vh"
      color="white"
      position="relative"
      overflow="hidden"
      fontFamily={'DejaVu Sans Mono, monospace'}
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
          fontFamily={'DejaVu Sans Mono, monospace'}
          color='white'
        >
          MILESTONES
        </Heading>
      <HStack
        spacing={spacing} // Space between each card
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

            {/* Content */}
            <Text fontSize="lg" color={frameColor} textAlign="center" fontFamily={font}>
              {milestone.date}
            </Text>
            <VStack spacing={2} mb={3} alignItems="center" textAlign="center">
              <Heading fontSize="2xl" color="white" fontFamily={font}>
                {milestone.title}
              </Heading>
              <Text fontSize="md" color="white" fontFamily={font}>
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




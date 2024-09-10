// 'use client'

// import { Flex, Button, IconButton, Menu, MenuButton, MenuList, MenuItem, Box, Spacer } from '@chakra-ui/react';
// import { FaLinkedin, FaGithub, FaBars } from 'react-icons/fa';

// export default function NavBar({ scrollToSection }) {
//   const scrollWithOffset = (section) => {
//     const offset = 70; 
//     scrollToSection(section, offset);
//   };

//   const reloadPage = () => {
//     window.location.href = window.location.pathname;
//   };

//   return (
//     <Flex
//       p="4"
//       bg="white"
//       alignItems="center"
//       justifyContent="space-between"
//       flexWrap="wrap"
//       position="sticky"
//       top="0"
//       zIndex="999"
//       maxW="100%"
//       mx="auto"
//       fontFamily={'DejaVu Sans Mono, monospace'}
//     >
//       <Button
//         onClick={reloadPage}
//         variant="ghost"
//         _hover={{ color: 'none', bg: 'transparent' }}
//         color="black"
//         fontSize="md"
//         bg='white'
//         px="19"
//       >
//         EO
//       </Button>
      
//       <Flex flex="1" justifyContent="center" alignItems="center">
//         <Box display={{ base: 'none', md: 'flex' }}>
//           <Button
//             onClick={() => scrollWithOffset('milestones')}
//             variant="ghost"
//             // _hover={{ color: 'teal', bg: 'transparent' }}
//             _hover={{
//               color: 'none',
//               bg: 'transparent',
//               _before: {
//                 content: '""',
//                 display: 'block',
//                 width: '100%',
//                 height: '2px',
//                 backgroundColor: 'black',
//                 position: 'absolute',
//                 bottom: '-2px',
//                 left: '0',
//               },
//             }}
//             color="black"
//             fontSize={{ base: 'sm', md: 'md' }}
//             mx={2}
//           >
//             Milestones
//           </Button>
//           <Button
//             onClick={() => scrollWithOffset('about')}
//             variant="ghost"
//             // _hover={{ color: 'teal', bg: 'transparent' }}
//             _hover={{
//               color: 'black',
//               bg: 'transparent',
//               _before: {
//                 content: '""',
//                 display: 'block',
//                 width: '100%',
//                 height: '2px',
//                 backgroundColor: 'black',
//                 position: 'absolute',
//                 bottom: '-2px',
//                 left: '0',
//               },
//             }}
//             color="black"
//             fontSize={{ base: 'sm', md: 'md' }}
//             mx={2}
//           >
//             About
//           </Button>
//           <Button
//             onClick={() => scrollWithOffset('project')}
//             variant="ghost"
//             // _hover={{ color: 'teal', bg: 'transparent' }}
//             _hover={{
//               color: 'black',
//               bg: 'transparent',
//               _before: {
//                 content: '""',
//                 display: 'block',
//                 width: '100%',
//                 height: '2px',
//                 backgroundColor: 'black',
//                 position: 'absolute',
//                 bottom: '-2px',
//                 left: '0',
//               },
//             }}
//             color="black"
//             fontSize={{ base: 'sm', md: 'md' }}
//             mx={2}
//           >
//             Projects
//           </Button>
//         </Box>
//       </Flex>

//       <Menu>
//         <MenuButton
//           as={IconButton}
//           aria-label="Options"
//           icon={<FaBars />}
//           variant="ghost"
//           _hover={{ color: 'teal', bg: 'black' }}
//           color="black"
//           display={{ base: 'flex', md: 'none' }} // Show only on mobile
//           mr={2}
//         />
//         <MenuList>
//           <MenuItem 
//             onClick={() => scrollWithOffset('milestones')} 
//             _hover={{ color: 'teal', bg: 'black' }}
//             color="black"
//           >
//             Milestones
//           </MenuItem>
//           <MenuItem 
//             onClick={() => scrollWithOffset('about')}
//             _hover={{ color: 'teal', bg: 'black' }}
//             color="black"
//           >
//             About
//           </MenuItem>
//           <MenuItem 
//             onClick={() => scrollWithOffset('project')}
//             _hover={{ color: 'teal', bg: 'black' }}
//             color="black"
//           >
//             Projects
//           </MenuItem>
//         </MenuList>
//       </Menu>

//       {/* <Flex alignItems="center">
//         <IconButton
//           aria-label="LinkedIn"
//           icon={<FaLinkedin />}
//           _hover={{ color: 'teal', bg: 'black' }}
//           color="black"
//           fontSize="md"
//           href="https://www.linkedin.com/in/eontiveros"
//           target="_blank"
//           rel="noopener noreferrer"
//           size="sm"
//           as="a"
//         />
//         <IconButton 
//           as="a" 
//           href="https://github.com/ericonti24" 
//           aria-label="GitHub" 
//           icon={<FaGithub />} 
//           _hover={{ color: 'teal', bg: 'black' }}
//           color="black"
//           target="_blank"
//           rel="noopener noreferrer"
//           size="sm"
//           ml={2} 
//         />
//       </Flex> */}
//     </Flex>
//   );
// }

// import { Flex, Button, IconButton, Box, Container } from '@chakra-ui/react';
// import { FaLinkedin, FaGithub } from 'react-icons/fa';
// import Link from 'next/link';

// export default function NavBar() {
//   const isMobile = { base: 'flex', md: 'none' };
//   return (
//     <Container > 
//       <Flex
//         as="nav"
//         p="20"
//         // color="white"
//         alignItems="center"
//         justifyContent="space-between"
//         wrap="wrap"
//         position="sticky"
//         top="0"
//         zIndex="999"
//         borderBottom="none"
//       >
//         {/* Logo */}
//         <Flex flex="1" justifyContent="flex-start">
//           <Link href="/" passHref>
//             <Button
//               variant="ghost"
//               color="black"
//               fontSize="lg"
//               fontWeight="bold"
//             >
//               ERIC ONTIVEROS
//             </Button>
//           </Link>
//         </Flex>

//         {/* Centered Desktop Navigation Links */}
//         <Flex
//           flex="1"
//           alignItems="center"
//           justifyContent="center"
//         >
//           <Box display={{base: 'flex', md: 'none'}}>
//             <Link 
//               href="/milestones" 
//               passHref 
//             >
//               <Button
//                 variant="link"
//                 colorScheme='black'
//                 color="white"
//                 bg='black'
//                 mx={4}
//                 _hover={{
//                   textDecoration: 'underline',
//                   textDecorationColor: 'white '
//                 }}
//               >
//                 Milestones
//               </Button>
//             </Link>
//             <Link href="/about" passHref>
//               <Button
//                 variant="link"
//                 color="black"
//                 mx={4}
//                 _hover={{
//                   textDecoration: 'underline',
//                   textDecorationColor: 'white'
//                 }}
//               >
//                 About
//               </Button>
//             </Link>
//             <Link href="/projects" passHref>
//               <Button
//                 variant="link"
//                 color="black"
//                 mx={4}
//                 _hover={{
//                   textDecoration: 'underline',
//                   textDecorationColor: 'black'
//                 }}
//               >
//                 Projects
//               </Button>
//             </Link>
//           </Box>
//                 {/* Social Media Icons */}
//           <Flex flex="1" justifyContent="flex-end">
//             <IconButton
//               aria-label="LinkedIn"
//               icon={<FaLinkedin />}
//               variant="ghost"
//               color="black"
//               fontSize="lg"
//               href="https://www.linkedin.com/in/eontiveros"
//               target="_blank"
//               rel="noopener noreferrer"
//               ml={4}
//             />
//             <IconButton
//               aria-label="GitHub"
//               icon={<FaGithub />}
//               variant="ghost"
//               color="black"
//               fontSize="lg"
//               href="https://github.com/ericonti24"
//               target="_blank"
//               rel="noopener noreferrer"
//               ml={4}
//             />
//           </Flex>
//         </Flex>
//       </Flex>
//     </Container>
//   );
// }

'use client'

import { Flex, Button, IconButton, Menu, MenuButton, MenuList, MenuItem, Box, Spacer } from '@chakra-ui/react';
import { FaLinkedin, FaGithub, FaBars } from 'react-icons/fa';
import Link from 'next/link';

export default function NavBar() {

  return (
    <Flex
      p="4"
      bg="black"
      alignItems="center"
      justifyContent="space-between"
      flexWrap="wrap"
      position="sticky"
      top="0"
      zIndex="999"
      maxW="100%"
      mx="auto"
      fontFamily={'DejaVu Sans Mono, monospace'}
    >
      <Link href="/" passHref>
        <Button
          // onClick={reloadPage}
          variant="ghost"
          _hover={{ color: 'none', bg: 'transparent' }}
          color="white"
          fontSize="4xl"
          bg='black'
          px="19"
          fontFamily={'DejaVu Sans Mono, monospace'}
        >
          EO
        </Button>
      </Link>
      <Flex flex="1" justifyContent="center" alignItems="center">
        <Box display={{ base: 'none', md: 'flex' }}>
        <Link href="/milestones" passHref>
          <Button
              bg='black'
              variant="ghost"
              _hover={{
                color: 'none',
                bg: 'black',
                _before: {
                  content: '""',
                  display: 'block',
                  width: '100%',
                  height: '2px',
                  backgroundColor: 'white',
                  position: 'absolute',
                  bottom: '-2px',
                  left: '0',
                },
              }}
              color="white"
              fontSize={{ base: 'sm', md: 'md' }}
              mx={2}
            >
              Milestones
            </Button>
          </Link>
          <Link href="/about" passHref>
            <Button
              bg='black'
              variant="ghost"
              _hover={{
                color: 'none',
                bg: 'black',
                _before: {
                  content: '""',
                  display: 'block',
                  width: '100%',
                  height: '2px',
                  backgroundColor: 'white',
                  position: 'absolute',
                  bottom: '-2px',
                  left: '0',
                },
              }}
              color="white"
              fontSize={{ base: 'sm', md: 'md' }}
              mx={2}
            >
              About
            </Button>
          </Link>
          <Link href="/projects" passHref>
            <Button
              bg='black'
              variant="ghost"
              _hover={{
                color: 'none',
                bg: 'black',
                _before: {
                  content: '""',
                  display: 'block',
                  width: '100%',
                  height: '2px',
                  backgroundColor: 'white',
                  position: 'absolute',
                  bottom: '-2px',
                  left: '0',
                },
              }}
              color="white"
              fontSize={{ base: 'sm', md: 'md' }}
              mx={2}
            >
              Projects
            </Button>
          </Link>
        </Box>
      </Flex>

      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<FaBars />}
          variant="ghost"
          _hover={{ color: 'white', bg: 'black' }}
          color="white"
          display={{ base: 'flex', md: 'none' }} // Show only on mobile
          mr={2}
        />
        <MenuList >
          <Link href='/milestones' passHref>
            <MenuItem 
              _hover={{ color: 'white', bg: 'black' }}
              color="black"
              variant="ghost"
            >
              Milestones
            </MenuItem>
          </Link>
          <Link href="/about" passHref>
            <MenuItem 
              _hover={{ color: 'white', bg: 'black' }}
              color="black"
            >
              About
            </MenuItem>
          </Link>
          <Link href="/projects" passHref>
            <MenuItem 
              _hover={{ color: 'white', bg: 'black' }}
              color="black"
            >
              Projects
            </MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </Flex>
  );
}
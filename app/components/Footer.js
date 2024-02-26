// import { ButtonGroup, Container, IconButton, Stack, Text } from '@chakra-ui/react';
// import { FaGithub, FaLinkedin } from 'react-icons/fa';

// export default function Footer() {
//   return (
//     <Container
//       as="footer"
//       role="contentinfo"
//       py={{
//         base: '10',
//         md: '10',
//       }}
//       bg="black"
//       maxW="100%"
//     >
//       <Stack
//         justify={{ base: 'center', md: 'space-between' }}
//         direction={{ base: 'column', md: 'row' }}
//         align={{ base: 'center', md: 'center' }}
//         textAlign={{ base: 'center', md: 'left' }}
//       >
//         <Stack align="center" mb={{ base: '4', md: '0' }}>
//           <Text color="teal" fontSize={{ base: 'xl', md: '2xl' }}>
//             ERIC ONTIVEROS
//           </Text>
//           <Text color="lightgray" fontSize={{ base: 'sm', md: 'md' }}>
//             I enjoy web designing, developing and passionate about tech!
//           </Text>
//         </Stack>
//         <Stack align="center" mb={{ base: '4', md: '0' }}>
//           <Text color="teal" fontSize={{ base: 'xl', md: '2xl' }}>
//             SOCIAL
//           </Text>
//           <ButtonGroup variant="tertiary" spacing={4}>
//             <IconButton
//               as="a"
//               href="https://www.linkedin.com/in/eontiveros"
//               aria-label="LinkedIn"
//               icon={<FaLinkedin />}
//               _hover={{ color: 'white', bg: 'transparent' }}
//               color="teal"
//               target="_blank"
//               rel="noopener noreferrer"
//             />
//             <IconButton
//               as="a"
//               href="https://github.com/ericonti24"
//               aria-label="GitHub"
//               icon={<FaGithub />}
//               _hover={{ color: 'white', bg: 'transparent' }}
//               color="teal"
//               target="_blank"
//               rel="noopener noreferrer"
//             />
//           </ButtonGroup>
//         </Stack>
//       </Stack>
//     </Container>
//   );
// }

import { ButtonGroup, Container, IconButton, Stack, Text } from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <Container
      as="footer"
      role="contentinfo"
      py={{
        base: '10',
        md: '10',
      }}
      bg="black"
      maxW="100%"
    >
      <Stack
        justify={{ base: 'center', md: 'space-between' }}
        direction={{ base: 'column', md: 'row' }}
        align={{ base: 'center', md: 'center' }}
        textAlign={{ base: 'center', md: 'left' }}
      >
        <Stack align="center" mb={{ base: '4', md: '0' }}>
          <Text color="teal" fontSize={{ base: 'xl', md: '2xl' }}>
            ERIC ONTIVEROS
          </Text>
          <Text color="lightgray" fontSize={{ base: 'sm', md: 'md' }}>
            I enjoy web designing, developing and passionate about tech!
          </Text>
        </Stack>
        <Stack align="center"> {/* Place the LLC information between ERIC ONTIVEROS and SOCIAL */}
          <Text color="teal" fontSize={{ base: 'xl', md: '2xl' }}>
            &copy; {new Date().getFullYear()} EO LLC. All rights reserved.
          </Text>
        </Stack>
        <Stack align="center">
          <Text color="teal" fontSize={{ base: 'xl', md: '2xl' }}>
            SOCIAL
          </Text>
          <ButtonGroup variant="tertiary" spacing={4}>
            <IconButton
              as="a"
              href="https://www.linkedin.com/in/eontiveros"
              aria-label="LinkedIn"
              icon={<FaLinkedin />}
              _hover={{ color: 'white', bg: 'transparent' }}
              color="teal"
              target="_blank"
              rel="noopener noreferrer"
            />
            <IconButton
              as="a"
              href="https://github.com/ericonti24"
              aria-label="GitHub"
              icon={<FaGithub />}
              _hover={{ color: 'white', bg: 'transparent' }}
              color="teal"
              target="_blank"
              rel="noopener noreferrer"
            />
          </ButtonGroup>
        </Stack>
      </Stack>
    </Container>
  );
}






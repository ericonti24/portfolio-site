import { ButtonGroup, Container, IconButton, Flex, Text } from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <Container
      as="footer"
      role="contentinfo"
      py={{ base: '10', md: '10' }}
      maxW="100%"
      fontFamily={'DejaVu Sans Mono, monospace'}
      bottom='0'
    >
      <Flex
        justify="space-between"
        align="center"
        direction={{ base: 'column', md: 'row' }}
        textAlign={{ base: 'center', md: 'left' }}
        px="0"
      >
        <Text color="black" fontSize={{ base: 'xl', md: 'xl' }} >
          ERIC ONTIVEROS
        </Text>
        <ButtonGroup variant="tertiary" spacing={4} justifyContent="center">
          <IconButton
            as="a"
            href="https://www.linkedin.com/in/eontiveros"
            aria-label="LinkedIn"
            icon={<FaLinkedin />}
            color="black"
            target="_blank"
            rel="noopener noreferrer"
          />
          <IconButton
            as="a"
            href="https://github.com/ericonti24"
            aria-label="GitHub"
            icon={<FaGithub />}
            color="black"
            target="_blank"
            rel="noopener noreferrer"
          />
        </ButtonGroup>
        <Text color="black" fontSize={{ base: 'xl', md: 'xl' }}>
          &copy; {new Date().getFullYear()} EO LLC. All rights reserved.
        </Text>
      </Flex>
    </Container>
  );
}

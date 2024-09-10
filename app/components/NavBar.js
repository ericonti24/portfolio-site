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
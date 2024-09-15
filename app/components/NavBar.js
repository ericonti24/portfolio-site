'use client'

import { Flex, Button, IconButton, Menu, MenuButton, MenuList, MenuItem, Box } from '@chakra-ui/react';
import { FaBars } from 'react-icons/fa';
import Link from 'next/link';
import styles from '../styles/NavBar.module.css'

export default function NavBar({scrollToSection}) {

    const scrollWithOffset = (section) => {
      const offset = 70; 
      scrollToSection(section, offset);
    };

  return (
    <Flex
      p="3"
      bg="transparent"
      alignItems="center"
      justifyContent="space-between"
      flexWrap="wrap"
      position="sticky"
      top="0"
      zIndex="999"
      maxW="100%"
      mx="auto"
      fontFamily={'DejaVu Sans Mono, monospace'}
      className={styles.navbar}
    >
      <Link href="/" passHref>
        <Button
          variant="ghost"
          _hover={{ color: 'none', bg: 'transparent' }}
          color="black"
          fontSize="4xl"
          bg='transparent'
          px="0"
          fontFamily={'DejaVu Sans Mono, monospace'}
        >
          EO
        </Button>
      </Link>
      <Flex flex="1" justifyContent="center" alignItems="center">
        <Box display={{ base: 'none', md: 'flex' }}>
          <Button
              onClick={() => scrollWithOffset('milestones')}
              bg='transparent'
              variant="ghost"
              _hover={{
                color: 'none',
                bg: 'transparent',
                _before: {
                  content: '""',
                  display: 'block',
                  width: '100%',
                  height: '2px',
                  backgroundColor: 'black',
                  position: 'absolute',
                  bottom: '-2px',
                  left: '0',
                },
              }}
              color="black"
              fontSize={{ base: 'sm', md: 'md' }}
              mx={2}
            >
              Milestones
            </Button>
            <Button
              onClick={() => scrollWithOffset('about')}
              bg='transparent'
              variant="ghost"
              _hover={{
                color: 'none',
                bg: 'transparent',
                _before: {
                  content: '""',
                  display: 'block',
                  width: '100%',
                  height: '2px',
                  backgroundColor: 'black',
                  position: 'absolute',
                  bottom: '-2px',
                  left: '0',
                },
              }}
              color="black"
              fontSize={{ base: 'sm', md: 'md' }}
              mx={2}
            >
              About
            </Button>
            <Button
              onClick={() => scrollWithOffset('project')}
              bg='transparent'
              variant="ghost"
              _hover={{
                color: 'none',
                bg: 'transparent',
                _before: {
                  content: '""',
                  display: 'block',
                  width: '100%',
                  height: '2px',
                  backgroundColor: 'black',
                  position: 'absolute',
                  bottom: '-2px',
                  left: '0',
                },
              }}
              color="black"
              fontSize={{ base: 'sm', md: 'md' }}
              mx={2}
            >
              Projects
            </Button>
        </Box>
      </Flex>

      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<FaBars />}
          variant="ghost"
          _hover={{ color: 'black', bg: 'transparent' }}
          color="black"
          display={{ base: 'flex', md: 'none' }} 
          mr={2}
        />
        <MenuList>
          <MenuItem 
            _hover={{ color: 'white', bg: 'black' }}
            color="black"
            onClick={() => scrollWithOffset('milestones')} 
          >
            Milestones
          </MenuItem>
          <MenuItem 
            _hover={{ color: 'white', bg: 'black' }}
            color="black"
            onClick={() => scrollWithOffset('about')} 
          >
            About
          </MenuItem>
          <MenuItem 
            _hover={{ color: 'white', bg: 'black' }}
            color="black"
            onClick={() => scrollWithOffset('project')} 
          >
            Projects
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
}
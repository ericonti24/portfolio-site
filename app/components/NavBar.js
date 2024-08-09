import { Flex, Button, IconButton, Menu, MenuButton, MenuList, MenuItem, Box, Spacer} from '@chakra-ui/react';
import { FaLinkedin, FaGithub, FaBars } from 'react-icons/fa';
import { useEffect, useState } from 'react';

export default function NavBar({ scrollToSection }) {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768); 
    };

    handleResize(); 
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollWithOffset = (section) => {
    const offset = 70; 
    scrollToSection(section, offset);
  };

  const reloadPage = () => {
    window.location.href = window.location.pathname;
  };

  return (
    <Flex
      p="4"
      bg="black"
      color="white"
      alignItems="center"
      justifyContent="space-between"
      flexWrap="wrap"
      textAlign="center"
      position="sticky"
      top="0"
      zIndex="999"
      maxW="100%"
      mx="auto"
      // border="1px solid red"
    >
      <Button
        onClick={reloadPage}
        variant="ghost"
        _hover={{ color: 'teal', bg: 'transparent' }}
        fontFamily="sans-serif"
        color="white"
        fontSize="md"
        px="19"
        // border="1px solid red"
      >
        ERIC ONTIVEROS
      </Button>
      <Spacer />
      <Menu >
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<FaBars />}
          variant="ghost"
          _hover={{ color: 'teal', bg: 'black' }}
          color="white"
          display={{ base: 'flex', md: 'none' }} // Show only on mobile
          mr={2}
          // ml={1}
          // border="1px solid red"
        />
        <MenuList>
          <MenuItem 
            onClick={() => scrollWithOffset('milestones')} 
            _hover={{ color: 'teal', bg: 'black' }}
            color="black"
          >
            Milestones
          </MenuItem>
          <MenuItem 
            onClick={() => scrollWithOffset('about')}
            _hover={{ color: 'teal', bg: 'black' }}
            color="black"
          >
            About
          </MenuItem>
          <MenuItem 
            onClick={() => scrollWithOffset('project')}
            _hover={{ color: 'teal', bg: 'black' }}
            color="black"
          >
            Projects
          </MenuItem>
        </MenuList>
      </Menu>
      <Flex
        flex={{ base: 1, md: 2 }}
        justifyContent={{ base: 'space-between', md: 'flex-end' }}
        alignItems="center"
        w="100%"
        mb={{ base: 1, md: "none" }}
      >
        {!isSmallScreen && (
          <>
            <Box display={{ base: 'none', md: 'flex' }} mr={2}>
              <Button
                onClick={() => scrollWithOffset('milestones')}
                variant="ghost"
                _hover={{ color: 'teal', bg: 'transparent' }}
                color="white"
                fontSize={{ base: 'sm', md: 'md' }}
              >
                Milestones
              </Button>
            </Box>
            <Box display={{ base: 'none', md: 'flex' }} mr={2}>
              <Button
                onClick={() => scrollWithOffset('about')}
                variant="ghost"
                _hover={{ color: 'teal', bg: 'transparent' }}
                color="white"
                fontSize={{ base: 'sm', md: 'md' }}
              >
                About
              </Button>
            </Box>
            <Box display={{ base: 'none', md: 'flex' }} mr={2}>
              <Button
                onClick={() => scrollWithOffset('project')}
                variant="ghost"
                _hover={{ color: 'teal', bg: 'transparent' }}
                color="white"
                fontSize={{ base: 'sm', md: 'md' }}
              >
                Projects
              </Button>
            </Box>
          </>
        )}

        {/* {!isSmallScreen && ( */}
          <>
            <IconButton
              aria-label="LinkedIn"
              icon={<FaLinkedin />}
              _hover={{ color: 'teal', bg: 'transparent' }}
              color="black"
              fontSize="md"
              href="https://www.linkedin.com/in/eontiveros"
              target="_blank"
              rel="noopener noreferrer"
              size="sm"
              as="a"
            />
            <IconButton 
              as="a" 
              href="https://github.com/ericonti24" 
              aria-label="GitHub" 
              icon={<FaGithub />} 
              _hover={{ color: 'teal', bg: 'transparent' }}
              color="black"
              target="_blank"
              rel="noopener noreferrer"
              size="sm"
              ml={2} 
            />
          </>
        {/* )} */}
      </Flex>
    </Flex>
  );
}











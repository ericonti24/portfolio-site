'use client'
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { metadata } from '../app/components/metadata';
import { ChakraProvider, Box } from '@chakra-ui/react';
import { useEffect } from 'react';
import { scrollToSection } from './components/scrollToSection';

export default function RootLayout({ children }) {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body style={{backgroundColor: "#686868"}}>
        <ChakraProvider>
        <Box px={{base: "6", md: "16"}} py="1">
          <NavBar scrollToSection={scrollToSection}/> 
          {children}
        </Box>
        </ChakraProvider>
      </body>
    </html>
  );
}
"use client"

import { useEffect } from 'react'
import { ChakraProvider } from "@chakra-ui/react";
import ChakraNavBar from './components/ChakraNavBar.js';

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
    <ChakraProvider>
      <div id='home-section'>
          <ChakraNavBar scrollToSection={scrollToSection}/>
        </div>
    </ChakraProvider>
  );
}

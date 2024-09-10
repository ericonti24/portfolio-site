import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { metadata } from '../app/components/metadata';
import { ChakraProvider } from '@chakra-ui/react'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body style={{backgroundColor: "black"}}>
        <ChakraProvider>
          <NavBar />
          {children}
          {/* <Footer /> */}
        </ChakraProvider>
      </body>
    </html>
  );
}




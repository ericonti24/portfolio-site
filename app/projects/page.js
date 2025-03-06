'use client'

import { useEffect, useState } from 'react';
import {
    Box,
    Center,
    Heading,
    Text,
    Stack,
    useColorModeValue,
    Button,
    Image,
    Flex
} from '@chakra-ui/react';
import { fetchProjectsData } from '../contentful/config';

export default function Project() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const getProjects = async () => {
            const data = await fetchProjectsData();
            // console.log("Fetched Projects:", data); 
            setProjects(Array.isArray(data) ? data : []);
        };

        getProjects();
    }, []);
    

    return (
        <Center id='project-section' bg='white'>
            <Flex 
                direction="column"
                alignItems="center"
                justifyContent="center"
                textAlign="center"
                position="relative"
                zIndex="1"
            >
                <Heading
                    fontSize={{ base: '5xl', md: '8xl' }}
                    mb={10}
                    fontFamily={'DejaVu Sans Mono, monospace'}
                    color='black'
                >
                    PERSONAL PROJECTS
                </Heading>
                <Stack spacing="24" mb={24}>
                    {projects.map((project, index) => (
                        <Box
                            key={index}
                            maxW={{ base: '330px', md: "700px" }}
                            bg={'white'}
                            boxShadow={'5xl'}
                            rounded={'xl'}
                            p="4"
                            overflow={'hidden'}
                            mb={4}
                            border="8px solid black"
                        >
                            <Box>
                                <Box mt={-5} mx={-6} mb={{ base: 5, md: "none" }} textAlign="center">
                                    <Image
                                        src={project.imageUrl}
                                        alt='project-image'
                                        mx="auto"
                                    />
                                </Box>
                                <Stack>
                                    <Heading
                                        color={'black'}
                                        fontSize={'2xl'}
                                        fontFamily={'DejaVu Sans Mono, monospace'}
                                        align={'center'}
                                    >
                                        {project.title}
                                    </Heading>
                                    <Text color={'black'} fontFamily={'DejaVu Sans Mono, monospace'} mb='6'>
                                        {project.description}
                                    </Text>
                                </Stack>
                            </Box>
                            <Stack 
                                direction='row' 
                                spacing={{ base: '2', md: '20' }} 
                                justifyContent={'center'}
                            >
                                
                                    <Button
                                        _hover={{ color: 'black', bg: 'white' }}
                                        color='white'
                                        bg={'black'}
                                        variant='outline'
                                        as="a"
                                        href={project.projectLink}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        border='none'
                                        fontFamily={'DejaVu Sans Mono, monospace'}
                                        size={{ base: 'sm', md: 'md' }}
                                    >
                                        Go to Project
                                    </Button>               
                                    <Button
                                        _hover={{ color: 'black', bg: 'white' }}
                                        color='white'
                                        bg={'black'}
                                        variant='outline'
                                        as="a"
                                        href={project.githubLink}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        border='none'
                                        fontFamily={'DejaVu Sans Mono, monospace'}
                                        size={{ base: 'sm', md: 'md' }}
                                    >
                                        Go to GitHub Repo
                                    </Button>
                            </Stack>
                        </Box>
                    ))}
                </Stack>
            </Flex>
        </Center>
    );
}





import { Container, Text, VStack, Heading, Box, Button, HStack, Image } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={6}>
        <Box boxSize="150px">
          <Image src="/path/to/your/profile-picture.jpg" alt="Profile Picture" borderRadius="full" />
        </Box>
        <Heading as="h1" size="2xl">John Doe</Heading>
        <Text fontSize="xl" textAlign="center">Full Stack Developer | JavaScript Enthusiast | Open Source Contributor</Text>
        <HStack spacing={4}>
          <Button as="a" href="https://github.com/yourusername" target="_blank" leftIcon={<FaGithub />} colorScheme="teal" variant="outline">
            GitHub
          </Button>
          <Button as="a" href="https://linkedin.com/in/yourusername" target="_blank" leftIcon={<FaLinkedin />} colorScheme="teal" variant="outline">
            LinkedIn
          </Button>
          <Button as="a" href="https://twitter.com/yourusername" target="_blank" leftIcon={<FaTwitter />} colorScheme="teal" variant="outline">
            Twitter
          </Button>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
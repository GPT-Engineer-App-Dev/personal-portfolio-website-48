import React from 'react';
import confetti from 'canvas-confetti';
import { Container, Heading, Text } from '@chakra-ui/react';

const ConfettiPage = () => {
  const handleClick = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <Container onClick={handleClick} centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Heading as="h1" size="2xl" mb={4}>Confetti Page</Heading>
      <Text fontSize="xl" textAlign="center">Click anywhere to throw confetti!</Text>
    </Container>
  );
};

export default ConfettiPage;
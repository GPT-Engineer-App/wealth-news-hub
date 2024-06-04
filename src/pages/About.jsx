import { Box, Container, Heading, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <Container maxW="container.md" py={10}>
      <Heading as="h1" mb={6}>
        About Us
      </Heading>
      <Text fontSize="lg" mb={4}>
        Financial Times is a leading global business publication, recognized internationally for its authority, integrity, and accuracy.
      </Text>
      <Text fontSize="md">
        Our mission is to deliver essential news, comment, data, and analysis for the global business community. We provide a trusted guide to the forces that shape the future, offering a clear and concise view of the world.
      </Text>
    </Container>
  );
};

export default About;
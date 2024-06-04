import { Box, Container, Heading, Text } from "@chakra-ui/react";

const Contact = () => {
  return (
    <Container maxW="container.md" py={10}>
      <Heading as="h1" mb={6}>
        Contact Us
      </Heading>
      <Text fontSize="lg" mb={4}>
        We would love to hear from you! Please reach out to us through any of the following methods:
      </Text>
      <Text fontSize="md" mb={2}>
        Email: contact@financialtimes.com
      </Text>
      <Text fontSize="md" mb={2}>
        Phone: +1 234 567 890
      </Text>
      <Text fontSize="md">
        Address: 123 Financial St, Business City, BC 12345
      </Text>
    </Container>
  );
};

export default Contact;
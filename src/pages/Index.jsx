import { Box, Container, Heading, Text, VStack, HStack, Image } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl">
          Financial Times
        </Heading>
        <HStack spacing={8} align="start">
          <Box flex="3">
            <Heading as="h2" size="lg" mb={4}>
              Main News
            </Heading>
            <Box mb={6}>
              <Image src="/images/main-news.jpg" alt="Main News" mb={4} />
              <Text fontSize="xl" fontWeight="bold">
                Breaking News: Market Hits Record Highs
              </Text>
              <Text>
                The stock market reached new heights today as investors reacted positively to the latest economic data...
              </Text>
            </Box>
            <Box>
              <Image src="/images/main-news-2.jpg" alt="Main News" mb={4} />
              <Text fontSize="xl" fontWeight="bold">
                Global Trade: New Agreements Signed
              </Text>
              <Text>
                Several new trade agreements were signed today, marking a significant step forward in international trade relations...
              </Text>
            </Box>
          </Box>
          <Box flex="1" bg="gray.100" p={4} borderRadius="md">
            <Heading as="h2" size="lg" mb={4}>
              Sidebar
            </Heading>
            <Text mb={4}>
              Stay updated with the latest financial news and insights. Subscribe to our newsletter for daily updates.
            </Text>
            <Text>
              Follow us on social media for real-time news and analysis.
            </Text>
          </Box>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
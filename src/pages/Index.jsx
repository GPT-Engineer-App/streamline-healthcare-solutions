import { Box, Button, Container, Heading, Image, SimpleGrid, Stack, Text, VStack } from "@chakra-ui/react";
import { FaTabletAlt, FaHospitalUser, FaChartLine, FaShieldAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} align="stretch">
        <Box as="section" textAlign="center" py={10}>
          <Heading mb={3}>Empower Smarter Healthcare with Innovative Software Solutions</Heading>
          <Text fontSize="xl" mb={6}>
            Streamline Workflows, Boost Efficiency, and Enhance Patient Care with Our Suite of Healthcare Software.
          </Text>
          <Image src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwcHJvZmVzc2lvbmFscyUyMHVzaW5nJTIwdGVjaG5vbG9neXxlbnwwfHx8fDE3MTQ4ODQwNTh8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Healthcare Technology" borderRadius="md" />
        </Box>

        <Box as="section" py={10}>
          <Heading mb={4} size="lg">
            Value Proposition
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <VStack align="start" spacing={3}>
              <Text fontWeight="bold">Designed for All Sizes</Text>
              <Text>Our software solutions cater to healthcare organizations of all sizes, from small clinics to large hospitals.</Text>
            </VStack>
            <VStack align="start" spacing={3}>
              <Text fontWeight="bold">Streamlined & Automated Workflows</Text>
              <Text>Our software streamlines critical tasks and automates processes, freeing up valuable time for healthcare professionals.</Text>
            </VStack>
          </SimpleGrid>
        </Box>

        <Box as="section" py={10}>
          <Heading mb={4} size="lg">
            Core Products
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <VStack align="start" spacing={3}>
              <Heading size="md">Advanced Electronic Health Records (EHR)</Heading>
              <Text>Securely store and access patient information with our user-friendly EHR system.</Text>
              <Text>Enhance patient care with comprehensive charting, medication management, and order tracking features.</Text>
            </VStack>
            <VStack align="start" spacing={3}>
              <Heading size="md">Comprehensive Enterprise Resource Planning (ERP)</Heading>
              <Text>Gain complete control over your healthcare organization's resources, from inventory and financials to staff scheduling.</Text>
              <Text>Improve operational efficiency and make informed decisions with real-time data insights.</Text>
            </VStack>
          </SimpleGrid>
        </Box>

        <Box as="section" py={10}>
          <Heading mb={4} size="lg">
            Additional Features
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <VStack align="start" spacing={3}>
              <Text fontWeight="bold">Customization Options</Text>
              <Text>Tailor our software solutions to meet the specific needs of your healthcare organization.</Text>
              <Text fontWeight="bold">Data Security & Compliance</Text>
              <Text>Ensure patient data is protected with robust security measures and compliance with HIPAA and other regulations.</Text>
            </VStack>
            <VStack align="start" spacing={3}>
              <Text fontWeight="bold">Intuitive Interface</Text>
              <Text>Our user-friendly software is easy to learn and navigate, even for non-technical users.</Text>
              <Text fontWeight="bold">Scalable Solutions</Text>
              <Text>Grow with confidence! Our software scales to accommodate your organization's needs as they evolve.</Text>
            </VStack>
          </SimpleGrid>
        </Box>

        <Box as="section" py={10} textAlign="center">
          <Heading mb={4} size="lg">
            Benefits
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <VStack spacing={3}>
              <FaChartLine size="3rem" />
              <Text fontWeight="bold">Improved operational efficiency and productivity</Text>
            </VStack>
            <VStack spacing={3}>
              <FaHospitalUser size="3rem" />
              <Text fontWeight="bold">Enhanced patient care and satisfaction</Text>
            </VStack>
            <VStack spacing={3}>
              <FaShieldAlt size="3rem" />
              <Text fontWeight="bold">Data-driven decision making</Text>
            </VStack>
          </SimpleGrid>
        </Box>

        <Box as="section" py={10} textAlign="center">
          <Heading mb={4} size="lg">
            Get Started
          </Heading>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Button colorScheme="blue" leftIcon={<FaTabletAlt />}>
              Request a Demo
            </Button>
            <Button colorScheme="green" leftIcon={<FaTabletAlt />}>
              Start Your Free Trial
            </Button>
          </Stack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;

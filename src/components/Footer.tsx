import React from "react";
import { Box, Container, Flex, Text, Link } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      as="footer"
      bg="gray.900"
      color="white"
      py={6}
      borderTop="1px solid"
      borderColor="gray.700"
      marginTop={5}
    >
      <Container maxW="container.xl" px={4}>
        <Flex justify="center" align="center">
          <Text fontSize="sm">
            &copy; 2024 Mansoor Azimi . All rights reserved.
          </Text>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;

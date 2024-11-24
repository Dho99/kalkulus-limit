"use client";

import { Text, Box, Flex, Container } from "@chakra-ui/react";
import CalculatorChild from "../calculator";

export default function Calculator() {
  return (
    <Box mt={"10%"} maxW="dvw" w="full" id="kalkulator">
      <Flex display={"flex"} justifyContent={"center"} mb={5}>
        <Text
          textStyle={"4xl"}
          fontWeight={"bold"}
          display={{
            xl: "flex",
            lg: "flex",
            md: "flex",
            sm: "block",
            base: "block",
          }}
          alignItems={"center"}
          color={"white"}
        >
          Coba Fitur Fungsional -
          <Box
            display="flex"
            alignItems={"center"}
            bg={"blue"}
            mx={2}
            py={2}
            px={5}
            rounded={"lg"}
            shadow={"sm"}
            color={"white"}
          >
            Kalkulator Limit
          </Box>
        </Text>
      </Flex>
      <Container p={5}>
        <Flex>
          <CalculatorChild />
        </Flex>
      </Container>
    </Box>
  );
}

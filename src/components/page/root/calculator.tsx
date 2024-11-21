"use client";

import { Text, Box, Flex, Container } from "@chakra-ui/react";
import Chart from "@/components/chart";

export default function Calculator() {
  return (
    <Box mt={"10%"} maxW="dvw" w="full">
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
        >
          Coba Fitur Baru -
          <Box
            display="flex"
            alignItems={"center"}
            bg={"yellow"}
            mx={2}
            p={2}
            rounded={"lg"}
            shadow={"sm"}
          >
            Kalkulator Limit
          </Box>
        </Text>
      </Flex>
      <Container p={5} shadow={"md"} rounded={"md"}>
        <Chart />
      </Container>
    </Box>
  );
}

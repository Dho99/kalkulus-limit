"use client"

import { Box, Container, Flex, Text, Image, Button } from "@chakra-ui/react";
// import { ArrowForwardIcon } from "@chakra-ui/icons";

export default function Hero() {
  return (
    <>
      <Container>
        <Flex gap={8} alignItems={"center"} height={"40vh"}>
          <Box flexBasis="55%">
            <Text textStyle={"6xl"} fontWeight={"bolder"}>Buat belajar Limit anda menjadi lebih Mudah !</Text>
            <Button mt={8} colorPalette={"yellow"} size={"xl"}><Text fontWeight={"bold"}>Lihat Materi </Text></Button>
          </Box>
          <Box flexBasis="45%">
            <Image src={"/Images/math_ilustration.svg"} rounded={"full"}/>
          </Box>
        </Flex>
      </Container>
    </>
  );
}

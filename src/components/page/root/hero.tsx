"use client";

import { Box, Container, Flex, Text, Image, Button } from "@chakra-ui/react";
import { FaArrowCircleDown } from "react-icons/fa";

export default function Hero() {
  return (
    <>
      <Container mb={{xl: "10%", lg: "10%", md: "15%", sm: "90%", base: "150%"}}>
        <Box display="flex" gap={8} flexDirection={{xl: "row", lg: "row", md: "row", sm: "column", base: "column"}} alignItems={"center"} height={"40vh"}>
          <Box width={{xl: "50vw", lg: "50vw", md: "50vw", sm: "75vw", base: "75vw"}} order={{xl: "1", lg: "1", md: "1", sm: "2", base: "2"}}>
            <Text
              textStyle={{ lg: "6xl", md: "4xl", sm: "4xl", base: "4xl" }}
              fontWeight={"bolder"}
              color="white"
            >
              Limit Fungsi Kalkulus I
            </Text>
            <Text textStyle={"lg"} fontWeight={"semibold"} my={4} color="white">
            Jelajahi dunia kalkulus melalui pembelajaran interaktif dan menarik. Mari mulai perjalanan matematika Anda. Klik tombol Dibawah !
            </Text>
            <Flex flexDir={"column"} gap={4} w={"fit-content"} mt={"60px"}>
              <a href="#materi">
              <Button colorPalette={"blue"} size={"2xl"} rounded={"3xl"} _hover={{bg: "blue.400", shadow: "md"}} shadow={"sm"}>
                <Text fontWeight={"bold"} display="flex" alignItems={"center"} me={"auto"} px={1}>
                  Lihat Materi 
                  <Text ms={3}><FaArrowCircleDown /></Text>
                </Text>
              </Button>
              </a>
            </Flex>
          </Box>
          <Box width={{xl: "50vw", lg: "50vw", md: "50vw", sm: "75vw", base: "75vw"}} order={{xl: "2", lg: "2", md: "2", sm: "1", base: "1"}}>
            <Image
              src={"/Images/math_ilustration.svg"}
              rounded={"full"}
              alt={"Math Illustration Image"}
              shadow={"2xl"}
            />
          </Box>
        </Box>
      </Container>
    </>
  );
}

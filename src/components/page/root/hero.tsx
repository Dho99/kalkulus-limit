"use client";

import { Box, Container, Flex, Text, Image, Button } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <Container mb={{xl: 0, lg: 0, md: "10%", sm: "70%", base: "70%"}}>
        <Box display="flex" gap={8} flexDirection={{xl: "row", lg: "row", md: "row", sm: "column", base: "column"}} alignItems={"center"} height={"40vh"}>
          <Box width={{xl: "50vw", lg: "50vw", md: "50vw", sm: "75vw", base: "75vw"}} order={{xl: "1", lg: "1", md: "1", sm: "2", base: "2"}}>
            <Text
              textStyle={{ lg: "6xl", md: "4xl", sm: "4xl", base: "4xl" }}
              fontWeight={"bolder"}
            >
              Limit Fungsi Kalkulus I
            </Text>
            <Text textStyle={"lg"} my={2}>
              Mulai belajar materi fungsi limit bersama kami melalui tombol di
              bawah ini
            </Text>
            <Flex flexDir={"column"} gap={4} maxW={"200px"} mt={"80px"}>
              <Button colorPalette={"yellow"} size={"xl"} >
                <Text fontWeight={"bold"} display="flex" alignItems={"center"} me={"auto"} px={1}>
                  Lihat Materi <Text ms={3}><FaArrowRight/></Text>
                </Text>
              </Button>
              <Link href={'/faq'}>
                <Button colorPalette={"yellow"} size={"xl"}>
                  <Text fontWeight={"bold"} display="flex" alignItems={"center"} me={"auto"} px={1}>
                    FAQ <Text ms={3}><FaArrowRight/></Text>
                  </Text>
                </Button>
              </Link>
            </Flex>
          </Box>
          <Box width={{xl: "50vw", lg: "50vw", md: "50vw", sm: "75vw", base: "75vw"}} order={{xl: "2", lg: "2", md: "2", sm: "1", base: "1"}}>
            <Image
              src={"/Images/math_ilustration.svg"}
              rounded={"full"}
              alt={"Math Illustration Image"}
            />
          </Box>
        </Box>
      </Container>
    </>
  );
}

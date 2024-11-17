import { Box, Container, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function Footer() {
  return (
    <Box backgroundColor={"black"} position={"relative"} w={"dvw"} zIndex={12}>
      <Container py={"5"}display={"flex"} justifyContent={"center"} textAlign={"center"}>
        <Text display={"inlne"}>
          <Box display="flex">
            Created
            <Text fontWeight={"bold"} mx={"5px"} display={"flex"}>
              By 3rd
            </Text>{" "}
            Group{" "}
          </Box>

          <Link href={"/tentang"} >
            <Text fontWeight={"bold"} ms={2} >
              See Contributors
            </Text>
          </Link>
        </Text>
      </Container>
    </Box>
  );
}

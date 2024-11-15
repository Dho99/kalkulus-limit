import { Container, Box } from "@chakra-ui/react";
import Hero from "@/components/page/root/hero";
import Cards from "@/components/page/root/cards";
import { metadata } from "./layout";
import Image from "next/image";

export default function Page() {
  metadata.title = "LearnLimit | Home";
  return (
    <>
      <Box
        pos="absolute"
        maxW="dvw"
        h={{ lg: "80vh", md: "115vh", sm: "180vh", base: "180vh" }}
        zIndex={1}
        top="70px"
        left={0}
        opacity="0.3"
        overflow="hidden"
        w={"full"}
      >
        <Image
          src={"/Images/2346969.png"}
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          quality={75}
          loading="lazy"
        />
      </Box>

      <Container mt={{ lg: "13%", md: "250px", sm: "300px", base: "200px" }} zIndex={2}>
        <Hero />
        <Cards />
      </Container>
    </>
  );
}

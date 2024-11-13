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
        w="100vw"
        h={{ lg: "80vh", md: "115vh", sm: "180vh", base: "180vh" }}
        zIndex={1}
        top="70px"
        left={0}
        opacity="0.3"
        overflow="hidden"
      >
        <Image
          src="/images/2346969.jpg"
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          quality={75}
          sizes="100vw"
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

import { Container, Box } from "@chakra-ui/react";
import Hero from "@/components/page/root/hero";
import Cards from "@/components/page/root/cards";
import { metadata } from "./layout";
import Calculator from "@/components/page/root/calculator";
import Image from "next/image";


export default function Page() {
  metadata.title = "LearnLimit | Home";
  return (
    <>
      <Box
        pos="absolute"
        maxW="dvw"
        h={"svh"}
        zIndex={0}
        top="70px"
        left={0}
        opacity="0.2"
        overflow="hidden"
        w={"full"}
      >
        <Image
          src={"/Images/2346969.png"}
          alt="Hero Image"
          fill={true}
          quality={75}
          loading="lazy"
        />
      </Box>

      

      <Container
        mt={{ xl: "13%", lg: "20%", md: "200px", sm: "70px", base: "70px" }}
        // zIndex={2}
        pos={"relative"}
        display={"flex"}
        flexWrap={"wrap"}
        mb={"10%"}
      >
          <Hero />
          <Cards />
          <Calculator />
      </Container>
    </>
  );
}

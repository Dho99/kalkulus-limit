import { Container, Image } from "@chakra-ui/react";
import Hero from "@/components/page/root/hero";
import Cards from "@/components/page/root/cards";
import { metadata } from "./layout";

export default function Page() {
  metadata.title = 'LearnLimit - Home';
  return (
    <div>
      <Image
        src={"/images/2346969.jpg"}
        pos={"absolute"}
        w={"dvw"}
        zIndex={1}
        height={{ lg: "80vh", base: "dvh" }}
        top={"70px"}
        opacity={"0.3"}
        left={0}
        alt={"Hero Image"}
      />
      <Container mt={{ lg: "13%", base: "15%" }} zIndex={2}>
        <Hero />
        <Cards />
      </Container>
    </div>
  );
}

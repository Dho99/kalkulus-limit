import { metadata } from "@/app/layout";
import { Text, Container } from "@chakra-ui/react";

export default function Page() {
  metadata.title = 'LearnLimit - Limit Suku Banyak';
  return (
    <>
      <Container mt={"8%"} zIndex={2}>
        <Text textStyle={"3xl"} color={"black"} justifyContent={"center"}>
          Test
        </Text>
      </Container>
    </>
  );
}

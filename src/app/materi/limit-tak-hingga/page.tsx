import { Container, Box, Text } from "@chakra-ui/react";
import Sidenav from "@/components/page/materi/sidenav";
import { metadata } from "@/app/layout";

export default function Page() {
    metadata.title = 'LearnLimit | Limit Tak Hingga'
  return (
    <Container
      mt={{ xl: "5%", lg: "7%", md: "8%", sm: "8%", base: "14%" }}
      zIndex={2}
      fluid
    >
      <Box
        direction={"row"}
        gap={10}
        maxW={"dvw"}
        display={{
          xl: "flex",
          lg: "flex",
          md: "flex",
          sm: "flex",
          base: "block",
        }}
      >
        <Sidenav content={"Konsep Dasar Limit"} />
        <Container flexBasis={"100%"}>
          <Text
            textStyle={"5xl"}
            color={"black"}
            justifyContent={"center"}
            display={"flex"}
            fontWeight={"bold"}
            mb={"3%"}
            textAlign={"center"}
            w="full"
            ms={3}
          >
             Limit Tak Hingga
          </Text>
        </Container>
      </Box>
    </Container>
  );
}

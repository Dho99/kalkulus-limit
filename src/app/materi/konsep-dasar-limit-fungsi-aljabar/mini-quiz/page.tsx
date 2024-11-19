import { Container, Box, Text } from "@chakra-ui/react";
import Sidenav from "@/components/page/materi/sidenav";
import { metadata } from "@/app/layout";
import QuizComponent from "@/components/page/quiz";
import LatexRenderer from "@/components/LatexRenderer";
export default function Page() {
  metadata.title = "LearnLimit | Mini Quiz Limit";

  const answerArray = [
      {
        value: "A",
        description: "2t",
        latex: false,
      },
      {
        value: "B",
        description: "\\frac{1}{2}t",
        latex: true,
      },
      {
        value: "C",
        description: "t",
        latex: false,
      },
      {
        value: "D",
        description: "0",
        latex: false,
      },
  ];

  const correctValue = 'C';

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
            Mini Quiz Konsep Dasar Nilai Limit
          </Text>

          <Box p={5} shadow={"sm"} borderRadius={"lg"}>
            <Text>
              Suatu partikel bergerak meninggalkan titik asal. Jarak dari titik
              asal setelah t detik dinyatakan dengan
            </Text>
            <LatexRenderer expression={"f(t) = \\frac{1}{2}t^2cm"} />
            <Text>
              Lanju Perubahan dari titik asal saat t = 7 detik adalah ...{" "}
            </Text>
            <QuizComponent answerProps={answerArray} correctValue={correctValue} nextMateri={"sepihak"} nextPath={"/materi/limit-sepihak"}/>
          </Box>
        </Container>
      </Box>
    </Container>
  );
}

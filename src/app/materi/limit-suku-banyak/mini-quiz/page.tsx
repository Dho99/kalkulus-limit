import { Container, Box, Text } from "@chakra-ui/react";
import Sidenav from "@/components/page/materi/sidenav";
import { metadata } from "@/app/layout";
import QuizComponent from "@/components/page/quiz";
import LatexRenderer from "@/components/LatexRenderer";

export default function Page() {
  metadata.title = "LearnLimit | Mini Quiz Limit Suku Banyak";

  const answerArray = [
    {
      value: "A",
      description: "-\\frac{1}{8}",
      latex: true,
    },
    {
      value: "B",
      description: "\\frac{1}{8}",
      latex: true,
    },
    {
      value: "C",
      description: "-\\frac{1}{6}",
      latex: true,
    },
    {
      value: "D",
      description: "\\frac{1}{6}",
      latex: true,
    },
  ];

  const correctValue = "C";

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
        <Sidenav content={"Limit Suku Banyak"} />
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
            Mini Quiz Konsep Limit Sepihak
          </Text>

          <Box p={5} shadow={"sm"} borderRadius={"lg"}>
            <LatexRenderer
              expression={'\\lim_{x \\to 2}\\frac{x^2 - 5x + 6}{x^2+2x-8} = '}
            />
            <QuizComponent
            currentMateri="sukuBanyak"
              answerProps={answerArray}
              correctValue={correctValue}
              nextMateri={"takHingga"}
              nextPath={"/materi/limit-tak-hingga"}
            />
          </Box>
        </Container>
      </Box>
    </Container>
  );
}

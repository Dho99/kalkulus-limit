import {Container, Box, Text} from "@chakra-ui/react"
import Sidenav from "@/components/page/materi/sidenav";
import LatexRenderer from "@/components/LatexRenderer";
import QuizComponent from "@/components/page/quiz";

export default function Page() {

    const answerArray = [
        {
          value: "A",
          description: "\\frac{1}{8}",
          latex: true,
        },
        {
          value: "B",
          description: "\\frac{1}{6}",
          latex: true,
        },
        {
          value: "C",
          description: "\\frac{1}{4}",
          latex: true,
        },
        {
          value: "D",
          description: "\\frac{1}{2}",
          latex: true,
        },
    ];

    const correctValue: string = 'A';
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
        color={"white"}
      >
        <Sidenav content={"Limit Fungsi Trigonometri"} />
        <Container flexBasis={"100%"}>
          <Text
            textStyle={"5xl"}
            color={"white"}
            justifyContent={"center"}
            display={"flex"}
            fontWeight={"bold"}
            mb={"3%"}
            textAlign={"center"}
            w="full"
            ms={3}
            mt={5}
          >
            Mini Quiz Limit Fungsi Trigonometri
          </Text>

          <Box p={5} shadow={"lg"} border={"1px solid white"} borderRadius={"lg"}>
            <LatexRenderer expression={"\\lim_{x \\to \\infty} \\frac{2x \\cot \\frac{2}{x} - 3 \\cot \\frac{2}{x}}{(1 - \\cos \\frac{2}{x})x^2 \\sin \\frac{1}{x}} ="} />
            <QuizComponent answerProps={answerArray} correctValue={correctValue} nextMateri={"konsepDasar"} currentMateri="trigonometri" nextPath={"/"}/>
          </Box>
        </Container>
      </Box>
    </Container>
  );
}

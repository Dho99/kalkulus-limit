import {Container, Box, Text} from "@chakra-ui/react"
import Sidenav from "@/components/page/materi/sidenav";
import LatexRenderer from "@/components/LatexRenderer";
import QuizComponent from "@/components/page/quiz";

export default function Page() {

    const answerArray = [
        {
          value: "A",
          description: "1",
          latex: false,
        },
        {
          value: "B",
          description: "-1",
          latex: false,
        },
        {
          value: "C",
          description: "-2",
          latex: false,
        },
        {
          value: "D",
          description: "2",
          latex: false,
        },
    ];

    const correctValue: string = 'D';
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
        <Sidenav content={"Limit Tak Hingga"} />
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
            Mini Quiz Limit Tak Hingga
          </Text>

          <Box p={5} shadow={"sm"} borderRadius={"lg"}>
            <LatexRenderer expression={"\\lim_{x \\to 0}\\frac{1-cos^2x}{x^2\\tan(x+\\frac{\\pi}{4})}"} />
            <QuizComponent answerProps={answerArray} correctValue={correctValue} nextMateri={"trigonometri"} nextPath={"/materi/limit-fungsi-trigonometri"} currentMateri="takHingga"/>
          </Box>
        </Container>
      </Box>
    </Container>
  );
}

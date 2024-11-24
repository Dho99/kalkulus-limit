import { Container, Box, Text } from "@chakra-ui/react";
import Sidenav from "@/components/page/materi/sidenav";
import { metadata } from "@/app/layout";
import QuizComponent from "@/components/page/quiz";
import LatexRenderer from "@/components/LatexRenderer";

export default function Page() {
  metadata.title = "LearnLimit | Mini Quiz Limit Sepihak";

  const answerArray = [
    {
      value: "A",
      description: "3",
      latex: false,
    },
    {
      value: "B",
      description: "2",
      latex: false,
    },
    {
      value: "C",
      description: "-3",
      latex: false,
    },
    {
      value: "D",
      description: "-2",
      latex: false,
    },
  ];

  const correctValue = "A";

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
        <Sidenav content={"Limit Sepihak"} />
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
            Mini Quiz Konsep Limit Sepihak
          </Text>

          <Box p={5} shadow={"lg"} border={"1px solid white"} borderRadius={"lg"}>
            <LatexRenderer
              expression={`
                f(x) = \\begin{cases}
                3 & \\\\
                \\dfrac{x^2 - x - 2}{x - 2} &
                \\end{cases}
            `}
            />
            <Text display={"flex"} alignItems={"center"}>
              Tentukan <LatexRenderer expression={"\\space \\lim_{x \\to 2}f(x)"} inline={true} />
            </Text>
            <QuizComponent
              answerProps={answerArray}
              correctValue={correctValue}
              nextMateri={"sukuBanyak"}
              currentMateri="sepihak"
              nextPath={"/materi/limit-suku-banyak"}
            />
          </Box>
        </Container>
      </Box>
    </Container>
  );
}

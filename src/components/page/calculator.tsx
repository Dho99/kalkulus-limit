"use client";

// import nerdamer from "nerdamer";
import { useState, Suspense } from "react";
import { Text, Box, Tabs, Container } from "@chakra-ui/react";
import LatexRenderer from "@/components/LatexRenderer";
import Sepihak from "./kalkulator/sepihak";
import { Alert } from "@/components/ui/alert";
import Polinomial from "./kalkulator/polinomial";
import TakHingga from "./kalkulator/takHingga";
import Trigonometri from "./kalkulator/trigonometri";
import GenerateText from "./kalkulator/generateText";

const CalculatorChild = () => {
  const [value, setValue] = useState("");
  const [expression, setExpression] = useState("");
  const [errorMsg, setErrorMessage] = useState("");
  const [eqType, setEqType] = useState("");
  const [tempInput, setTempInput] = useState("");
  const [chartData, setChartData] = useState({
    type: "",
    data: {
      x: "",
      value: "",
      leftValue: "",
      rightValue: "",
      expression: "",
    },
  });


  const clearAllState = () => {
    setValue("");
    setExpression("");
    setErrorMessage("");
    setEqType("");
    setTempInput("");
    setChartData({
      type: "",
      data: {
        x: "",
        value: "",
        leftValue: "",
        rightValue: "",
        expression: "",
      },
    });
  };

  return (
    <Container
      display={"flex"}
      w="dvw"
      flexDir={{
        xl: "row",
        lg: "row",
        md: "column",
        sm: "column",
        base: "column",
      }}
      gap={3}
      justifyContent={"center"}
    >
      <Box
        p={5}
        shadow={"xl"}
        rounded={"lg"}
        flexBasis={"50%"}
        bg={"blue.700"}
        color={"white"}
      >
        <Tabs.Root
          defaultValue="sepihak"
          variant={"enclosed"}
          overflow={"auto"}
         
        >
          <Alert status="info" title="Perhatian, Kalkulator Tahap Eksperimen" border={"1px solid white"} shadow={"md"} mb={4}>
              <Text>Kalkulator belum mendukung operasi matematika kompleks</Text>
          </Alert>
          <Tabs.List>
            <Tabs.Trigger
              value="sepihak"
              _selected={{ bgColor: "blue.100", color: "black" }}
              onClick={clearAllState}
            >
              {/* <LuUser /> */}
              Sepihak
            </Tabs.Trigger>
            <Tabs.Trigger
              value="polinomial"
              _selected={{ bgColor: "blue.100", color: "black" }}
              onClick={clearAllState}
            >
              {/* <LuFolder /> */}
              Polinomial
            </Tabs.Trigger>
            <Tabs.Trigger
              value="takHingga"
              _selected={{ bgColor: "blue.100", color: "black" }}
              onClick={clearAllState}
            >
              {/* <LuCheckSquare /> */}
              Tak Hingga
            </Tabs.Trigger>
            <Tabs.Trigger
              value="trigonometri"
              _selected={{ bgColor: "blue.100", color: "black" }}
              onClick={clearAllState}
            >
              {/* <LuCheckSquare /> */}
              Trigonometri
            </Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content
            value="sepihak"
            onClick={() => {
              setEqType("Sepihak");
            }}
          >
            <Sepihak
              setValue={setValue}
              setExpression={setExpression}
              setErrorMessage={setErrorMessage}
              setTempInput={setTempInput}
            />
          </Tabs.Content>
          <Tabs.Content
            value="polinomial"
            onClick={() => {
              setEqType("Polinomial");
            }}
          >
            <Polinomial
              setValue={setValue}
              setExpression={setExpression}
              setErrorMessage={setErrorMessage}
              setTempInput={setTempInput}
            />
          </Tabs.Content>
          <Tabs.Content
            value="takHingga"
            onClick={() => {
              setEqType("Tak Hingga");
            }}
          >
            <TakHingga
              setValue={setValue}
              setExpression={setExpression}
              setErrorMessage={setErrorMessage}
              setTempInput={setTempInput}
            />
          </Tabs.Content>
          <Tabs.Content
            value="trigonometri"
            onClick={() => {
              setEqType("Trigonometri");
            }}
          >
            <Trigonometri
              setValue={setValue}
              setExpression={setExpression}
              setErrorMessage={setErrorMessage}
              // setTempInput={setTempInput}
            />
          </Tabs.Content>
        </Tabs.Root>
      </Box>
      <Box
        shadow={"xl"}
        p={5}
        rounded="lg"
        flexBasis={"100%"}
        bg={"blue.700"}
        color={"white"}
      >
        <Box
          display={errorMsg ? "none" : value ? "none" : "flex"}
          alignItems={"center"}
          m={"auto"}
        >
          <Alert status="info" title="Calculator Info">
            Input belum terdeteksi
          </Alert>
        </Box>
        <Box display={errorMsg ? "none" : value ? "" : "none"}>
          {/* {JSON.stringify(value)} */}
          {(() => {
            if (value && !errorMsg) {
              const argsForGemini = `\\lim_{${
                JSON.parse(tempInput)["key2"]
              } \\to ${JSON.parse(tempInput)["key3"]}}${
                JSON.parse(tempInput)["key1"]
              } \\approx ${value}`;

              // const resResult = getAIResponse(argsForGemini)

              return (
                <>
                  <Text textStyle={"xl"} fontWeight={"semibold"}>
                    Hasil Kalkulasi Limit :
                  </Text>
                  <Box display={"flex"} mb={2}>
                    {expression == "noLatex" ? (
                      <LatexRenderer
                        expression={`\\lim_{${
                          JSON.parse(tempInput)["key2"]
                        } \\to ${JSON.parse(tempInput)["key3"]}}${
                          JSON.parse(tempInput)["key1"]
                        } \\approx `}
                      />
                    ) : (
                      <LatexRenderer expression={expression} />
                    )}

                    <Box ms={1}>
                      <LatexRenderer expression={value} />
                    </Box>
                  </Box>
                  <Box>
                    <Text textStyle={"lg"} fontWeight={"bold"}>
                      Penjelasan :{" "}
                    </Text>
                    <Text my={3} overflow={"auto"}>
                    <Suspense fallback={<p>Loading response...</p>}>
                      <GenerateText expression={argsForGemini} />
                    </Suspense>
                    </Text>
                  </Box>
                  {/* {resResult} */}
                </>
              );
            }
          })()}
        </Box>

        <Box>
          <Text textStyle={"md"} fontWeight={"semibold"}>
            {(() => {
              if (errorMsg) {
                return (
                  <Alert status="error" title="Calculator Error">
                    {JSON.parse(errorMsg).message}
                    {/* {errorMsg} */}
                  </Alert>
                );
              }
            })()}
          </Text>
        </Box>
      </Box>
    </Container>
  );
};

export default CalculatorChild;

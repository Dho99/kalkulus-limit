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
  const [values, setValues] = useState([
    {
      result: "",
      result1: "",
    },
  ]);
  const [expression, setExpression] = useState("");
  const [errorMsg, setErrorMessage] = useState("");
  const [eqType, setEqType] = useState(""); //eslint-disable-line
  const [tempInput, setTempInput] = useState("");
  // const [chartData, setChartData] = useState({
  //   type: "",
  //   data: {
  //     x: "",
  //     value: "",
  //     leftValue: "",
  //     rightValue: "",
  //     expression: "",
  //   },
  // });

  const clearAllState = () => {
    setValue("");
    setExpression("");
    setErrorMessage("");
    setEqType("");
    setTempInput("");
    setValues([
      {
        result: "",
        result1: "",
      },
    ])
    // setChartData({
    //   type: "",
    //   data: {
    //     x: "",
    //     value: "",
    //     leftValue: "",
    //     rightValue: "",
    //     expression: "",
    //   },
    // });
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
          <Alert
            status="info"
            title="Perhatian, Kalkulator Tahap Eksperimen"
            border={"1px solid white"}
            shadow={"md"}
            mb={4}
          >
            <Text>Kalkulator belum mendukung operasi matematika kompleks</Text>
          </Alert>
          <Tabs.List>
            <Tabs.Trigger
              value="sepihak"
              _selected={{ bgColor: "blue.100", color: "black" }}
              onClick={clearAllState}
            >

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
              setValues={setValues}
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
        {/* {JSON.stringify(values)} */}
        <Box display={errorMsg ? "none" : value ? "" : values[0] ? "" : "none"}>
          {/* {JSON.stringify(value)} */}
          {(() => {
            if ((value && !errorMsg) || (values[0].result && !errorMsg)) {
              let argsForGemini: string = "";
              if (eqType == "sepihak") {
                argsForGemini = `Limit Kanan : \\lim_{${
                  JSON.parse(tempInput)["key2"]
                } \\to ${JSON.parse(tempInput)["key3"]}}${
                  JSON.parse(tempInput)["key1"]
                } = ${values[0].result}, Limit Kiri : 
                \\lim_{${JSON.parse(tempInput)["key2"]} \\to ${
                  JSON.parse(tempInput)["key5"]
                }}${JSON.parse(tempInput)["key4"]} = ${values[0].result1}
                `;
              } else {
                argsForGemini = `\\lim_{${JSON.parse(tempInput)["key2"]} \\to ${
                  JSON.parse(tempInput)["key3"]
                }}${JSON.parse(tempInput)["key1"]} = ${value}`;
              }

              // const resResult = getAIResponse(argsForGemini)

              return (
                <>
                  <Text textStyle={"xl"} fontWeight={"semibold"}>
                    Hasil Kalkulasi Limit :
                  </Text>
                  <Box display={"flex"} mb={2}>
                    {(() => {
                      if (expression == "noLatex") {
                        if (eqType == "Sepihak") {
                          return (
                            <Box display={"flex"} flexDir={"column"}>
                              <Box>
                                <Text>Hasil Limit Kanan : </Text>
                                <LatexRenderer
                                  expression={`\\lim_{${
                                    JSON.parse(tempInput)["key2"]
                                  } \\to +${JSON.parse(tempInput)["key3"]}}${
                                    JSON.parse(tempInput)["key1"]
                                  } = ${values[0].result}`}
                                />
                              </Box>
                              <Box>
                                <Text>Hasil Limit Kiri : </Text>
                                <Box>
                                  <LatexRenderer
                                    expression={`\\lim_{${
                                      JSON.parse(tempInput)["key2"]
                                    } \\to ${JSON.parse(tempInput)["key5"]}}${
                                      JSON.parse(tempInput)["key4"]
                                    } = ${values[0].result1}`}
                                  />
                                </Box>
                              </Box>
                            </Box>
                          );
                        }
                        return (
                          <LatexRenderer
                            expression={`\\lim_{${
                              JSON.parse(tempInput)["key2"]
                            } \\to ${JSON.parse(tempInput)["key3"]}}${
                              JSON.parse(tempInput)["key1"]
                            } = `}
                          />
                        );
                      } else {
                        return <LatexRenderer expression={expression} />;
                      }
                      // {expression == "noLatex" ? (
                      //   <LatexRenderer
                      //     expression={`\\lim_{${
                      //       JSON.parse(tempInput)["key2"]
                      //     } \\to ${JSON.parse(tempInput)["key3"]}}${
                      //       JSON.parse(tempInput)["key1"]
                      //     } = `}
                      //   />
                      // ) : (
                      // )}
                    })()}

                    <Box ms={1}>
                      {(() => {
                        if (eqType !== "Sepihak") {
                          return <LatexRenderer expression={value} />;
                        }
                      })()}
                    </Box>
                  </Box>
                  <Box>
                    <Text textStyle={"lg"} fontWeight={"bold"}>
                      Penjelasan :{" "}
                    </Text>
                    <Text my={3} overflow={"auto"}>
                    {(() => {
                        if(eqType == 'Sepihak'){
                          if(values[0].result == values[0].result1){
                            return (
                              <Text>Kedua ekspresi limit di atas menghasilkan Limit fungsi yang kontinu</Text>
                            )
                          }else{
                            return (
                              <Text>Kedua ekspresi limit di atas menghasilkan Limit fungsi yang tidak kontinu</Text>
                            )
                          }
                        }else{
                          return (
                          <Suspense fallback={<p>Loading response...</p>}>
                            <GenerateText expression={argsForGemini} />
                          </Suspense>
                          )
                        }
                      })()}
                      {/* <Suspense fallback={<p>Loading response...</p>}>
                      <GenerateText expression={argsForGemini} />
                    </Suspense> */}
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

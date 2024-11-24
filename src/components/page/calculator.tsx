"use client";

// import nerdamer from "nerdamer";
import { useState } from "react";
import { Text, Box, Tabs } from "@chakra-ui/react";
import LatexRenderer from "@/components/LatexRenderer";
import Sepihak from "./kalkulator/sepihak";
import { Alert } from "@/components/ui/alert";
import Polinomial from "./kalkulator/polinomial";
import TakHingga from "./kalkulator/takHingga";
import Trigonometri from "./kalkulator/trigonometri";
// import CalculatorChart from "./kalkulator/chart";

const CalculatorChild = () => {
  const [value, setValue] = useState("");
  const [value1, setValue1] = useState("");
  const [expression, setExpression] = useState("");
  const [expression1, setExpression1] = useState("");
  const [errorMsg, setErrorMessage] = useState("");
  const [eqType, setEqType] = useState("");
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
    setExpression1("");
    setValue1("");
    setErrorMessage("");
    setEqType("");
    setTempInput("");
    // setChartData({
    //   type: "",
    //   data: {
    //     x: "",
    //     value: "",
    //     leftValue: "",
    //     rightValue: "",
    //     expression: "",
    //   },
    // })
  };

  return (
    <Box
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

    >
      <Box p={5} shadow={"lg"} rounded={"lg"} flexBasis={"50%"} bg={"whiteAlpha.900"}>
        <Tabs.Root defaultValue="sepihak" variant={"enclosed"}>
          <Tabs.List>
            <Tabs.Trigger
              value="sepihak"
              _selected={{ bgColor: "blue.400", color: "black" }}
              onClick={clearAllState}
            >
              {/* <LuUser /> */}
              Sepihak
            </Tabs.Trigger>
            <Tabs.Trigger
              value="polinomial"
              _selected={{ bgColor: "blue.400", color: "black" }}
              onClick={clearAllState}
            >
              {/* <LuFolder /> */}
              Polinomial
            </Tabs.Trigger>
            <Tabs.Trigger
              value="takHingga"
              _selected={{ bgColor: "blue.400", color: "black" }}
              onClick={clearAllState}
            >
              {/* <LuCheckSquare /> */}
              Tak Hingga
            </Tabs.Trigger>
            <Tabs.Trigger
              value="trigonometri"
              _selected={{ bgColor: "blue.400", color: "black" }}
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
              setExpression1={setExpression1}
              setValue1={setValue1}
              setErrorMessage={setErrorMessage}
              // setChartData={setChartData}
              
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
            />
          </Tabs.Content>
        </Tabs.Root>
      </Box>
      <Box shadow={"lg"} p={5} rounded="lg" flexBasis={"100%"} bg={"whiteAlpha.900"}>
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
          {(() => {
            if (eqType == "Sepihak") {
              return (
                <>
                  <Text textStyle={"xl"} fontWeight={"semibold"}>
                    Limit Kanan :{" "}
                  </Text>
                  <Box display={"flex"} mb={2}>
                    <LatexRenderer expression={expression} />
                    <Box ms={1}>
                      <LatexRenderer expression={value} />
                    </Box>
                  </Box>
                  <Text textStyle={"xl"} fontWeight={"semibold"}>
                    Limit Kiri :{" "}
                  </Text>
                  <Box display={"flex"}>
                    <LatexRenderer expression={expression1} />
                    <Box ms={1}>
                      <LatexRenderer expression={value1} />
                    </Box>
                  </Box>
                  <Text>
                    Fungsi kanan dan kiri{" "}
                    {value === value1
                      ? " memiliki limit"
                      : "tidak memiliki limit "}
                    , Maka nilai dari kedua fungsi tersebut adalah{" "}
                    {value === value1 ? " sama" : "tidak sama "}
                  </Text>
                </>
              );
            } else if (eqType == "Polinomial") {
              return (
                <>
                  <Text textStyle={"xl"} fontWeight={"semibold"}>
                    Limit Suku Banyak / Polinom :{" "}
                  </Text>
                  <Box display={"flex"} mb={2}>
                    {expression == "noLatex" ? (
                      <LatexRenderer
                        expression={`\\lim_{${
                          JSON.parse(tempInput)["key2"]
                        } \\to ${JSON.parse(tempInput)["key3"]}}${
                          JSON.parse(tempInput)["key1"]
                        } = `}
                      />
                    ) : (
                      <LatexRenderer expression={expression} />
                    )}

                    <Box ms={1}>
                      <LatexRenderer expression={value} />
                    </Box>
                  </Box>
                </>
              );
            } else {
              return (
                <>
                  <Text textStyle={"xl"} fontWeight={"semibold"}>
                    Limit {eqType}
                  </Text>
                  <Box display={"flex"} mb={2}>
                    <LatexRenderer expression={expression} />
                    <Box ms={1}>
                      <LatexRenderer expression={value} />
                    </Box>
                  </Box>
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
                  </Alert>
                );
              }
            })()}
          </Text>
        </Box>
        {/* {value && !errorMsg && (
          <CalculatorChart
          ChartData={chartData}
          />
        )} */}
      </Box>
    </Box>
  );
};

export default CalculatorChild;

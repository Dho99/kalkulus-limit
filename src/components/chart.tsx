import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";

import { Box, Flex, Text, Input, Button, SimpleGrid } from "@chakra-ui/react";
import { InputGroup } from "@/components/ui/input-group";

// Kalkulator Limit (mirip dengan implementasi sebelumnya)
const LimitCalculator = {
  parseExpression(expr: string) {
    return expr
      .replace(/sin/g, "Math.sin")
      .replace(/cos/g, "Math.cos")
      .replace(/tan/g, "Math.tan")
      .replace(/log/g, "Math.log")
      .replace(/exp/g, "Math.exp")
      .replace(/sqrt/g, "Math.sqrt")
      .replace(/abs/g, "Math.abs")
      .replace(/pi/g, "Math.PI")
      .replace(/pow/g, "Math.pow");
  },

  generatePointsForPlot(
    expression: string,
    range: { start: number; end: number; step: number }
  ) {
    const parsedExpr = this.parseExpression(expression);
    const points: Array<{ x: number; y: number }> = [];
    const { start, end, step } = range;

    try {
      const limitFunc = new Function("x", `return ${parsedExpr}`);

      for (let x = start; x <= end; x += step) {
        try {
          const y = limitFunc(x);
          if (!isNaN(y) && isFinite(y)) {
            points.push({ x, y });
          }
        } catch (error) {
          console.error(`Error at x=${x}:`, error);
        }
      }
    } catch (error) {
      console.error("Error generating plot points:", error);
    }

    return points;
  },

  calculateLimit(expression: string, approachValue: number) {
    const parsedExpr = this.parseExpression(expression);

    const calculateSideLimit = (side: string) => {
      const deltas = [1e-10, 1e-8, 1e-6, 1e-4, 1e-2];
      const values = deltas
        .map((delta) => {
          const x =
            side === "left" ? approachValue - delta : approachValue + delta;
          try {
            return new Function("x", `return ${parsedExpr}`)(x);
          } catch {
            return null;
          }
        })
        .filter((v) => v !== null);

      return values.length > 0
        ? values.reduce((a, b) => a + b, 0) / values.length
        : null;
    };

    return {
      leftLimit: calculateSideLimit("left"),
      rightLimit: calculateSideLimit("right"),
    };
  },
};

const Chart = () => {
  // State untuk parameter limit
  const [limitParams, setLimitParams] = useState({
    expression: "x/(x+1)",
    range: { start: -10, end: 10, step: 0.1 },
    approachValue: 0,
  });

  // State untuk hasil limit

  type LimitState = {
    leftLimit: null | number;
    rightLimit: null | number;
    plotData: number[];
  };

  const limitState: LimitState = {
    leftLimit: null,
    rightLimit: null,
    plotData: [],
  };

  const [limitResult, setLimitResult] = useState(limitState); //eslint-disable-line

  // Fungsi untuk mengupdate parameter
  const updateParam = (key: string, value: string | number) => {
    setLimitParams((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  // Hitung limit dan generate plot
  const calculateLimit = () => {
    const { expression, range, approachValue } = limitParams;

    // Generate plot points
    const plotData = LimitCalculator.generatePointsForPlot(expression, range);

    // Hitung limit
    const limitResult: any = LimitCalculator.calculateLimit( //eslint-disable-line
      expression,
      approachValue
    ); //eslint-disable-line

    setLimitResult({
      ...limitResult,
      plotData,
    });
  };

  return (
    <Flex
      flexDirection={{
        xl: "row",
        lg: "row",
        md: "column",
        sm: "column",
        base: "column",
      }}
      alignItems={"center"}
    >
      <Box
        flexBasis={"30%"}
        alignItems={"center"}
        w={{ xl: "", lg: "", md: "full", sm: "full", base: "full" }}
        mb={{xl: 0, lg: 0, md: 8, sm: 8, base: 8}}
      >
        <Text textStyle={"lg"} fontWeight={"bold"} textAlign={"center"}>
          Masukkan Persamaan Limit
        </Text>
        <SimpleGrid
          my={3}
          columns={{ xl: 1, lg: 1, md: 2, sm: 2, base: 2 }}
          gap={2}
        >
          <InputGroup flex="1" startElement="Ekspresi : ">
            <Input
              ps="6em"
              placeholder="Contoh: x/(x+1)"
              type="text"
              value={limitParams.expression}
              onChange={(e) => updateParam("expression", e.target.value)}
            />
          </InputGroup>

          <InputGroup flex="1" startElement="Mulai : ">
            <Input
              ps="6em"
              // placeholder="Contoh: x/(x+1)"
              type="number"
              value={limitParams.range.start}
              onChange={(e) =>
                setLimitParams((prev) => ({
                  ...prev,
                  range: { ...prev.range, start: parseFloat(e.target.value) },
                }))
              }
            />
          </InputGroup>

          <InputGroup flex="1" startElement="Akhir : ">
            <Input
              ps="6em"
              // placeholder="Contoh: x/(x+1)"
              type="number"
              value={limitParams.range.end}
              onChange={(e) =>
                setLimitParams((prev) => ({
                  ...prev,
                  range: { ...prev.range, end: parseFloat(e.target.value) },
                }))
              }
            />
          </InputGroup>

          <InputGroup flex="1" startElement="Langkah : ">
            <Input
              ps="6em"
              // placeholder="Contoh: x/(x+1)"
              type="number"
              value={limitParams.range.step}
              onChange={(e) =>
                setLimitParams((prev) => ({
                  ...prev,
                  range: { ...prev.range, step: parseFloat(e.target.value) },
                }))
              }
            />
          </InputGroup>

          <InputGroup flex="1" startElement="Nilai Limit : ">
            <Input
              ps="6em"
              // placeholder="Contoh: x/(x+1)"
              type="number"
              value={limitParams.approachValue}
              onChange={(e) =>
                updateParam("approachValue", parseFloat(e.target.value))
              }
            />
          </InputGroup>
        </SimpleGrid>
        <Button
          variant={"solid"}
          colorPalette={"yellow"}
          size={"lg"}
          w="full"
          onClick={calculateLimit}
        >
          Hitung Limit
        </Button>
  
      </Box>
      <Box flexBasis={"100%"}>
        <ResponsiveContainer height={400}>
          <LineChart
            data={limitResult.plotData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              type="number"
              dataKey="x"
              label={{ value: "x", position: "right" }}
            />
            <YAxis
              type="number"
              label={{ value: "f(x)", angle: -90, position: "left" }}
            />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="y"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            {limitParams.approachValue && (
              <ReferenceLine
                x={limitParams.approachValue}
                stroke="red"
                strokeDasharray="3 3"
              />
            )}
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </Flex>
  );
};

export default Chart;

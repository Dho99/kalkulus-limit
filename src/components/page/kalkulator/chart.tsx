import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Box, Text } from "@chakra-ui/react";

type ChartProps = {
  ChartData: {
    type: string;
    data: {
      x: string;
      value: string;
      leftValue: string;
      rightValue: string;
      expression: string;
    };
  };
};

const CalculatorChart = ({ ChartData }: ChartProps) => {
  // Function to generate points for different calculator types
  const generateChartData = () => {
    switch (ChartData.type) {
      case "Sepihak": {
        // Generate points around the limit point
        const leftPoints = [];
        const rightPoints = [];
        const limitPoint = parseFloat(ChartData.data.x);

        // Generate 5 points on each side
        for (let i = -5; i <= 5; i++) {
          if (i < 0) {
            leftPoints.push({
              x: limitPoint + i * 0.2,
              "Limit Kiri": parseFloat(ChartData.data.leftValue),
            });
          } else if (i > 0) {
            rightPoints.push({
              x: limitPoint + i * 0.2,
              "Limit Kanan": parseFloat(ChartData.data.rightValue),
            });
          }
        }

        return [...leftPoints, ...rightPoints];
      }

      case "Polinomial": {
        const points = [];
        const xValue = parseFloat(ChartData.data.x);
        const result = parseFloat(ChartData.data.value);

        // Generate points around the x value
        for (let i = -5; i <= 5; i++) {
          points.push({
            x: xValue + i,
            Nilai: result,
          });
        }

        return points;
      }

      case "TakHingga": {
        const points = [];
        // Generate points approaching infinity/negative infinity
        for (let i = 1; i <= 10; i++) {
          points.push({
            x: i * 1000,
            Nilai: parseFloat(ChartData.data.value),
          });
        }
        return points;
      }

      case "Trigonometri": {
        const points = [];
        // Generate points for one complete cycle
        for (let i = 0; i <= 360; i += 30) {
          points.push({
            x: i,
            Nilai: Math.sin((i * Math.PI) / 180), // Example using sin
          });
        }
        return points;
      }

      default:
        return [];
    }
  };

  const chartData = generateChartData();

  return (
    <Box w={"full"} mt={4}>
      <Box>
        <Text textStyle={"xl"}>Visualisasi Limit {ChartData.type}</Text>
      </Box>
      {JSON.stringify(chartData)}
      <Box>
        <Box w={"full"} h={"50vh"}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={chartData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="x" />
              <YAxis />
              <Tooltip />
              <Legend />
              {ChartData.type === "Sepihak" ? (
                <>
                  <Line
                    type="monotone"
                    dataKey="Limit Kiri"
                    stroke="#8884d8"
                    dot={true}
                  />
                  <Line
                    type="monotone"
                    dataKey="Limit Kanan"
                    stroke="#82ca9d"
                    dot={true}
                  />
                </>
              ) : (
                <Line
                  type="monotone"
                  dataKey="Nilai"
                  stroke="#8884d8"
                  dot={true}
                />
              )}
            </LineChart>
          </ResponsiveContainer>
        </Box>
      </Box>
    </Box>
  );
};

export default CalculatorChart;

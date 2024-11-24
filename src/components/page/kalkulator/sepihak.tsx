"use client";

import { useState, Dispatch, SetStateAction } from "react";
import LatexRenderer from "@/components/LatexRenderer";
import { Input, Box, Button } from "@chakra-ui/react";
import { Field } from "@/components/ui/field";
import nerdamer from "nerdamer";
require('nerdamer/all'); //eslint-disable-line

// type ChartProps = {
//     type: string,
//     data: {
//         x: string,
//         value: string,
//         leftValue: string,
//         rightValue: string,
//         expression: string,
//     }
// }

type ComponentProps = {
  setValue: Dispatch<SetStateAction<string>>;
  setValue1: Dispatch<SetStateAction<string>>;
  setExpression: Dispatch<SetStateAction<string>>;
  setExpression1: Dispatch<SetStateAction<string>>;
  setErrorMessage: Dispatch<SetStateAction<string>>;
  // setChartData: Dispatch<SetStateAction<ChartProps>>;
};

// export default function Sepihak({ setValue, setExpression, setExpression1, setValue1, setErrorMessage, setChartData }: ComponentProps) {
export default function Sepihak({ setValue, setExpression, setExpression1, setValue1, setErrorMessage }: ComponentProps) {
  const [input, setInput] = useState<Record<string, string>>({
    key1: '',
    key2: '',
    key3: '',
    key4: '',
  });

  const handleInput = (key: string, value: string) => {
    setInput((prev) => ({
      ...prev,
      [key]: value,
    }));
    
  };

  const calculateOneSidedLimit = () => {
    setErrorMessage('');
    const expression = `limit(${input["key1"]}, ${input["key3"]}, ${input["key4"]})`
    const expression1 = `limit(${input["key2"]}, ${input["key3"]}, ${input["key4"]})`
    try{
      const calculateResult = nerdamer(expression).toString();
      const calculateResult1 = nerdamer(expression1).toString();
  
      const parseExpression = nerdamer.convertToLaTeX(expression+'= ')
      const parseExpression1 = nerdamer.convertToLaTeX(expression1+'= ')
      setExpression(parseExpression);
      setExpression1(parseExpression1);
      setValue(calculateResult)
      setValue1(calculateResult1)

      // setChartData({
      //   type: "Sepihak",
      //   data: {
      //     x: input["key4"],
      //     value:  calculateResult,
      //     leftValue: calculateResult,
      //     rightValue: calculateResult1,
      //     expression: input["key1"]
      //   }
      // })


    }catch(e: unknown){
      setErrorMessage(JSON.stringify(e));
    }
    
  };

  return (
    <Box minH={"10vh"} display={"flex"} flexDirection={"column"} gap={4}>
      <Field label="Masukkan Ekspresi Fungsi Limit Kanan" helperText="Apabila terdapat variabel yang diikuti konstanta, maka dipisahkan dengan * (bintang), Contoh : (2x) menjadi (2*x)">
        <Input
          placeholder="Masukkan Ekspresi Fungsi Limit Kanan"
          onInput={(e) => {
            handleInput("key1", e.currentTarget.value);
          }}
        />
      </Field>
      <Field label="Bentuk Fungsi Limit Kanan : ">
          {input["key1"] ? <LatexRenderer expression={input["key1"]} />: "Belum ada input "}
      </Field>      

      <Field label="Masukkan Ekspresi Fungsi Limit Kiri">
        <Input
          placeholder="Masukkan Ekspresi Fungsi Limit Kiri"
          onInput={(e) => {
            handleInput("key2", e.currentTarget.value);
          }}
        />
      </Field>
      
      <Field label="Bentuk Fungsi Limit Kiri : ">
          {input["key2"] ? <LatexRenderer expression={input["key2"]} />: "Belum ada input "}
      </Field>      

      <Field label="Masukkan Variabel">
        <Input
          placeholder="Masukkan Variabel"
          onInput={(e) => {
            handleInput("key3", e.currentTarget.value);
          }}
        />
      </Field>
      <Field label="Masukkan Nilai Limit">
        <Input
          placeholder="Masukkan Nilai Limit"
          onInput={(e) => {
            handleInput("key4", e.currentTarget.value);
          }}
        />
      </Field>
   
      <Button
        w={"full"}
        colorPalette={"blue"}
        onClick={calculateOneSidedLimit}
      >
        Hitung Limit{" "}
      </Button>
    </Box>
  );
}

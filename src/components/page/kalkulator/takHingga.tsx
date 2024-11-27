"use client";

import { useState, Dispatch, SetStateAction } from "react";
import LatexRenderer from "@/components/LatexRenderer";
import { Input, Box, Button } from "@chakra-ui/react";
import { Field } from "@/components/ui/field";
import nerdamer from "nerdamer";

require("nerdamer/all"); //eslint-disable-line
import {
  RadioCardItem,
  RadioCardRoot,
} from "@/components/ui/radio-card";

type ComponentProps = {
  setValue: Dispatch<SetStateAction<string>>;
  setExpression: Dispatch<SetStateAction<string>>;
  setErrorMessage: Dispatch<SetStateAction<string>>;
  setTempInput: Dispatch<SetStateAction<string>>;
};

export default function TakHingga({
  setValue,
  setExpression,
  setErrorMessage,
  setTempInput,
}: ComponentProps) {
  const math = require("mathjs");

  const [input, setInput] = useState<Record<string, string>>({
    key1: "",
    key2: "",
    key3: "",
  });

  const handleInput = (key: string, value: string) => {
    setInput((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const calculateLimits = () => {
    setErrorMessage("");

    const approachValue = input["key3"].toLocaleLowerCase();
    const variable = input["key2"];
    const expression = input["key1"];
    if(approachValue && variable && expression){
      try {
        const bigValue = approachValue === '+infinity' ? 1e10 : approachValue === '0' ? 0 : -1e10; // Dekati tak hingga dengan angka besar
        const parsedExpr = math.parse(expression); // Parsing ekspresi
        const compiled = parsedExpr.compile(); // Kompilasi ekspresi
        const result = compiled.evaluate({ [variable]: bigValue });
  
        let calculatedResult: number|string = result;
        if (Math.abs(result) > 1e8) {
          calculatedResult = `${input["key3"].toLocaleLowerCase() === '+infinity' ? '' : '-'}Infinity`;
        }
  
        setExpression("noLatex");
        setValue(calculatedResult.toString());
  
        setTempInput(JSON.stringify(input));
  
      } catch (e: unknown|any) {
        setErrorMessage(JSON.stringify({message: e.message}));
      }
    }else{
      setErrorMessage(JSON.stringify({message: "Masukkan Semua input terlebih dahulu !"}));
    }
  };

  return (
    <Box minH={"10vh"} display={"flex"} flexDirection={"column"} gap={4}>
      <Field label="Masukkan Ekspresi Fungsi Limit Tak Hinngga" helperText="Apabila terdapat variabel yang diikuti konstanta, maka dipisahkan dengan * (bintang), Contoh : (2x) menjadi (2*x)">
        <Input
          placeholder="Contoh : x^2-1"
          border={"1px solid white"}
          shadow={"sm"}
          onInput={(e) => {
            handleInput("key1", e.currentTarget.value);
          }}
        />
      </Field>
      <Field label="Bentuk Fungsi Limit : ">
        {input["key1"] ? (
          <LatexRenderer expression={input["key1"]} />
        ) : (
          "Belum ada input "
        )}
      </Field>

      <Field label="Masukkan Variabel">
        <Input
          placeholder="Masukkan Variabel"
          border={"1px solid white"}
          shadow={"sm"}
          color={"white"}
          onInput={(e) => {
            handleInput("key2", e.currentTarget.value);
          }}
        />
      </Field>
      <Field label="Pilih arah Limit">
        <RadioCardRoot defaultValue="next">
            <RadioCardItem
              label={"Positif"}
              key={"Positif"}
              value={"inf"}
              _checked={{bg: "blue.300", color: "black", shadow: "sm"}}
              transition={"all 0.3s"}
              
              
              onClick={() => {handleInput("key3", "+infinity")}}
              />
            <RadioCardItem
              label={"Negatif"}
              key={"Negatif"}
              value={"-inf"}
              _checked={{bg: "blue.300", color: "black", shadow: "sm"}}
              onClick={() => {handleInput("key3", "-infinity")}}
              transition={"all 0.3s"}
              />
            <RadioCardItem
              label={"0"}
              transition={"all 0.3s"}
              key={"0"}
              value={"0"}
              _checked={{bg: "blue.300", color: "black", shadow: "sm"}}
              onClick={() => {handleInput("key3", "0")}}
            />
        </RadioCardRoot>
      </Field>

      <Button w={"full"}  bg={"blue.500"} mt={4} color={"white"} _hover={{bg: "blue.600"}} transition={"all 0.2s"} onClick={calculateLimits}>
        Hitung Limit{" "}
      </Button>
    </Box>
  );
}

"use client";

import { useState, Dispatch, SetStateAction } from "react";
import LatexRenderer from "@/components/LatexRenderer";
import { Input, Box, Button } from "@chakra-ui/react";
import { Field } from "@/components/ui/field";
import nerdamer from "nerdamer";
require("nerdamer/all"); //eslint-disable-line
// import {
//   RadioCardItem,
//   RadioCardLabel,
//   RadioCardRoot,
// } from "@/components/ui/radio-card";

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
  setTempInput
}: ComponentProps) {
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

  const calculatePolinomials = () => {
    setErrorMessage("");
    try {
      // Sanitize expression input
      const expression = `limit(${input["key1"]}, ${input["key2"]}, ${input["key3"]})`;

      const calculateResult = nerdamer(expression).toString();

      setExpression("noLatex");
      setValue(calculateResult);
      setTempInput(JSON.stringify(input));
    } catch (e: unknown) {
      setErrorMessage(JSON.stringify(e));
      console.log(e);
    }
  };

  return (
    <Box minH={"10vh"} display={"flex"} flexDirection={"column"} gap={4}>
      <Field label="Masukkan Ekspresi Fungsi Limit Tak Hinngga">
        <Input
          placeholder="Contoh : 4x^3 + 5x^2 - 3*x^2"
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
          onInput={(e) => {
            handleInput("key2", e.currentTarget.value);
          }}
        />
      </Field>

      <Field label="Masukkan Nilai Limit">
        <Input
          placeholder="Masukkan Nilai Limit"
          onInput={(e) => {
            handleInput("key3", e.currentTarget.value);
          }}
        />
      </Field>
     

      <Button w={"full"} colorPalette={"yellow"} onClick={calculatePolinomials}>
        Hitung Limit{" "}
      </Button>
    </Box>
  );
}
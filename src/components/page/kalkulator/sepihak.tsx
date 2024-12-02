"use client";

import { useState, Dispatch, SetStateAction } from "react";
import LatexRenderer from "@/components/LatexRenderer";
import { Input, Box, Button } from "@chakra-ui/react";
import { Field } from "@/components/ui/field";
import nerdamer from "nerdamer";
require("nerdamer/all"); //eslint-disable-line
// import VirtualKeyboard from "./mathlive";

type ComponentProps = {
  setValues: Dispatch<SetStateAction<{result: string, result1: string}[]>>;
  setExpression: Dispatch<SetStateAction<string>>;
  setTempInput: Dispatch<SetStateAction<string>>;
  setErrorMessage: Dispatch<SetStateAction<string>>;
};

export default function Sepihak({
  setValues,
  setExpression,
  setErrorMessage,
  setTempInput,
}: ComponentProps) {
  const [input, setInput] = useState<Record<string, string>>({
    key1: "",
    key2: "",
    key3: "",
    key4: "",
    key5: "",
  });

  const handleInput = (key: string, value: string) => {
    setInput((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const calculateOneSidedLimit = () => {
    setErrorMessage("");
    try {
      const expression = `limit(${input["key1"]}, ${input["key2"]}, ${input["key3"]})`;
      const expression1 = `limit(${input["key4"]}, ${input["key2"]}, ${input["key5"]})`;

      
      const calculateResult = nerdamer(expression).toString();
      const calculateResult1 = nerdamer(expression1).toString();

      setExpression("noLatex");
      setValues([{
        result: calculateResult,
        result1: calculateResult1
      }])
      // setValue(calculateResult);
      // setValue(calculateResult1);

      console.log(calculateResult)
      console.log(calculateResult1);
      
      setTempInput(JSON.stringify(input));
    } catch (e: unknown) {
      setErrorMessage(JSON.stringify(e));
    }
  };

  return (
    <Box minH={"10vh"} display={"flex"} flexDirection={"column"} gap={4}>
      <Field
        label="Masukkan Ekspresi Fungsi Limit Kanan"
        helperText="Apabila terdapat variabel yang diikuti konstanta, maka dipisahkan dengan * (bintang), Contoh : (2x) menjadi (2*x)"
      >
        <Input
          border={"1px solid white"}
          placeholder="Masukkan Ekspresi Fungsi Limit"
          shadow={"sm"}
          onInput={(e) => {
            handleInput("key1", e.currentTarget.value);
          }}
        />
        {/* <VirtualKeyboard inputKey={"key1"} handleInput={handleInput}/> */}
      </Field>

      <Field label="Bentuk Ekspresi Fungsi Limit : ">
        {input["key1"] ? (
          <LatexRenderer expression={input["key1"]} />
        ) : (
          "Belum ada input "
        )}
        {/* {JSON.stringify(input)} */}
      </Field>

      <Field
        label="Masukkan Ekspresi Fungsi Limit Kiri"
        helperText="Apabila terdapat variabel yang diikuti konstanta, maka dipisahkan dengan * (bintang), Contoh : (2x) menjadi (2*x)"
      >
        <Input
          border={"1px solid white"}
          placeholder="Masukkan Ekspresi Fungsi Limit"
          shadow={"sm"}
          onInput={(e) => {
            handleInput("key4", e.currentTarget.value);
          }}
        />
        {/* <VirtualKeyboard inputKey={"key1"} handleInput={handleInput}/> */}
      </Field>

      <Field label="Bentuk Ekspresi Fungsi Limit : ">
        {input["key1"] ? (
          <LatexRenderer expression={input["key4"]} />
        ) : (
          "Belum ada input "
        )}
        {/* {JSON.stringify(input)} */}
      </Field>

      <Field label="Masukkan Variabel">
        <Input
          border={"1px solid white"}
          shadow={"sm"}
          placeholder="Masukkan Variabel"
          onInput={(e) => {
            handleInput("key2", e.currentTarget.value);
          }}
        />
      </Field>
      <Field label="Masukkan Nilai Limit Kanan">
        <Input
          placeholder="Masukkan Nilai Limit + "
          border={"1px solid white"}
          shadow={"sm"}
          onInput={(e) => {
            handleInput("key3", e.currentTarget.value);
          }}
        />
      </Field>
      <Field label="Masukkan Nilai Limit Kiri">
        <Input
          placeholder="Masukkan Nilai Limit - "
          border={"1px solid white"}
          shadow={"sm"}
          onInput={(e) => {
            handleInput("key5", e.currentTarget.value);
          }}
        />
      </Field>
      <Button
        w={"full"}
        bg={"blue.500"}
        mt={4}
        color={"white"}
        _hover={{ bg: "blue.600" }}
        transition={"all 0.2s"}
        onClick={calculateOneSidedLimit}
      >
        Hitung Limit{" "}
      </Button>
    </Box>
  );
}

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
};

export default function TakHingga({
  setValue,
  setExpression,
  setErrorMessage,
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

    const expression = `limit(${input["key1"]}, ${input["key2"]}, ${input["key3"]})`;

    try {
      const calculateResult = nerdamer(expression).toString();

      const parseExpression = nerdamer.convertToLaTeX(expression + "= ");

      setExpression(parseExpression);
      setValue(calculateResult);
      console.log(calculateResult)
    } catch (e: unknown) {
      setErrorMessage(JSON.stringify(e));
    }
  };

  return (
    <Box minH={"10vh"} display={"flex"} flexDirection={"column"} gap={4}>
      <Field label="Masukkan Ekspresi Fungsi Limit Tak Hinngga" helperText="Apabila terdapat variabel yang diikuti konstanta, maka dipisahkan dengan * (bintang), Contoh : (2x) menjadi (2*x)">
        <Input
          placeholder="Contoh : x^2-1"
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
      <Field label="Pilih arah Limit">
        <RadioCardRoot defaultValue="next">
            <RadioCardItem
              label={"Positif"}
              key={"Positif"}
              value={"inf"}
              _checked={{bg: "yellow.300", color: "black"}}
              onClick={() => {handleInput("key3", "+Infinity")}}
            />
            <RadioCardItem
              label={"Negatif"}
              key={"Negatif"}
              value={"-inf"}
              _checked={{bg: "yellow.300", color: "black"}}
              onClick={() => {handleInput("key3", "-Infinity")}}
            />
        </RadioCardRoot>
      </Field>

      <Button w={"full"} colorPalette={"blue"} onClick={calculatePolinomials}>
        Hitung Limit{" "}
      </Button>
    </Box>
  );
}

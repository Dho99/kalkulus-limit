"use client";

import LatexRenderer from "@/components/LatexRenderer";
import {
  Box,
  Container,
  SimpleGrid,
  Text,
  For,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import {
  RadioCardItem,
  RadioCardLabel,
  RadioCardRoot,
} from "@/components/ui/radio-card";
import {
  DialogActionTrigger,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";
import { Alert } from "@/components/ui/alert"
import { useContext } from "react";
import { QuizContext } from "@/app/quiz-context";


interface Soal {
  question: Array<object>;
  answers: Array<string>;
  answer: string | null;
  correctAnswer: string;
  type: string;
}

const radioTitle: Array<string> = ["A", "B", "C", "D"];

const bahanSoal: Array<Soal> = [
  {
    question: [
      { type: "text", value: "Berapakah hasil dari" },
      { type: "latex", value: "\\lim_{x \\to 0}\\frac{sin(3x)}{(x)}" },
    ],
    answers: ["1", "3", "1/3", "0"],
    correctAnswer: "2", //array-index
    answer: null,
    type: "radio",
  },
  {
    question: [
      { type: "text", value: "Berapakah hasil dari" },
      { type: "latex", value: " \\lim_{x\\to 0}\\frac{1-cos(x)}{x^2}" },
    ],
    answers: ["1/2", "1", "0", "Tak Hingga"],
    correctAnswer: "3",
    answer: null,
    type: "radio",
  },
  {
    question: [
      { type: "text", value: "Jika" },
      { type: "latex", value: "f(x) = sin(x)" },
      { type: "text", value: "Maka" },
      { type: "latex", value: "\\lim_{x\\to 0}{\\frac{sin(x)}{x}}" },
    ],
    answers: ["1/2", "1", "0", "Tidak ada Limit"],
    correctAnswer: "1",
    answer: null,
    type: "radio",
  },
  {
    question: [
      { type: "text", value: "Tentukan nilai dari " },
      {
        type: "latex",
        value: "\\space \\lim_{x\\to 2^+}\\frac{x-2}{ |x-2| } ",
      },
    ],
    answers: ["0", "1", "-1", "Tidak ada Limit"],
    correctAnswer: "0",
    answer: null,
    type: "radio",
  },
  {
    question: [
      { type: "text", value: "Jika" },
      { type: "latex", value: "f(x) = cos(x)" },
      { type: "text", value: "Maka" },
      { type: "latex", value: "\\lim_{x\\to_\\frac{\\pi}{2^-}}cos(x)" },
    ],
    answers: ["-∞", "0", "∞", "Tidak ada Limit"],
    correctAnswer: "0",
    answer: null,
    type: "radio",
  },
  {
    question: [
      { type: "text", value: "Tentukan nilai" },
      { type: "latex", value: " \\lim_{x\\to 0}\\frac{2x+1}{x+3}" },
    ],
    answers: ["2/1", "1/2", "0", "Tidak ada Limit"],
    correctAnswer: "0",
    answer: null,
    type: "radio",
  },
  {
    question: [
      { type: "text", value: "Tentukan nilai" },
      {
        type: "latex",
        value: "\\lim_{x\\to \\infty}\\frac{\\sqrt(x^2)+2x^2+1}{x^2+1}",
      },
    ],
    answers: ["1", "0", "2", "∞"],
    correctAnswer: "0",
    answer: null,
    type: "radio",
  },
  {
    question: [
      { type: "text", value: "Harga saham perusahaan " },
      { type: "latex", value: "H(t)" },
      { type: "text", value: " dalam dolar, diberikan oleh: " },
      { type: "latex", value: "H(t) = 100 + \\frac{500}{t+1}" },
      { type: "text", value: ". Tentukan harga saham maksimum perusahaan." },
    ],
    answers: ["$100", "$500", "Tidak ada batas maksimum", "$600"],
    correctAnswer: "3",
    answer: null,
    type: "radio",
  },
  {
    question: [
      { type: "text", value: "Harga saham perusahaan " },
      { type: "latex", value: "H(t)" },
      { type: "text", value: " dalam dolar, diberikan oleh: " },
      { type: "latex", value: "H(t) = 100 + \\frac{500}{t+1}" },
      {
        type: "text",
        value:
          ". Berapa harga saham pada hari pertama setelah peluncuran (ketika 𝑡 = 1).",
      },
    ],
    answers: ["$350", "$250", "$200", "$600"],
    correctAnswer: "0",
    answer: null,
    type: "radio",
  },
  {
    question: [
      { type: "text", value: "Harga saham perusahaan " },
      { type: "latex", value: "H(t)" },
      { type: "text", value: " dalam dolar, diberikan oleh: " },
      { type: "latex", value: "H(t) = 100 + \\frac{500}{t+1}" },
      {
        type: "text",
        value: ". Ketika 𝑡→∞, apa yang terjadi pada harga saham?",
      },
    ],
    answers: [
      "Harga saham mendekati $100",
      "Harga saham mendekati $500.",
      "Harga saham tetap konstan di $600.",
      "Harga saham terus meningkat tanpa batas.",
    ],
    correctAnswer: "0",
    answer: null,
    type: "radio",
  },
];

const renderQuestion = (parts: Array<string | any>) => //eslint-disable-line
  parts.map((part, index) =>
    part.type === "text" ? (
      <Text key={index}>{part.value}</Text>
    ) : (
      <LatexRenderer key={index} expression={part.value} />
    )
  );

export default function Page() {
    const { levelFinish, updateLevelFinish } = useContext(QuizContext);

    const updateContextAndLocalStorage = () => {

      
      updateLevelFinish("exercise", true);
      localStorage.removeItem("progress");
      
      const levelObj: { [key: string]: { open: boolean; finish: boolean } } = {
        ...levelFinish,
      };
      levelObj["exercise"].finish = true;
  
      localStorage.setItem("progress", JSON.stringify(levelObj));

    }
    
    const storeToLocal = (correct: number, wrong: number) => {
        let histories: object[] = [];
        const now = new Date().toLocaleDateString();
        const getItem: string | null | any = typeof window !== 'undefined' ? localStorage.getItem('history') : null;//eslint-disable-line
        const parseItem: object = JSON.parse(getItem);

        if(getItem){
          histories = Object.values(parseItem);

        }

        histories.push({date: now, correctAnswer: correct, wrongAnswer: wrong});
        

        localStorage.setItem("history", JSON.stringify(histories));

        updateContextAndLocalStorage();
        
        
        // console.log(histories);

    }


  const validateAnswer = () => {

    let correctAnswer: number = 0;
    let wrongAnswer: number = 0;

    try{
        for (let i = 0; i < questionNumber; i++) {
            if(bahanSoal[i].correctAnswer == answerState[i].value){
                correctAnswer++;
            }else{
                wrongAnswer++;
            }
        }
   
        storeToLocal(correctAnswer, wrongAnswer);

        

        window.location.href = '/riwayat';

    }catch(e: unknown){
        console.log(e);
    }
  };

  const [warningAlert, setWarningAlert] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [answerState, setAnswerState] = useState([{
    value: '',
    selected: ''
  }])


  return (
    <Container minW={"50vw"} maxW={"70vw"}>
      <Text textStyle={"xl"} my={5}>
        Soal Ke: {questionNumber + 1} dari {bahanSoal.length}
      </Text>
      <Box
        border={"1px solid white"}
        rounded={"lg"}
        shadow={"md"}
        display={"flex"}
        p={7}
        textAlign={"center"}
        justifyContent={"center"}
      >
        <Text textStyle="xl">
          {renderQuestion(bahanSoal[questionNumber].question)}
        </Text>
      </Box>

    {/* {JSON.stringify( answerState[questionNumber] && answerState[questionNumber].selected)}  */}
      <RadioCardRoot
        value={
          answerState[questionNumber] && answerState[questionNumber].selected
        }
        mt={5}
        border={"1px solid white"}
        rounded={"lg"}
        p={10}
        shadow={"md"}
        key={questionNumber}
      >
        <RadioCardLabel>
          <Text textStyle={"md"} mb={2}>
            Pilih Jawaban
          </Text>
        </RadioCardLabel>
          {(() => {
            if(warningAlert){
              return (
                <Alert status={"warning"} title="Harap pilih jawaban sebelum melanjutkan" />
              )
            }
          })()}
        {(() => {
          if (bahanSoal[questionNumber].type == "radio") {
            return (
              <SimpleGrid
                columns={{ xl: 4, lg: 4, md: 2, sm: 2, base: 1 }}
                gap={0.5}
              >
                <For each={bahanSoal[questionNumber].answers}>
                  {(answer, key) => (
                    <RadioCardItem
                      bg={warningAlert ? "red.600" : "blue.700"}
                      _hover={{ bg: "blue.600", shadow: "md" }}
                      _checked={{ shadow: "lg" }}
                      transition={"all 0.3s "}
                      label={radioTitle[key]}
                      description={answer}
                      key={key}
                      value={radioTitle[key]}
                      onClick={() => {
                        setWarningAlert(false);
                        setAnswerState({
                          ...answerState,
                          [questionNumber]: {
                            value: key.toString(),
                            selected: radioTitle[key],
                          },
                        });
                      }}
                    />
                  )}
                </For>
              </SimpleGrid>
            );
          }
        })()}
      </RadioCardRoot>
      <SimpleGrid
        columns={{ xl: 2, lg: 2, md: 2, sm: 2, base: 1 }}
        mt={7}
        mb={-4}
      >
        <Box display={"flex"} justifyContent={"start"}>
          {(() => {
            if (questionNumber > 0) {
              return (
                <Button
                  onClick={() => {
                    setQuestionNumber(questionNumber - 1);
                  }}
                >
                  Kembali
                </Button>
              );
            } else {
              return (
                <DialogRoot placement={"center"}>
                  <DialogTrigger asChild>
                    <Button>Kembali</Button>
                  </DialogTrigger>
                  <DialogContent bg={"blue.700"}>
                    <DialogHeader>
                      <DialogTitle>Konfirmasi</DialogTitle>
                    </DialogHeader>
                    <DialogBody>
                      <p>
                        Apakah anda yakin akan mengakhiri Latihan? Semua jawaban
                        yang anda simpan akan hilang !
                      </p>
                    </DialogBody>
                    <DialogFooter>
                      <DialogActionTrigger asChild>
                        <Button
                          variant="solid"
                          shadow={"sm"}
                          bgColor={"whiteAlpha.900"}
                        >
                          Cancel
                        </Button>
                      </DialogActionTrigger>
                      <Link href={"/"}>
                        <Button
                          bgColor={"blue.600"}
                          shadow={"sm"}
                          color={"white"}
                        >
                          Tetap Kembali
                        </Button>
                      </Link>
                    </DialogFooter>
                    <DialogCloseTrigger />
                  </DialogContent>
                </DialogRoot>
              );
            }
          })()}
        </Box>
        <Box display={"flex"} justifyContent={"end"}>
          {(() => {
            if (bahanSoal.length - 1 > questionNumber) {
              return (
                <Button
                  onClick={() => {
                    if(answerState[questionNumber] && answerState[questionNumber].value != ""){
                      setQuestionNumber(questionNumber + 1);
                    }else{
                      setWarningAlert(true);
                    }
                  }}
                >
                  Next
                </Button>
              );
            } else {
              if(answerState[questionNumber] && answerState[questionNumber].value != ""){
                return (
                  <DialogRoot placement={"center"}>
                    <DialogTrigger asChild>
                      <Button>Selesaikan</Button>
                    </DialogTrigger>
                    <DialogContent bg={"blue.700"}>
                      <DialogHeader>
                        <DialogTitle>Konfirmasi</DialogTitle>
                      </DialogHeader>
                      <DialogBody>
                        <p>Apakah anda yakin akan Menyelesaikan Latihan ?</p>
                      </DialogBody>
                      <DialogFooter>
                        <DialogActionTrigger asChild>
                          <Button
                            variant="solid"
                            shadow={"sm"}
                            bgColor={"whiteAlpha.900"}
                          >
                            Cancel
                          </Button>
                        </DialogActionTrigger>
                        <Button
                          bgColor={"blue.600"}
                          shadow={"sm"}
                          color={"white"}
                          onClick={() => {
                            validateAnswer();
                          }}
                        >
                          Selesaikan
                        </Button>
                      </DialogFooter>
                      <DialogCloseTrigger />
                    </DialogContent>
                  </DialogRoot>
                );
              }else{
                return (
                <Button
                onClick={() => {
                  if(answerState[questionNumber] && answerState[questionNumber].value == ""){
                    setWarningAlert(true);
                  }
                }}
              >
                Selesaikan
              </Button>

                )
              }
            }
          })()}
        </Box>
      </SimpleGrid>
    </Container>
  );
}

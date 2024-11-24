"use client";
import { Text, For, Box, Button } from "@chakra-ui/react";
import LatexRenderer from "@/components/LatexRenderer";
import { SimpleGrid } from "@chakra-ui/react";
import {
  RadioCardItem,
  RadioCardLabel,
  RadioCardRoot,
} from "@/components/ui/radio-card";
import { useState } from "react";
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
import { FaCheck } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { QuizContext } from "@/app/quiz-context";
import Image from "next/image";

type AnswerArray = {
  value: string;
  description: string;
  latex: boolean;
};

type Answer = {
  answerProps: Array<AnswerArray>;
  correctValue: string;
  nextMateri: string;
  nextPath: string;
  currentMateri: string;
};

export default function QuizComponent({
  answerProps,
  correctValue,
  nextMateri,
  nextPath,
  currentMateri,
}: Answer) {
  const [answer, setAnswer] = useState("");
  const [isCorrect, setCorrect] = useState(false);
  const router = useRouter();
  const { levelFinish, updateLevelFinish } = useContext(QuizContext);

  const updateLocalStorage = (materi: string) => {
    localStorage.removeItem("progress");
    const levelObj: { [key: string]: { open: boolean; finish: boolean } } = {
      ...levelFinish,
    };
    levelObj[materi].open = true;
    levelObj[currentMateri].finish = true;

    localStorage.setItem("progress", JSON.stringify(levelObj));
  };

  const quizImageAnswer: string = "/Images/mini-quiz";

  return (
    <>
      <RadioCardRoot
        colorPalette={"blue"}
        variant={"solid"}
        color={"white"}
        mt={8}
        orientation={"horizontal"}
      >
        <RadioCardLabel>Pilih Jawaban</RadioCardLabel>
        <SimpleGrid columns={{ xl: 4, lg: 4, md: 4, sm: 2, base: 1 }} gap={4}>
          <For each={answerProps}>
            {(item) => (
              <RadioCardItem
                icon={<Text textStyle={"xl"}>{item.value}.</Text>}
                indicator={false}
                border={"1px solid white"}
                label={
                  <Text textStyle={"xl"}>
                    {(() => {
                      if (item.latex) {
                        return (
                          <Text textStyle={"2xl"}>
                            <LatexRenderer
                              expression={item.description}
                              inline={true}
                            />
                          </Text>
                        );
                      } else {
                        return <Text textStyle={"xl"}>{item.description}</Text>;
                      }
                    })()}
                  </Text>
                }
                key={item.value}
                value={item.value}
                onClick={() => {
                  setAnswer(item.value);
                }}
              />
            )}
          </For>
        </SimpleGrid>
      </RadioCardRoot>

      {isCorrect ? (
        <Box mt={10}>
          <Text textStyle={"lg"} fontWeight={"bold"}>
            Penyelesaian :{" "}
          </Text>
          <Box overflow={"hidden"} mt={2} rounded={"xl"} width={"fit-content"}>
            {(() => {
              switch (currentMateri) {
                case "konsepDasar":
                  return (
                    <Image
                      src={`${quizImageAnswer}/konsepDasar.png`}
                      alt={"Penyelesaian Mini Quiz Konsep Dasar"}
                      width={500}
                      height={500}
                    />
                  );
                  break;
                case "sepihak":
                  return (
                    <Image
                    src={`${quizImageAnswer}/sepihak.png`}
                    alt={"Penyelesaian Mini Quiz Limit Sepihak"}
                    width={500}
                    height={500}
                  />
                  )
                  break;
                case "sukuBanyak":
                  return (
                    <Image
                    src={`${quizImageAnswer}/polinomial.png`}
                    alt={"Penyelesaian Mini Quiz Limit Suku Banyak / Polinomial"}
                    width={500}
                    height={500}
                  />
                  )
                  break;
                case "takHingga":
                  return (
                    <Image
                    src={`${quizImageAnswer}/takHingga.png`}
                    alt={"Penyelesaian Mini Quiz Limit Tak Hingga"}
                    width={500}
                    height={500}
                  />
                  )
                  break;
                case "trigonometri":
                  return (
                    <Image
                    src={`${quizImageAnswer}/trigonometri.png`}
                    alt={"Penyelesaian Mini Quiz Limit Trigonometri"}
                    width={500}
                    height={500}
                  />
                  )
                  break;
              }
            })()}
          </Box>
        </Box>
      ) : (
        <></>
      )}

      <Box my={10} display={"flex"}>
        <Box ms={"auto"}>
          <DialogRoot placement={"center"} motionPreset="slide-in-bottom">
            <DialogTrigger asChild>
              <Button
                colorPalette={"blue"}
                size={"md"}
                onClick={() => {
                  if (answer == correctValue) {
                    setCorrect(true);
                    updateLevelFinish(nextMateri[0], true);
                    updateLevelFinish(currentMateri[1], true);
                    updateLocalStorage(nextMateri);
                  }
                }}
              >
                <Text
                  textStyle={"lg"}
                  fontWeight={"bold"}
                  display={{
                    xl: "block",
                    lg: "block",
                    md: "block",
                    sm: "none",
                    base: "none",
                  }}
                >
                  Selesaikan{" "}
                </Text>
                <Box ms={2}>
                  <FaCheck />
                </Box>
              </Button>
            </DialogTrigger>

            {(() => {
              if (isCorrect) {
                return (
                  <DialogContent
                    colorPalette={"blue"}
                    bgColor={"white"}
                    color={"black"}
                  >
                    <DialogHeader>
                      <DialogTitle>Jawaban Benar</DialogTitle>
                    </DialogHeader>
                    <DialogBody>
                      <Text>
                        Selamat Jawaban anda Benar ! Anda dipersilakan lanjut ke
                        Materi Selanjutnya
                      </Text>
                    </DialogBody>
                    <DialogFooter>
                      <DialogActionTrigger asChild>
                        <Button
                          variant="outline"
                          color={"blue.900"}
                          _hover={{ background: "blue.900", color: "white" }}
                          // colorPalette={"black"}
                        >
                          Lihat Penyelesaian dulu
                        </Button>
                      </DialogActionTrigger>
                      <Button
                        onClick={() => {
                          router.push(nextPath);
                        }}
                      >
                        Lanjutkan Materi
                      </Button>
                    </DialogFooter>
                    <DialogCloseTrigger />
                  </DialogContent>
                );
              } else {
                return (
                  <DialogContent
                    colorPalette={"blue"}
                    bgColor={"white"}
                    color={"black"}
                  >
                    <DialogHeader>
                      <DialogTitle>Jawaban Kurang Tepat</DialogTitle>
                    </DialogHeader>
                    <DialogBody>
                      <Text>
                        Yahh jawaban kamu kurang tepat, Coba lagi Yuk !
                      </Text>
                    </DialogBody>
                    <DialogFooter>
                      <DialogActionTrigger asChild>
                        <Button color={"white"}>Coba Lagi</Button>
                      </DialogActionTrigger>
                    </DialogFooter>
                    <DialogCloseTrigger />
                  </DialogContent>
                );
              }
            })()}
          </DialogRoot>
        </Box>
      </Box>
    </>
  );
}

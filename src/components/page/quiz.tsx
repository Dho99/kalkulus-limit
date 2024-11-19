"use client";
import { Text, For, Box, Container, Button } from "@chakra-ui/react";
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

type AnswerArray = {
  value: string;
  description: string;
  latex: boolean;
};

type Answer = {
  answerProps: Array<AnswerArray>;
  correctValue: string;
  nextMateri: string;
  nextPath: string
};

export default function QuizComponent({ answerProps, correctValue, nextMateri, nextPath }: Answer) {
  const [answer, setAnswer] = useState("");
  const [isCorrect, setCorrect] = useState(false);
  const router = useRouter();
  const { levelFinish, updateLevelFinish } = useContext(QuizContext);

  const updateLocalStorage = (materi :string) => {
    localStorage.removeItem("progress");
    const levelObj: { [key: string]: boolean } = {...levelFinish};
    levelObj[materi] = true;

    localStorage.setItem("progress", JSON.stringify(levelObj));
    
  }

  return (
    <>
      <RadioCardRoot
        colorPalette={"yellow"}
        variant={"solid"}
        my={5}
        orientation={{lg: "vertical", md: "vertical", sm: "horizontal", base: "horizontal"}}
      >
        <RadioCardLabel>Pilih Jawaban</RadioCardLabel>
        <SimpleGrid columns={{xl: 4, lg: 4, md: 4, sm: 2, base: 1}}>
          <For each={answerProps}>
            {(item, key) => (
              <RadioCardItem
                icon={<Text textStyle={"xl"}>{item.value}.</Text>}
                indicator={false}
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

      <Box my={10} display={"flex"}>
        <Box ms={"auto"}>
          <DialogRoot placement={"center"} motionPreset="slide-in-bottom">
            <DialogTrigger asChild>
              <Button colorPalette={"yellow"} size={"md"}>
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
                  onClick={() => {
                    setCorrect(answer == correctValue ? true : false);
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
                    colorPalette={"yellow"}
                    bgColor={"white"}
                    color={"black"}
                  >
                    <DialogHeader>
                      <DialogTitle>Jawaban Benar</DialogTitle>
                    </DialogHeader>
                    <DialogBody>
                      <Text>Selamat Jawaban anda Benar ! Anda dipersilakan lanjut ke Materi Selanjutnya</Text>
                    </DialogBody>
                    <DialogFooter>
                      <Button
                        onClick={() => {
                          updateLevelFinish(nextMateri, true);
                          updateLocalStorage(nextMateri);
                          router.push(nextPath);
                        }}
                      >
                        Horee
                      </Button>
                    </DialogFooter>
                    <DialogCloseTrigger />
                  </DialogContent>
                );
              } else {
                return (
                  <DialogContent
                    colorPalette={"yellow"}
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
                        <Button
                          color={"black"}
                        >
                          Coba Lagi
                        </Button>
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

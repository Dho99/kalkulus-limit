"use client";

import { useRouter } from "next/navigation";
import { Box, Text, Flex, For } from "@chakra-ui/react";
import { Button } from "@/components/ui/button";
import QuizProvider, { QuizContext } from "@/app/quiz-context";
import { useContext } from "react";
import Dialog from "./dialog";

export default function Cards() {
  const router = useRouter();
  const level = useContext(QuizContext);

  return (
    <>
      <Box
        mt={{ lg: "20%", md: "20%", sm: "40%", base: "50%" }}
        minH={"svh"}
        w="svw"
      >
        <Text
          textStyle={{ lg: "5xl", md: "4xl", sm: "3xl", base: "3xl" }}
          textAlign={{ base: "center" }}
          fontWeight={"bold"}
          display={"flex"}
          mb={8}
          justifyContent={"center"}
          mx="auto"
        >
          Kumpulan Materi Fungsi Limit Kalkulus
        </Text>
        <Flex gap={4} justifyContent={"center"}>
          <Box flexBasis={"90%"}>
            <QuizProvider>
              <Flex gap={7} flexDirection={"column"}>
                <For
                  each={[
                    {
                      cardTitle: "Konsep Dasar Limit Fungsi Aljabar",
                      align: "start",
                      cardDescription:
                        "Disini kita akan belajar dasar - dasar mengenai Fungsi limit sebelum ke tingkat selanjutnya",
                      level: level.konsepDasar,
                      endPoint: "/materi/konsep-dasar-limit-fungsi-aljabar",
                    },
                    {
                      cardTitle: "Limit Suku Banyak",
                      align: "end",
                      cardDescription:
                        "Sudah menguasai Dasar ? Ayo Lanjutkan ke materi ini ",
                      level: level.sukuBanyak,
                      endPoint: "/materi/limit-suku-banyak",
                    },
                    {
                      cardTitle: "Limit Fungsi Trigonometri",
                      align: "start",
                      cardDescription:
                        "Wow sudah sampai sini, Hebat ! Yuk, lanjut ke materi ini",
                      level: level.trigonometri,
                      endPoint: "/materi/limit-fungsi-trigonometri",
                    },
                  ]}
                >
                  {(item, index) => (
                    <Box
                    key={index}
                      display={"flex"}
                      maxW="dvw"
                      minH="35vh"
                      h="fit-content"
                      shadow={"sm"}
                      py={10}
                      px={{xl: "60px", lg: "60px", md: "40px", sm: "40px", base: "30px"}}
                      rounded={"xl"}
                      justifyContent={item.align}
                      >
                      {/* {JSON.stringify(item)} */}
                      <Flex
                        my={"auto"}
                        alignItems={item.align}
                        flexDir={"column"}
                      >
                        <Text textStyle={"4xl"} fontWeight={"bold"}>
                          {item.cardTitle}
                        </Text>
                        <Text>{item.cardDescription}</Text>
                        {(() => {
                          if (item.level) {
                            return (
                              <Button
                                mt={7}
                                maxW={"170px"}
                                colorPalette={"yellow"}
                                size={{
                                  lg: "xl",
                                  md: "md",
                                  sm: "sm",
                                  base: "sm",
                                }}
                                onClick={() => {
                                  router.push(item.endPoint);
                                }}
                              >
                                <Text fontWeight={"bold"}>Mulai Belajar</Text>
                              </Button>
                            );
                          } else {
                            return (
                              <Box mt={7}>
                                <Dialog
                                  body={
                                    "Selesaikan Materi sebelum ini terlebih dahulu, Yuk"
                                  }
                                  title={"Peringatan"}
                                  buttonText={"Mulai Belajar"}
                                  buttonColor="yellow"
                                  dialogColor={"yellow"}
                                  size={{
                                    lg: "xl",
                                    md: "md",
                                    sm: "sm",
                                    base: "sm",
                                  }}
                                  maxW={"170px"}
                                  showCancelButton={false}
                                ></Dialog>
                              </Box>
                            );
                          }
                        })()}
                      </Flex>
                    </Box>
                  )}
                </For>
              </Flex>
         
            </QuizProvider>
          </Box>
        </Flex>
      </Box>
    </>
  );
}

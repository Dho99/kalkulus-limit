"use client";

import { useRouter } from "next/navigation";
import { Box, Text, Flex } from "@chakra-ui/react";
import { Button } from "@/components/ui/button";
import {
  TimelineConnector,
  TimelineContent,
  TimelineItem,
  TimelineRoot,
  TimelineTitle,
} from "@/components/ui/timeline";
import QuizProvider, { QuizContext } from "@/app/quiz-context";
import { useContext } from "react";
import Dialog from "./dialog";

export default function Cards() {
  const router = useRouter();
  const level = useContext(QuizContext);

  return (
    <>
      <Box mt={{ lg: "20%", md: "20%", sm: "40%", base: "50%" }} minH={"svh"}>
        <Text
          textStyle={{ lg: "5xl", md: "4xl", sm: "3xl", base: "3xl" }}
          textAlign={{ base: "center" }}
          fontWeight={"bold"}
          display={"flex"}
          mb={"60px"}
          justifyContent={"center"}
        >
          Kumpulan Materi Fungsi Limit Kalkulus
        </Text>
        <Flex gap={4} justifyContent={"center"}>
          <Box flexBasis={"50%"}>
            <QuizProvider>
              <TimelineRoot>
                <TimelineItem>
                  <TimelineConnector bg={"black"} mt={3}></TimelineConnector>
                  <TimelineContent>
                    <TimelineTitle>
                      <Text
                        textStyle={{
                          lg: "4xl",
                          md: "3xl",
                          sm: "2xl",
                          base: "2xl",
                        }}
                        fontWeight={"bold"}
                      >
                        Konsep Dasar Limit Fungsi Aljabar
                      </Text>
                    </TimelineTitle>
                    <Text
                      textStyle={{ lg: "xl", md: "lg", sm: "md", base: "md" }}
                      mt={3}
                    >
                      Pelajari dasar - dasar mengenai Konsep Dasar Limit
                      terlebih dahulu sebelum berlanjut ke langkah berikutnya
                    </Text>
                    <Button
                      // disabled={!level.konsepDasar}
                      mt={4}
                      maxW={"170px"}
                      colorPalette={"yellow"}
                      size={{ lg: "xl", md: "md", sm: "sm", base: "sm" }}
                      onClick={() => {
                        router.push(
                          "/materi/konsep-dasar-limit-fungsi-aljabar"
                        );
                      }}
                    >
                      <Text fontWeight={"bold"}>Mulai Belajar</Text>
                    </Button>
                  </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                  <TimelineConnector
                    bg={"black"}
                    mt={"65px"}
                  ></TimelineConnector>
                  <TimelineContent mt={"50px"}>
                    <TimelineTitle>
                      <Text
                        textStyle={{
                          lg: "4xl",
                          md: "3xl",
                          sm: "2xl",
                          base: "2xl",
                        }}
                        fontWeight={"bold"}
                      >
                        Limit Suku Banyak
                      </Text>
                    </TimelineTitle>
                    <Text
                      textStyle={{ lg: "xl", md: "lg", sm: "md", base: "md" }}
                      mt={3}
                    >
                      Sudah menguasai materi sebelumnya? Hebat! Mari kita lanjut
                      ke materi selanjutnya !
                    </Text>
                    {(() => {
                      if (level.trigonometri) {
                        return (
                          <Button
                            mt={4}
                            maxW={"170px"}
                            colorPalette={"yellow"}
                            size={{ lg: "xl", md: "md", sm: "sm", base: "sm" }}
                            onClick={() => {
                              router.push("/materi/limit-suku-banyak");
                            }}
                          >
                            <Text fontWeight={"bold"}>Mulai Belajar</Text>
                          </Button>
                        );
                      } else {
                        return (
                          <Box mt={4}>
                            <Dialog
                              body={
                                "Selesaikan Materi sebelum ini terlebih dahulu, Yuk"
                              }
                              title={"Peringatan"}
                              buttonText={"Mulai Belajar"}
                              buttonColor="yellow"
                              dialogColor={"yellow"}
                              size={{ lg: "xl", md: "md", sm: "sm", base: "sm" }}
                              maxW={"170px"}
                              showCancelButton={false}
                            ></Dialog>

                          </Box>
                        );
                      }
                    })()}
                  </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                  <TimelineConnector
                    bg={"black"}
                    mt={"65px"}
                  ></TimelineConnector>
                  <TimelineContent mt={"50px"}>
                    <TimelineTitle>
                      <Text
                        textStyle={{
                          lg: "4xl",
                          md: "3xl",
                          sm: "2xl",
                          base: "2xl",
                        }}
                        fontWeight={"bold"}
                      >
                        Limit Fungsi Trigonometri
                      </Text>
                    </TimelineTitle>
                    <Text
                      textStyle={{ lg: "xl", md: "lg", sm: "md", base: "md" }}
                      mt={3}
                    >
                      Sudah menguasai materi sebelumnya? Hebat! Mari kita lanjut
                      ke materi selanjutnya !
                    </Text>
                    {(() => {
                      if (level.trigonometri) {
                        return (
                          <Button
                            mt={4}
                            maxW={"170px"}
                            colorPalette={"yellow"}
                            size={{ lg: "xl", md: "md", sm: "sm", base: "sm" }}
                            onClick={() => {
                              router.push("/materi/limit-fungsi-trigonometri");
                            }}
                          >
                            <Text fontWeight={"bold"}>Mulai Belajar</Text>
                          </Button>
                        );
                      } else {
                        return (
                          <Box mt={4}>
                            <Dialog
                              body={
                                "Selesaikan Materi sebelum ini terlebih dahulu, Yuk"
                              }
                              title={"Peringatan"}
                              buttonText={"Mulai Belajar"}
                              buttonColor="yellow"
                              dialogColor={"yellow"}
                              size={{ lg: "xl", md: "md", sm: "sm", base: "sm" }}
                              maxW={"170px"}
                              showCancelButton={false}
                            ></Dialog>

                          </Box>
                        );
                      }
                    })()}
                  </TimelineContent>
                </TimelineItem>

                <TimelineItem display={"none"} />
              </TimelineRoot>
            </QuizProvider>
          </Box>
        </Flex>
      </Box>
    </>
  );
}

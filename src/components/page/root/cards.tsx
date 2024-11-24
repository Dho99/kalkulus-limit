"use client";

import { useRouter } from "next/navigation";
import { Box, Text, Flex, For, Container, SimpleGrid } from "@chakra-ui/react";
import { Button } from "@/components/ui/button";
import QuizProvider, { QuizContext } from "@/app/quiz-context";
import Image from "next/image";
import { useContext } from "react";
import Dialog from "./dialog";

export default function Cards() {
  const router = useRouter();
  const level = useContext(QuizContext);

  return (
    <>
      <Box
        mt={{ lg: "20%", md: "20%", sm: "0%", base: "0%" }}
        minH={"svh"}
        w="svw"
        rounded={"lg"}
        id="materi"
      >
          <Text
            textStyle={{ lg: "5xl", md: "4xl", sm: "3xl", base: "3xl" }}
            textAlign={{ base: "center" }}
            fontWeight={"bold"}
            display={"flex"}
            mb={8}
            justifyContent={"center"}
            mx="auto"
            color="white"
          >
            Kumpulan Materi Fungsi Limit Kalkulus
          </Text>
          <Flex gap={4} justifyContent={"center"}>
            <Box flexBasis={"100%"} m="auto" justifyContent={"center"}>
              <QuizProvider>
                <SimpleGrid
                  columns={{ xl: 1, lg: 1, md: 2, sm: 1, base: 1 }}
                  mx={{ xl: 0, lg: 0, md: 0, sm: 1, base: 1 }}
                  gap={4}
                  flexDirection={"column"}
                  justifyItems={"center"}
                >
                  <For
                    each={[
                      {
                        cardTitle: "Konsep Dasar Limit Fungsi Aljabar",
                        align: "start",
                        cardDescription:
                          "Disini kita akan belajar dasar - dasar mengenai Fungsi limit sebelum ke tingkat selanjutnya",
                        level: level.levelFinish.konsepDasar,
                        endPoint: "/materi/konsep-dasar-limit-fungsi-aljabar",
                        imagePath: "/Images/assetsMateri/konsepDasar.png",
                      },
                      {
                        cardTitle: "Limit Sepihak",
                        align: "start",
                        cardDescription:
                          "Disini kita akan belajar Mengenai Limit sepihak atau Limit Kanan dan Kiri",
                        level: level.levelFinish.sepihak,
                        endPoint: "/materi/limit-sepihak",
                        imagePath: "/Images/cardImage/oneSided.png",
                      },
                      {
                        cardTitle: "Limit Suku Banyak",
                        align: "start",
                        cardDescription:
                          "Sudah menguasai Materi Sebelumnya ? Ayo Lanjutkan ke materi ini ",
                        level: level.levelFinish.sukuBanyak,
                        endPoint: "/materi/limit-suku-banyak",
                        imagePath: "/Images/cardImage/polynomial.png",
                      },
                      {
                        cardTitle: "Limit Tak Hingga",
                        align: "start",
                        cardDescription:
                          "Tinggal beberapa langkah lagi untuk menyelesaikan belajar Limit ini, Ayo lanjut !",
                        level: level.levelFinish.takHingga,
                        endPoint: "/materi/limit-tak-hingga",
                        imagePath: "/Images/cardImage/takHingga.png",
                      },
                      {
                        cardTitle: "Limit Fungsi Trigonometri",
                        align: "start",
                        cardDescription:
                          "Wow sudah sampai sini, Hebat ! Yuk, lanjut ke materi ini",
                        level: level.levelFinish.trigonometri,
                        endPoint: "/materi/limit-fungsi-trigonometri",
                        // imagePath: "/Images/assetsMateri/trigonometri.png",
                        imagePath: "/Images/cardImage/trigonometri.png",
                      },
                    ]}
                  >
                    {(item, index) => (
                      <Box
                        key={index}
                        display={"flex"}
                        maxW="dvw"
                        bg={"blue.700"}
                        h="full"
                        shadow={"md"}
                        py={8}
                        px={{
                          xl: "60px",
                          lg: "60px",
                          md: "40px",
                          sm: "40px",
                          base: "30px",
                        }}
                        rounded={"xl"}
                        justifyContent={item.align}
                      >
                        <Flex
                          textAlign={item.align}
                          w="full"
                          alignItems={"center"}
                          flexDir={{
                            xl: "row",
                            lg: "row",
                            md: "column",
                            sm: "column",
                            base: "column",
                          }}
                          color="white"
                          gapX={10}
                        >
                          <Box
                            flex="1"
                            order={{ xl: 1, lg: 1, md: 2, sm: 2, base: 2 }}
                            mt={{ xl: 0, lg: 0, md: 9, sm: 9, base: 9 }}
                          >
                            <Text textStyle={"4xl"} fontWeight={"bold"}>
                              {item.cardTitle}
                            </Text>
                            <Text>{item.cardDescription}</Text>
                            {(() => {
                              if (item.level) {
                                if (!item.level.open) {
                                  return (
                                    <Box
                                      mt={7}
                                      display={"flex"}
                                      justifyContent={
                                        item.align == "end" ? "end" : ""
                                      }
                                    >
                                      <Dialog
                                        body={
                                          "Selesaikan Materi sebelumnya terlebih dahulu, Yuk"
                                        }
                                        title={"Peringatan"}
                                        buttonText={"Terkunci"}
                                        buttonColor="blue"
                                        color=""
                                        dialogColor={"blue"}
                                        variant={"solid"}
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
                                } else {
                                  return (
                                    <Button
                                      mt={7}
                                      maxW={"170px"}
                                      // colorPalette={"blue"}
                                      bg={"blue.300"}
                                      size={{
                                        lg: "xl",
                                        md: "md",
                                        sm: "sm",
                                        base: "sm",
                                      }}
                                      shadow={"sm"}
                                      justifyContent={
                                        item.align == "end" ? "end" : ""
                                      }
                                      onClick={() => {
                                        router.push(item.endPoint);
                                      }}
                                    >
                                      <Text fontWeight={"bold"}>
                                        {item.level.finish && item.level.open
                                          ? "Selesai"
                                          : item.level.open
                                          ? "Mulai Belajar"
                                          : "Terkunci"}
                                      </Text>
                                    </Button>
                                  );
                                }
                              }
                            })()}
                          </Box>
                          {item.imagePath ? (
                            <Flex
                              flex="1"
                              justifyContent="flex-end"
                              alignItems="center"
                              maxH={"250px"}
                              // maxW={"500px"}
                              overflow={"hidden"}
                              rounded={"xl"}
                              order={{ xl: 2, lg: 2, md: 1, sm: 1, base: 1 }}
                              shadow={"md"}
                              opacity={0.9}
                            >
                              <Image
                                src={item.imagePath}
                                width={"700"}
                                height={"700"}
                                alt={item.cardTitle}
                              />
                            </Flex>
                          ) : null}
                        </Flex>
                      </Box>
                    )}
                  </For>
                </SimpleGrid>
              </QuizProvider>
            </Box>
          </Flex>
        {/* </Container> */}
      </Box>
    </>
  );
}

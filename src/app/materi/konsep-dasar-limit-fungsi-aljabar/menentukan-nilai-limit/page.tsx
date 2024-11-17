import { Container, Flex, Box, Text, SimpleGrid } from "@chakra-ui/react";
import Sidenav from "@/components/page/materi/sidenav";
import LatexRenderer from "@/components/LatexRenderer";
import { metadata } from "@/app/layout";
import NextPrevButton from "@/components/page/nextPrevButton";

export default function Page() {
  metadata.title = "Learn Limit | Menentukan Nilai Limit Fungsi";
  return (
    <>
      <Container
        mt={{ xl: "5%", lg: "7%", md: "8%", sm: "8%", base: "14%" }}
        zIndex={2}
        fluid
      >
        <Box
          direction={"row"}
          gap={10}
          maxW={"dvw"}
          display={{
            xl: "flex",
            lg: "flex",
            md: "flex",
            sm: "flex",
            base: "block",
          }}
        >
          <Sidenav content={"Konsep Dasar Limit"} />
          <Box flexBasis={"100%"}>
            <Text
              textStyle={"5xl"}
              color={"black"}
              justifyContent={"center"}
              display={"flex"}
              fontWeight={"bold"}
              mb={"3%"}
              textAlign={"center"}
              w="full"
              ms={3}
            >
              Menentukan Nilai Limit Fungsi
            </Text>
            <Container>
              <Box>
                <Text textStyle={"2xl"} fontWeight={"bold"} mb={2}>
                  A. Pengertian
                </Text>
                <Text textStyle={"lg"}>
                  <Text>
                    Mencari atau menentukan nilai limit fungsi adalah proses
                    untuk menemukan nilai yang didekati oleh suatu fungsi 𝑓 ( 𝑥
                    ) ketika variabel 𝑥 mendekati nilai tertentu, tetapi tidak
                    harus persis pada nilai tersebut. Limit membantu kita
                    memahami perilaku suatu fungsi saat mendekati titik
                    tertentu, terutama ketika fungsi tersebut tidak
                    didefinisikan pada titik tersebut atau saat titik itu
                    menghasilkan bentuk tak tentu.
                  </Text>
                  <Box my={2}>
                    <Text>
                      Misalnya, limit fungsi 𝑓 ( 𝑥 ) saat 𝑥 mendekati 𝑎 ditulis
                      sebagai:{" "}
                      <LatexRenderer expression={"\\lim_{x \\to a} f(x)"} />
                    </Text>
                  </Box>
                </Text>
              </Box>

              <Box>
                <Text textStyle={"2xl"} fontWeight={"bold"} mb={2}>
                  B. Contoh
                </Text>
                <Text textStyle={"lg"}>
                  <Box
                    alignItems={"center"}
                    display={{ lg: "flex", sm: "block", base: "block" }}
                  >
                    Untuk menentukan nilai{" "}
                    <Flex
                      mx={{ lg: 3, sm: 0, base: 0 }}
                      my={{ lg: 0, sm: 2, base: 2 }}
                    >
                      <LatexRenderer
                        expression={"\\lim_{x \\to a} f(x)"}
                        inline={true}
                      />
                    </Flex>
                    langkah-langkahnya sebagai berikut:
                  </Box>
                  <Box display={{ lg: "flex", sm: "block" }}>
                    <Box mx={0} mt={1} display={"flex"} alignItems={"center"}>
                      Substitusikan nilai a, jika{" "}
                      <Box mx={3} mt={{ lg: 0, sm: 1, base: 5 }}>
                        <LatexRenderer expression={"f(a)"} inline={true} />
                      </Box>
                      , maka{" "}
                    </Box>
                    <Box
                      display={"flex"}
                      alignItems={"center"}
                      mx={{ lg: 2, base: 0 }}
                      mt={2}
                    >
                      <LatexRenderer
                        expression={"\\lim_{x \\to a} f(x) = f(a)"}
                        inline={true}
                      />
                    </Box>
                  </Box>

                  <Box my={3}>
                    <Text fontWeight={"bold"}>Contoh Sederhana : </Text>
                    <LatexRenderer
                      expression={"f(x) = \\lim_{x \\to 2}(3x + 1)"}
                    />
                    <Text my={2}>
                      Subtitusikan 𝑥 dengan angka 2, sehingga Rumus akan menjadi
                      :{" "}
                    </Text>
                    <LatexRenderer
                      expression={"f(2) = \\lim_{x \\to 2}(3(2) + 1) = 7"}
                    />
                  </Box>

                  <Box my={2}>
                    <Text fontWeight={"bold"}>Contoh Lain : </Text>
                    <LatexRenderer
                      expression={
                        "f(2) = \\lim_{x \\to 2}\\frac{2x + 4}{2x} = \\frac{2(2) + 4}{2(2)} = \\frac{8}{2} = 2"
                      }
                    />
                  </Box>

                  <Box my={2}>
                    <Text>
                      <Box
                        display={{
                          xl: "flex",
                          lg: "flex",
                          md: "flex",
                          sm: "block",
                          base: "block",
                        }}
                        alignItems={"center"}
                      >
                        <Box
                          my={2}
                          me={2}
                          display={"flex"}
                          alignItems={"center"}
                        >
                          Jika
                          <Box mx={1}>
                            <LatexRenderer expression={"f(a)"} inline={true} />{" "}
                          </Box>
                        </Box>
                        tidak terdefinisi,
                        <Box
                          me={2}
                          my={2}
                          ms={{ xl: 2, lg: 2, md: 2, sm: 0, base: 0 }}
                        >
                          <Box display={"inline-flex"} alignItems={"center"}>
                            maka{" "}
                            <Box mx={2}>
                              <LatexRenderer
                                expression={"\\lim_{x \\to a} f(x)"}
                                inline={true}
                              />{" "}
                            </Box>
                          </Box>
                          Tidak ada
                        </Box>
                      </Box>
                    </Text>
                    <Text fontWeight={"bold"} mt={3}>
                      Contoh :{" "}
                    </Text>
                    <Text>
                      <LatexRenderer
                        expression={
                          "\\lim_{x \\to 1}\\frac{3x + 4}{2x - 2} = \\frac{3(1) + 4}{2(1) - 2} = \\frac{7}{0} = \\infty"
                        }
                      />
                      <Box>
                        <Box display={{ lg: "flex", sm: "block" }}>
                          Dalam contoh ini, kita mencoba mencari nilai limit
                          dari fungsi{" "}
                          <Box mx={{ lg: 2, sm: 0 }} my={2}>
                            <LatexRenderer
                              expression={"\\lim_{x \\to 1}\\frac{3x+4}{2x-2}"}
                              inline={true}
                            />{" "}
                          </Box>
                        </Box>
                        saat nilai x semakin mendekati 1. Namun, jika kita
                        langsung substitusikan x = 1 ke dalam fungsi, kita akan
                        <Box display={"flex"} mb={3}>
                          mendapatkan bentuk tak tentu{" "}
                          <Box my={2} mx={2}>
                            <LatexRenderer
                              expression={"\\frac{7}{0}"}
                              inline={true}
                            />
                          </Box>
                        </Box>
                        Bentuk tak tentu ini mengindikasikan bahwa fungsi tidak
                        terdefinisi di titik x = 1.
                      </Box>

                      <Box my={0}>
                        <Box display={{ lg: "flex", sm: "block" }}>
                          Jika{" "}
                          <Box
                            m={{ lg: 2, sm: 0 }}
                            my={{ lg: 2, sm: 2 }}
                            display="block"
                          >
                            <LatexRenderer
                              expression={"f(a) = \\frac{0}{0}"}
                              inline={true}
                            />
                          </Box>
                          Maka kita memerlukan strategi penyelesaian dengan cara
                          :{" "}
                        </Box>
                        <Box my="4">
                          <Text fontWeight={"bold"} textStyle={"xl"} mb={1}>
                            1. Pemfaktoran
                          </Text>
                          <Text>
                            Pemfaktoran dalam Fungsi Limit Pemfaktoran adalah
                            teknik aljabar yang digunakan untuk mengubah suatu
                            ekspresi menjadi perkalian dari faktor-faktor yang
                            lebih sederhana. Dalam konteks limit fungsi,
                            pemfaktoran seringkali digunakan sebagai salah satu
                            metode untuk menentukan nilai limit suatu fungsi
                            ketika substitusi langsung menghasilkan bentuk tak
                            <Box display={"flex"} alignItems={"center"}>
                              tentu (seperti{" "}
                              <Box mx={2}>
                                <LatexRenderer
                                  expression={"\\frac{0}{0}"}
                                  inline={true}
                                />{" "}
                              </Box>
                              atau{" "}
                              <Box mx={2}>
                                <LatexRenderer
                                  expression={"\\frac{\\infty}{\\infty}"}
                                  inline={true}
                                />
                              </Box>
                              )
                            </Box>
                          </Text>
                        </Box>
                        <Box my="4">
                          <Text fontWeight={"bold"} textStyle={"xl"} mb={1}>
                            2. Mengalikan dengan bentuk sekawan
                          </Text>
                          <Box>
                            Strategi ini biasanya digunakan untuk menyelesaikan
                            limit yang mengandung bentuk tak tentu, khususnya
                            yang melibatkan akar kuadrat (radikal) pada
                            pembilang atau penyebutnya. Dengan mengalikan dengan
                            bentuk sekawan, kita menghilangkan akar kuadrat,
                            sehingga kita bisa menemukan limit lebih mudah.
                            <Text fontWeight={"bold"} mt={4} mb={2}>
                              Berikut adalah Langkah - Langkahnya :{" "}
                            </Text>
                            <Flex direction={"column"} gap={4}>
                              <Box display={{ xl: "flex", md: "block" }}>
                                1. Identifikasi bentuk yang menyebabkan limit
                                menjadi tak tentu (misalnya,{" "}
                                <Box display={"inline-flex"} ms={1}>
                                  <Text mx={2} my={{ base: 2 }}>
                                    <LatexRenderer
                                      expression={"\\frac{0}{0}"}
                                      inline={true}
                                    />
                                  </Text>{" "}
                                  atau{" "}
                                  <Text mx={2} my={{ base: 2 }}>
                                    <LatexRenderer
                                      expression={"\\infty - \\infty"}
                                      inline={true}
                                    />
                                  </Text>
                                  ).
                                </Box>
                              </Box>
                              <Box>
                                2. Kalikan pembilang dan penyebut dengan bentuk
                                sekawan.{" "}
                                <Container
                                  as="ul"
                                  ms={2}
                                  listStyleType="circle"
                                >
                                  <Box as="li">
                                    Jika terdapat expresi seperti{" "}
                                    <Box
                                      display={{
                                        xl: "flex",
                                        lg: "flex",
                                        md: "flex",
                                        sm: "block",
                                        base: "block",
                                      }}
                                      alignItems={"center"}
                                      mt={2}
                                      gap={3}
                                    >
                                      <Text mx={{ lg: 2 }}>
                                        <LatexRenderer
                                          expression={"\\sqrt{a} - \\sqrt{b}"}
                                          inline={true}
                                        />
                                      </Text>
                                      , Bentuk sekawannya adalah{" "}
                                      <Text mx={2}>
                                        <LatexRenderer
                                          expression={"\\sqrt{a}+\\sqrt{b}"}
                                          inline={true}
                                        />
                                      </Text>
                                    </Box>
                                  </Box>
                                </Container>
                              </Box>
                              <Box>
                                3. Sederhanakan hasil perkalian, khususnya pada
                                bagian yang mengandung akar kuadrat
                              </Box>
                              <Box>
                                4. Hitung Limitnya setelah bentuk tak tentu
                                hilang
                              </Box>
                            </Flex>
                          </Box>
                        </Box>

                        <Box my={4}>
                          <Text textStyle={"lg"} fontWeight={"bold"}>
                            Contoh :{" "}
                          </Text>
                          <Container
                            as="ul"
                            listStyle={"number"}
                            my={4}
                            ms={-1}
                            display={"flex"}
                            flexDirection={"column"}
                            gap={6}
                          >
                            <Text as="li">
                              <Box>
                                <LatexRenderer
                                  expression={
                                    "\\lim_{x\\to 0}\\frac{x^2 + 3x}{x} = \\lim_{x \\to 0}\\frac{x(x+3)}{x} = \\lim_{x \\to 0}x+3=0+3 = 3"
                                  }
                                  inline={true}
                                />
                              </Box>
                            </Text>
                            <Text as="li">
                              <Box>
                                <LatexRenderer
                                  expression={
                                    "\\lim_{x \\to 2}\\frac{(x-3)(x-2)}{(x-2)(x+1)} = \\lim_{x \\to 2} \\frac{x-3}{x+1} = \\frac{2-3}{2+1} = -\\frac{1}{3}"
                                  }
                                  inline={true}
                                />
                              </Box>
                            </Text>
                            <Text as="li">
                              <LatexRenderer
                                expression={
                                  "\\lim_{x\\to3}\\frac{2-\\sqrt{x+1}}{x-3} = \\frac{2-\\sqrt{3+1}}{3-3} = \\frac{0}{0}"
                                }
                                inline={true}
                              />
                            </Text>
                            <Text as="li">
                              <SimpleGrid
                                columns={{ lg: 2, md: 2, sm: 1, base: 1 }}
                                minChildWidth="200px"
                                display={"flex"}
                                flexDirection={{
                                  lg: "row",
                                  md: "row",
                                  sm: "column",
                                  base: "column",
                                }}
                                gapY={7}
                                gapX={2}
                              >
                                <Box>
                                  <LatexRenderer
                                    expression={
                                      "\\lim_{x \\to 2}\\frac{2-\\sqrt{x+1}}{x-3}\\times\\frac{2+\\sqrt{x+1}}{2+\\sqrt{x+1}} = "
                                    }
                                    inline={true}
                                  />
                                </Box>
                                <Box>
                                  <Flex direction={"column"} gapY={7}>
                                    <LatexRenderer
                                      expression={
                                        "\\lim_{x \\to 3}\\frac{2^2+\\sqrt{x+1}}{(x-3)(2+\\sqrt{x+1})}"
                                      }
                                      inline={true}
                                    />
                                    <LatexRenderer
                                      expression={
                                        "\\lim_{x \\to 3}\\frac{2^2+\\sqrt{x+1}}{(x-3)(2+\\sqrt{x+1})}"
                                      }
                                      inline={true}
                                    />
                                    <LatexRenderer
                                      expression={
                                        "\\lim_{x \\to 3}\\frac{2^2+\\sqrt{x+1}}{(x-3)(2+\\sqrt{x+1})}"
                                      }
                                      inline={true}
                                    />
                                  </Flex>
                                </Box>
                              </SimpleGrid>
                            </Text>
                            <Text as="li">
                              <SimpleGrid
                                columns={{ lg: 2, md: 2, sm: 1, base: 1 }}
                                minChildWidth="200px"
                                display={"flex"}
                                flexDirection={{
                                  lg: "row",
                                  md: "row",
                                  sm: "column",
                                  base: "column",
                                }}
                                gapY={7}
                                gapX={2}
                              >
                                <Box>
                                  <LatexRenderer
                                    expression={
                                      "\\lim_{x\\to\\frac{3}{2}}\\frac{4x^28x+3}{4x^2-10x+6}"
                                    }
                                    inline={true}
                                  />
                                </Box>
                                <Box>
                                  <Flex direction={"column"} gapY={7}>
                                    <LatexRenderer
                                      expression={
                                        "= \\lim_{x\\to\\frac{3}{2}}\\frac{(2x-1)(2x-3)}{(2x-2)(2z-3)}"
                                      }
                                      inline={true}
                                    />
                                    <LatexRenderer
                                      expression={
                                        "= \\lim_{x\\to\\frac{3}{2}}\\frac{2x-1}{2x-2}"
                                      }
                                      inline={true}
                                    />
                                    <LatexRenderer
                                      expression={
                                        "= \\frac{2\\times\\frac{3}{2}-1}{2\\times\\frac{3}{2}-2}"
                                      }
                                      inline={true}
                                    />

                                    <LatexRenderer
                                      expression={"= \\frac{3-1}{3-2}"}
                                      inline={true}
                                    />
                                    <LatexRenderer
                                      expression={"= \\frac{2}{1}"}
                                      inline={true}
                                    />
                                    <LatexRenderer
                                      expression={"= 2"}
                                      inline={true}
                                    />
                                  </Flex>
                                </Box>
                              </SimpleGrid>
                            </Text>
                            <Text as="li">
                              <LatexRenderer
                                expression={
                                  "\\lim_{x\\to-3}\\frac{x+3}{x^2-3x} = \\frac{-3+3}{-3^2-3(-3)} = \\frac{0}{9+9} = \\frac{0}{18} = 0"
                                }
                                inline={true}
                              />
                            </Text>
                          </Container>
                        </Box>
                      </Box>
                    </Text>
                  </Box>
                </Text>
              </Box>

              <Box>
                <NextPrevButton
                  isDoubleBtn={false}
                  nextPath={
                    "/materi/konsep-dasar-limit-fungsi-aljabar/menentukan-nilai-limit"
                  }
                  prevPath={"/materi/konsep-dasar-limit-fungsi-aljabar"}
                  isFinishButton={true}
                  nextMateri={"sukuBanyak"}
                />
              </Box>
            </Container>
          </Box>
        </Box>
      </Container>
    </>
  );
}

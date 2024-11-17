import { Container, Box, Text, SimpleGrid, For } from "@chakra-ui/react";
import Sidenav from "@/components/page/materi/sidenav";
import LatexRenderer from "@/components/LatexRenderer";
import NextPrevButton from "@/components/page/nextPrevButton";

export default function Page() {
  return (
    <Container mt={{ xl: "5%", lg: "7%", md: "8%", sm: "8%", base: "14%"}} zIndex={2} fluid>
    <Box direction={"row"} gap={10} maxW={"dvw"} display={{xl: "flex", lg: "flex", md: "flex", sm: "flex", base: "block"}}>
      <Sidenav content={"Limit Fungsi Trigonometri"}/>
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
         Menentukan Nilai Limit Fungsi Trigonometri
        </Text>

          <Box mt={10}>
            <Text textStyle={"xl"}>
              Menentukan nilai limit fungsi trigonometri adalah proses menemukan
              nilai yang mendekati suatu fungsi trigonometri ketika variabel
              dalam fungsi tersebut mendekati suatu nilai tertentu, seperti 𝑥 →
              0 atau 𝑥 → ∞ Limit fungsi trigonometri sering kali melibatkan
              beberapa identitas trigonometri dasar serta beberapa limit penting
              yang menjadi acuan dalam menghitung limit-limit yang lebih
              kompleks.
            </Text>
            <Text textStyle={"xl"}>
              <Text mt={4} mb={2}>
                Berikut beberapa contoh penerapannya:
              </Text>
              <Container mb={6}>
                <Box as="ul" listStyle={"number"}>
                  <Box as="li">
                    <Text fontWeight={"bold"}>
                      Menggunakan Cara Subtitusi Langsung
                    </Text>
                    <Box display={"flex"} my={2}>
                      Nilai{" "}
                      <Text display={"flex"} alignItems={"center"} mx={2}>
                        <LatexRenderer
                          inline
                          expression={"\\lim_{x \\to c}f(x)"}
                        />
                      </Text>
                      jika x = c
                    </Box>
                    <Text fontWeight={"semibold"}>Maka dapat ditentukan</Text>
                    <Box display={"flex"} my={2}>
                      Nilai{" "}
                      <Text display={"flex"} alignItems={"center"} mx={2}>
                        <LatexRenderer
                          inline
                          expression={"\\lim_{x \\to c}f(x) = f(c)"}
                        />
                      </Text>
                    </Box>
                    <Box mt={6} mb={2}>
                      <Text fontWeight={"bold"} textStyle={"xl"}>
                        Contoh :{" "}
                      </Text>
                      <Container mx={-8} as="ul" listStyle={"circle"}>
                        <Box as="li">
                          <SimpleGrid
                            mt={3}
                            columns={{ xl: 3, lg: 3, md: 3, sm: 1, base: 1 }}
                            display={{
                              lg: "flex",
                              md: "flex",
                              sm: "block",
                              base: "block",
                            }}
                            gapX={2}
                          >
                            <Box>
                              <LatexRenderer
                                inline
                                expression={
                                  "\\lim_{x \\to \\frac{\\pi}{4}}sin2x"
                                }
                              />
                            </Box>
                            <For
                              each={[
                                {
                                  exp: "= sin2(\\frac{\\pi}{4})",
                                },
                                {
                                  exp: "= sin(\\frac{\\pi}{2})",
                                },
                                {
                                  exp: "= sin(\\frac{\\pi}{2})",
                                },
                              ]}
                            >
                              {(item, index) => (
                                <Box
                                  mt={{ xl: 0, lg: 0, md: 0, sm: 6, base: 6 }}
                                  key={index}
                                >
                                  <Box
                                    my={{ xl: 0, lg: 0, md: 0, sm: 6, base: 6 }}
                                  >
                                    <LatexRenderer
                                      inline
                                      expression={item.exp}
                                    />
                                  </Box>
                                </Box>
                              )}
                            </For>
                          </SimpleGrid>
                        </Box>
                        <Box as="li">
                          <SimpleGrid
                            mt={7}
                            columns={{ xl: 2, lg: 2, md: 2, sm: 1, base: 1 }}
                            display={{
                              lg: "flex",
                              md: "flex",
                              sm: "block",
                              base: "block",
                            }}
                            gapX={2}
                            gapY={10}
                          >
                            <Box>
                              <LatexRenderer
                                inline
                                expression={
                                  "\\lim_{x\\to \\frac{2\\pi}{4}tan3x + 2}"
                                }
                              />
                            </Box>
                            <Box mt={{ xl: 0, lg: 0, md: 0, sm: 8, base: 8 }}>
                              <For
                                each={[
                                  {
                                    exp: "= tan3(\\frac{3\\pi}{4}) + 2",
                                  },
                                  {
                                    exp: "= tan3(135^\\circ) + 2",
                                  },
                                  {
                                    exp: "= tan(1\\times360^\\circ + 45^\\circ) + 2",
                                  },
                                  {
                                    exp: "= tan45^\\circ+2",
                                  },
                                  {
                                    exp: "= 1+2",
                                  },
                                  {
                                    exp: "= 3",
                                  },
                                ]}
                              >
                                {(item, index) => (
                                  <Box
                                    my={{
                                      xl: index === 0 ? 0 : 4,
                                      lg: index === 0 ? 0 : 4,
                                      md: index === 0 ? 2 : 4,
                                      sm: index === 0 ? 2 : 6,
                                      base: index === 0 ? 2 : 6,
                                    }}
                                    key={index}
                                  >
                                    <LatexRenderer
                                      inline
                                      expression={item.exp}
                                    />
                                  </Box>
                                )}
                              </For>
                            </Box>
                          </SimpleGrid>
                        </Box>
                        <Box as="li">
                          <SimpleGrid
                            mt={3}
                            columns={{ xl: 6, lg: 6, md: 6, sm: 1, base: 1 }}
                            display={{
                              lg: "flex",
                              md: "flex",
                              sm: "block",
                              base: "block",
                            }}
                            gapX={2}
                          >
                            <Box>
                              <LatexRenderer
                                inline
                                expression={"\\lim_{x\\to\\frac{\\pi}{2}}"}
                              />
                            </Box>
                            <For
                              each={[
                                {
                                  exp: " = \\frac{1-cos2(\\frac{\\pi}{2})}{2 cos 2(\\frac{\\pi}{2})}",
                                },
                                {
                                  exp: "= \\frac{1-cos180^\\circ}{2cos180^\\circ} ",
                                },
                                {
                                  exp: "=  \\frac{1-(-1)}{2(-1)}",
                                },
                                {
                                  exp: "= -\\frac{2}{2} ",
                                },
                                {
                                  exp: "= -1",
                                },
                              ]}
                            >
                              {(item, index) => (
                                <Box
                                  mt={{ xl: 0, lg: 0, md: 0, sm: 6, base: 6 }}
                                  key={index}
                                >
                                  <Box
                                    my={{ xl: 0, lg: 0, md: 0, sm: 6, base: 6 }}
                                  >
                                    <LatexRenderer
                                      inline
                                      expression={item.exp}
                                    />
                                  </Box>
                                </Box>
                              )}
                            </For>
                          </SimpleGrid>
                        </Box>
                      </Container>
                    </Box>
                  </Box>
                  <Box as="li" my={8}>
                    <Text textStyle={"xl"} fontWeight={"bold"}>
                      Menggunakan Rumus dasar limit fungsi Trigonometri
                    </Text>
                    <Box as="ul" listStyle={"circle"}>
                      <Text textStyle={"xl"}>
                        <For
                          each={[
                            {
                              exp1: "\\lim_{x\\to 0}\\frac{sin\\thinspace ax}{bx} = \\frac{a}{b}",
                              exp2: "\\lim_{x\\to 0}\\frac{ax}{sin\\thinspace bx} = \\frac{a}{b}",
                            },
                            {
                              exp1: "\\lim_{x\\to0}\\frac{tan\\thinspace ax}{bx} = \\frac{a}{b}",
                              exp2: "\\lim_{x\\to 0}\\frac{ax}{tan\\thinspace bx} = \\frac{a}{b}",
                            },
                            {
                              exp1: "\\lim_{x\\to 0}\\frac{sin\\thinspace ax}{sin\\thinspace bx} = \\frac{a}{b}",
                              exp2: "\\lim_{x\\to 0}\\frac{tan\\thinspace ax}{tan\\thinspace bx} = \\frac{a}{b}",
                            },
                            {
                              exp1: "\\lim_{x\\to 0}\\frac{sin\\thinspace ax}{tan\\thinspace bx} = \\frac{a}{b}",
                              exp2: "\\lim_{x\\to 0}\\frac{tan\\thinspace ax}{sin\\thinspace bx} = \\frac{a}{b}",
                            },
                          ]}
                        >
                          {(item, index) => (
                            <Box as="li" mt={4} key={index}>
                              <Box display="flex" alignItems={"center"}>
                                <LatexRenderer inline expression={item.exp1} />
                                <Text mx={3} textStyle={"lg"}>
                                  atau
                                </Text>
                                <LatexRenderer inline expression={item.exp2} />
                              </Box>
                            </Box>
                          )}
                        </For>
                        <Text display="block" mt={4}>
                          Berlaku Jika : bentuk{" "}
                          <Box display={"inline-flex"} alignItems={"center"} me={2}>
                            <Text ms={{lg: 1}} me={2}>
                              <LatexRenderer
                                inline
                                expression={"\\frac{0}{0}"}
                              />
                            </Text>{" "}
                            Bentuk sin dan tan dengan variabel
                          </Box>
                          sudut yang sama
                        </Text>
                      </Text>
                    </Box>
                  </Box>
                </Box>
              </Container>
            </Text>
          </Box>
      <Box>
          <NextPrevButton
            isDoubleBtn={true}
            nextPath={
              "/materi/limit-fungsi-trigonometri/bentuk-umum"
            }
            prevPath={"/materi/limit-fungsi-trigonometri/"}
            isFinishButton={false}
            nextMateri={""}
          />
        </Box>
        </Box>
      </Box>
    </Container>
  );
}

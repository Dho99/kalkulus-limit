import { metadata } from "@/app/layout";
import { Text, Container, Flex, Box, SimpleGrid } from "@chakra-ui/react";
import Sidenav from "@/components/page/materi/sidenav";
import LatexRenderer from "@/components/LatexRenderer";

export default function Page() {
  metadata.title = "LearnLimit | Limit Suku Banyak";
  return (
    <Container
      fluid={true}
      mt={{ xl: "5%", lg: "8%", md: "8%", sm: "8%" }}
      zIndex={2}
    >
      <Flex direction={"row"} gap={10}>
        <Sidenav content={"Limit Suku Banyak"} />
        <Box>
          <Text
            textStyle={"5xl"}
            color={"black"}
            justifyContent={"center"}
            display={"flex"}
            fontWeight={"bold"}
            mb={"3%"}
            textAlign={"center"}
          >
            Menentukan Nilai Limit Fungsi
          </Text>

          <Box>
            <Text textStyle={"2xl"} fontWeight={"bold"} mb={2}>
              A. Pengertian
            </Text>
            <Text textStyle={"lg"}>
              <Text>
                Limit suku banyak adalah konsep dalam matematika yang sering
                muncul saat kita mempelajari fungsi polinomial (suku banyak) dan
                perilakunya ketika variabel mendekati nilai tertentu. Konsep ini
                terutama digunakan untuk memahami bagaimana fungsi polinomial
                mendekati nilai tertentu saat input (variabel) mendekati suatu
                angka.
              </Text>

              <Text>
                Jika P(x) dan Q(x) adalah suku banyak, maka :
                <Container>
                  <Box as="ul" listStyle={"number"}>
                    <Box as="li">
                      <LatexRenderer
                        expression={
                          "\\lim_{x\\to a}P(x) = P(a) \\times a \\in R"
                        }
                      />
                    </Box>
                    <Box as="li">
                      <LatexRenderer
                        expression={
                          "\\lim_{x \\to a}\\frac{P(x)}{Q(x)} = \\frac{P(a)}{Q(a)}"
                        }
                      />
                    </Box>
                  </Box>
                </Container>
              </Text>

              <Box my={2}>
                <Text>
                  Secara umum, fungsi polinomial memiliki bentuk:
                  <LatexRenderer
                    expression={
                      "P(x) =  a{_{n}}^{x^n} + a{_{n-1}}^{x^n-1} + ... + a{_{1}}x + a{_{0}}"
                    }
                  />
                </Text>
                <Text>
                  <Box
                    display={{ lg: "flex", md: "flex", sm: "block" }}
                    alignItems={"center"}
                  >
                    <Box display={{ sm: "flex", base: "flex" }}>
                      dengan{" "}
                      <Box mx={2} my={2}>
                        <LatexRenderer
                          expression={"a{_{n}}, a{_{n-1}}, ..., a{_{0}}"}
                          inline
                        />
                      </Box>
                      adalah koefisien,
                    </Box>
                    dan 𝑥 adalah variabel. Pada limit suku
                  </Box>
                  <Box
                    display={{
                      lg: "flex",
                      md: "flex",
                      sm: "block",
                      base: "block",
                    }}
                  >
                    banyak, kita mencari nilai{" "}
                    <Box
                      display={{
                        lg: "flex",
                        md: "flex",
                        sm: "flex",
                        base: "block",
                      }}
                      alignItems={"center"}
                    >
                      <Box
                        mx={{ lg: 2, md: 2, sm: 0, base: 0 }}
                        me={{ sm: 2 }}
                        display={"flex"}
                        alignItems={"center"}
                        my={{ sm: 2, base: 2 }}
                      >
                        <LatexRenderer expression={"\\lim_{x\\to c}"} inline />
                      </Box>{" "}
                      ,di mana 𝑥 mendekati suatu nilai tertentu 𝑐.
                    </Box>
                  </Box>
                </Text>
              </Box>
            </Text>
          </Box>

          <Box my={6}>
            <Text textStyle={"2xl"} fontWeight={"bold"} mb={2}>
              B. Contoh
            </Text>
            <Container>
              <Text textStyle={"lg"} mt={3}>
                <Box as="ul" listStyle={"number"}>
                  <Box as="li" mb={8}>
                    <SimpleGrid
                      columns={{ lg: 2, md: 2, sm: 1, base: 1 }}
                      display={{
                        lg: "flex",
                        md: "flex",
                        sm: "block",
                        base: "block",
                      }}
                      gap={2}
                    >
                      <Box>
                        <LatexRenderer
                          expression={"\\lim_{x \\to -1}(4x^3 +5x^2 - 3x - 2)"}
                          inline
                        />
                      </Box>
                      <Box mt={{ xl: 0, lg: 0, md: 0, sm: 4, base: 4 }}>
                        <Box my={{ xl: 0, lg: 0, md: 0, sm: 4, base: 4 }}>
                          <LatexRenderer
                            expression={"= 4(-1)^3 + 5(-1)^2 - 3(-1) - 2"}
                            inline
                          />
                        </Box>
                        <Box my={4}>
                          <LatexRenderer
                            expression={"= -4 + 5 + 3 - 2"}
                            inline
                          />
                        </Box>
                        <Box my={4}>
                          <LatexRenderer expression={"= 2"} inline />
                        </Box>
                      </Box>
                    </SimpleGrid>
                  </Box>

                  <Box as="li" mb={8}>
                    <Text textStyle={"xl"}>
                      <SimpleGrid
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
                              "\\lim_{x \\to 0}\\frac{2x^3-4x^2+5x+1}{x^2-4}"
                            }
                          />
                        </Box>
                        <Box mt={{ xl: 0, lg: 0, md: 0, sm: 8, base: 8 }}>
                          <Box my={{ xl: 0, lg: 0, md: 0, sm: 8, base: 8 }}>
                            <LatexRenderer
                              inline
                              expression={
                                "= \\frac{2(0)^3-4(0)^2+5(0)+1}{(0)^2-4}"
                              }
                            />
                          </Box>
                        </Box>
                        <Box mt={{ xl: 0, lg: 0, md: 0, sm: 8, base: 8 }}>
                          <Box my={{ xl: 0, lg: 0, md: 0, sm: 8, base: 8 }}>
                            <LatexRenderer
                              inline
                              expression={"= -\\frac{1}{4}"}
                            />
                          </Box>
                        </Box>
                      </SimpleGrid>
                    </Text>
                  </Box>

                  <Box as="li" mb={8}>
                    <SimpleGrid
                      columns={{ xl: 2, lg: 2, md: 2, sm: 1, base: 1 }}
                      display={{
                        lg: "flex",
                        md: "flex",
                        sm: "block",
                        base: "block",
                      }}
                      gapX={2}
                      my={8}
                    >
                      <Box>
                        <LatexRenderer
                          expression={
                            "\\lim_{x \\to -2} \\frac{x^3-5x^2+12x+12}{x^3+8}"
                          }
                          inline
                        />
                      </Box>
                      <Box mt={{ xl: 0, lg: 0, md: 0, sm: 8, base: 8 }}>
                        <Box my={{ xl: 0, lg: 0, md: 0, sm: 8, base: 8 }}>
                          <LatexRenderer
                            inline
                            expression={
                              "= \\lim_{x \\to -2}\\frac{(x+2)(x^2+3x+6)}{(x+2)(x^2+2x+4)}"
                            }
                          />
                        </Box>
                        <Box my={{ xl: 5, lg: 5, md: 5, sm: 8, base: 8 }}>
                          <LatexRenderer
                            inline
                            expression={
                              "= \\lim_{x \\to -2}\\frac{(x^2 + 3x + 6)}{(x^2 + 2x + 4)}"
                            }
                          />
                        </Box>
                        <Box my={{ xl: 5, lg: 5, md: 5, sm: 8, base: 8 }}>
                          <LatexRenderer
                            inline
                            expression={
                              "= \\lim_{x \\to -2}\\frac{(-2)^2 + 4x + 6}{(-2)^2 + 2(-2) + 4}"
                            }
                          />
                        </Box>
                        <Box my={{ xl: 5, lg: 5, md: 5, sm: 8, base: 8 }}>
                          <LatexRenderer
                            inline
                            expression={
                              "= \\lim_{x \\to -2}\\frac{4-6+6}{4+4+4}"
                            }
                          />
                        </Box>
                        <Box my={{ xl: 5, lg: 5, md: 5, sm: 8, base: 8 }}>
                          <LatexRenderer
                            inline
                            expression={"= \\frac{4}{12}"}
                          />
                        </Box>
                        <Box my={{ xl: 5, lg: 5, md: 5, sm: 8, base: 8 }}>
                          <LatexRenderer inline expression={"= \\frac{1}{3}"} />
                        </Box>
                      </Box>
                    </SimpleGrid>
                  </Box>

                  <Box as="li" mb={8}>
                    <SimpleGrid
                      columns={{ xl: 2, lg: 2, md: 2, sm: 1, base: 1 }}
                      display={{
                        lg: "flex",
                        md: "flex",
                        sm: "block",
                        base: "block",
                      }}
                      gapX={2}
                      my={8}
                    >
                      <Box>
                        <LatexRenderer inline expression={"\\lim_{x \\to 2}(\\frac{2x^2-8}{x-2} + \\frac{x^2-2x}{2x-2})"}/>
                      </Box>
                      <Box mt={{ xl: 0, lg: 0, md: 0, sm: 8, base: 8 }}>
                        <Box my={{ xl: 0, lg: 0, md: 0, sm: 8, base: 8 }}>
                        <LatexRenderer inline expression={"= \\lim_{x \\to 2}\\frac{2(x^2-4)}{x-2} + \\frac{x(x-2}{2(x-2)}"}/>
                        </Box>
                        <Box my={{ xl: 5, lg: 5, md: 5, sm: 8, base: 8 }}>
                          <LatexRenderer
                            inline
                            expression={
                              "= \\lim_{x \\to 2}\\frac{2(x-2)(x+2)}{(x-2)}"
                            }
                          />
                        </Box>
                        <Box my={{ xl: 5, lg: 5, md: 5, sm: 8, base: 8 }}>
                          <LatexRenderer
                            inline
                            expression={
                              "= \\lim_{x \\to 2}2(x+2)+\\frac{x}{2}"
                            }
                          />
                        </Box>
                        <Box my={{ xl: 5, lg: 5, md: 5, sm: 8, base: 8 }}>
                          <LatexRenderer
                            inline
                            expression={
                              "= 2(2+2)+\\frac{2}{2}"
                            }
                          />
                        </Box>
                        <Box my={{ xl: 5, lg: 5, md: 5, sm: 8, base: 8 }}>
                          <LatexRenderer
                            inline
                            expression={
                              "= 8 + 1"
                            }
                          />
                        </Box>
                        <Box my={{ xl: 5, lg: 5, md: 5, sm: 8, base: 8 }}>
                          <LatexRenderer
                            inline
                            expression={
                              "= 9"
                            }
                          />
                        </Box>
                      </Box>
                    </SimpleGrid>
                  </Box>
                </Box>
              </Text>
            </Container>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}

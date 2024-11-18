import { Container, Box, Text } from "@chakra-ui/react";
import Sidenav from "@/components/page/materi/sidenav";
import { metadata } from "@/app/layout";
import LatexRenderer from "@/components/LatexRenderer";
// import NextPrevButton from "@/components/page/nextPrevButton";
import Image from "next/image";

export default function Page() {
  metadata.title = "LearnLimit | Limit Sepihak";

  return (
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
        <Container flexBasis={"100%"}>
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
            Contoh Limit Sepihak
          </Text>

          <Text textStyle={"lg"}>
            <Box as="ul" listStyle={"number"}>
              <Box as="li" mb={5}>
                <Box display={"flex"} flexDirection={"column"}>
                  <Text>Selidikilah limit fungsi di x = 0</Text>
                  <Text>Penyelesaian : </Text>
                  <Box>
                    <Image
                      src={"/Images/contoh-limit-sepihak.png"}
                      alt={"Contoh soal limit sepihak"}
                      width={200}
                      height={100}
                    ></Image>
                    <Container
                      as={"ul"}
                      listStyleType={"circle"}
                      mt={4}
                      gapY={4}
                      display={"flex"}
                      flexDirection={"column"}
                    >
                      <Box>
                        <Box as="li">Cari limit kiri f(x) = x - 1</Box>
                        <Box my={2}>
                          <LatexRenderer
                            expression={"\\lim_{x \\to 0}x - 1 = 0 - 1 =- 1"}
                            inline={true}
                          />
                        </Box>
                      </Box>
                      <Box>
                        <Box as="li">Cari limit kiri f(x) = x + 1</Box>
                        <Box my={2}>
                          <LatexRenderer
                            expression={"\\lim_{x \\to 0}x - 1 = 0 + 1 = 1"}
                            inline={true}
                          />
                        </Box>
                      </Box>
                    </Container>
                    <Box
                      display={"flex"}
                      flexDirection={{
                        xl: "row",
                        lg: "row",
                        md: "row",
                        sm: "column",
                        base: "column",
                      }}
                      alignItems={{
                        xl: "center",
                        lg: "center",
                        md: "center",
                        sm: "",
                        base: "",
                      }}
                      gapY={2}
                      gapX={2}
                      my={2}
                    >
                      Maka{" "}
                      <LatexRenderer
                        expression={"\\lim_{x\\to 0^+}f(x) = "}
                        inline={true}
                      />{" "}
                      <Box display={"flex"}>tidak terdefinisi / tidak ada</Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box as="li">
                <Box display={"flex"} flexDirection={"column"} gapY={2}>
                  <Text display={"flex"} alignItems={"center"} gapX={2}>
                    Jika{" "}
                    <LatexRenderer
                      expression={` f(x) = 
                        \\begin{cases} 
                        1 - 2x & \\text{untuk } x < -2 \\\\ 
                        x + 7 & \\text{untuk } x \\geq -2
                        \\end{cases}
                        `}
                      inline={true}
                    />
                  </Text>
                  <Box display={"flex"} alignItems={"center"} gapX={2}>
                    Tentukan{" "}
                    <LatexRenderer
                      expression={"\\lim_{x\\to -2}f(x)"}
                      inline={true}
                    />
                  </Box>
                  <Text mt={3}>Penyelesaian : </Text>
                  <Box>
                    <Container
                      as={"ul"}
                      listStyleType={"circle"}
                      gapY={4}
                      display={"flex"}
                      flexDirection={"column"}
                    >
                      <Box>
                        <Box as="li">
                          <Box display={"flex"} alignItems={"center"} gapX={2}>
                            Cari limit kiri{" "}
                            <LatexRenderer
                              expression={"f(x) = 1 - 2x"}
                              inline={true}
                            />
                          </Box>
                        </Box>
                        <Box my={2}>
                          <LatexRenderer
                            expression={"\\lim_{x \\to 2^-}1-2(-2) = 1 + 4 = 5"}
                            inline={true}
                          />
                        </Box>
                      </Box>
                      <Box mb={5}>
                        <Box as="li">Cari limit Kanan</Box>
                        <Box my={2}>
                          <LatexRenderer
                            expression={"f(x) = x + 7"}
                            inline={true}
                          />
                        </Box>
                        <LatexRenderer
                          expression={"\\lim_{x \\to 2^+}(-2) + 7 = -2 + 7 = 5"}
                          inline={true}
                        />
                      </Box>
                    </Container>
                    <Box
                      display={"flex"}
                      flexDirection={{
                        xl: "row",
                        lg: "row",
                        md: "row",
                        sm: "column",
                        base: "column",
                      }}
                      alignItems={{
                        xl: "center",
                        lg: "center",
                        md: "center",
                        sm: "",
                        base: "",
                      }}
                      gapY={2}
                      gapX={2}
                      my={2}
                    >
                      Maka{" "}
                      <LatexRenderer
                        expression={"\\lim_{x \\to -2}f(x) = 5 "}
                        inline={true}
                      />{" "}
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Text>
        </Container>
      </Box>
    </Container>
  );
}

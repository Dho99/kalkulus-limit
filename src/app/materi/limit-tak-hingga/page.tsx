import { Container, Box, Text, SimpleGrid } from "@chakra-ui/react";
import Sidenav from "@/components/page/materi/sidenav";
import { metadata } from "@/app/layout";
import LatexRenderer from "@/components/LatexRenderer";

export default function Page() {
  metadata.title = "LearnLimit | Limit Tak Hingga";
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
        <Sidenav content={"Limit Tak Hingga"} />
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
            Limit Tak Hingga
          </Text>

          <Box mt={5}>
            <Text textStyle={"lg"}>
              Limit Tak Hingga adalah konsep limit yang Limit Tak Hingga adalah
              konsep limit yang melibatkan lambang ∞ dan -∞,yaitu bila nilai
              fungsi f(x) membesar atau mengecil tanpa batas atau
              bila x membesar atau mengecil tanpa batas. Konsep pertama adalah
              tentang limit fungsi f di titik c untuk fungsi f yang terbatas
              pada selang yang memuat c. Sementara konsep kedua adalah tentang
              limit fungsi f untuk peubah x yang membesar tanpa batas (x→∞) atau
              untuk peubah x yang mengecil tanpa batas (x→-∞), yang dikenal
              sebagai limit tak hingga.
            </Text>
            <Container mx={-5} mt={5}>
              <Text textStyle={"lg"} fontWeight={"bold"}>
                Langkah Penyelesaian limit fungsi tak hingga
              </Text>
              <Box as={"ul"} listStyle={"circle"}>
                <Box as={"li"} mt={4}>
                  <Text
                    display={{
                      xl: "flex",
                      lg: "block",
                      md: "block",
                      sm: "block",
                      base: "block",
                    }}
                    alignItems={"center"}
                    textStyle={"lg"}
                  >
                    Ubah limit tak hingga menjadi limit terhingga dengan
                    pemisalan
                    <Box display={"flex"} alignItems={"center"}>
                      <LatexRenderer
                        expression={"\\space x=\\frac{1}{P} \\space"}
                        inline
                      />
                      , Maka{" "}
                      <LatexRenderer
                        expression={"\\space P=\\frac{1}{x} \\space"}
                        inline
                      />
                    </Box>
                  </Text>
                </Box>
                <Box as={"li"}>
                  <Text
                    display={{
                      xl: "flex",
                      lg: "flex",
                      md: "block",
                      sm: "block",
                      base: "block",
                    }}
                    alignItems={"center"}
                    textStyle={"lg"}
                    mt={2}
                  >
                    Jika (x→∞) maka{" "}
                    <Box my={{ xl: 0, lg: 0, md: 2, sm: 2, base: 2 }}>
                      <LatexRenderer
                        expression={
                          "\\space P = \\frac{1}{x} = \\frac{1}{\\infty} = 0"
                        }
                        inline
                      />{" "}
                    </Box>
                    <Box display={"flex"} alignItems={"center"} my={2}>
                      <LatexRenderer
                        expression={"\\space x=\\frac{1}{P} \\space"}
                        inline
                      />
                      , Maka (P→0)
                    </Box>
                  </Text>
                </Box>
              </Box>
              <Box>
                <Text fontWeight={"bold"} my={4} textStyle={"lg"}>Contoh : </Text>
                <Box as={"ul"} listStyleType={"number"} display={"flex"} gap={7} flexDirection={"column"} mx={4}>
                  <Box as={"li"}>
                    <Text textStyle={"lg"}>
                      <LatexRenderer expression={"\\lim_{x \\to 0} \\cos\\left(\\frac{1}{x}\\right) = \\lim_{P \\to 0^+} \\cos(P) = \\cos 0 = 1"} inline/>
                    </Text>
                  </Box>
                  <Box as={"li"}>
                  <SimpleGrid columns={{xl: 2, lg: 2, md: 2, sm: 1, base: 1}} gap={2} display={{xl: "flex", lg: "flex", md: "flex", sm: "block", base: "block"}}>
                      <Text textStyle={"lg"}>
                        <LatexRenderer expression={"\\lim_{x \\to \\infty} \\frac{\\sin^3\\left(\\frac{2}{x}\\right)}{\\tan^3\\frac{1}{2x}}"} inline/>
                      </Text>
                      <Box ms={1} display={"flex"} flexDirection={"column"} gap={7}  mt={{xl: 0, lg: 0, md: 0, sm: 7, base: 7}}>
                        <Text textStyle={"lg"}>
                          <LatexRenderer expression={"= \\lim_{P \\to 0} \\frac{\\sin^2 2P}{\\tan^3 \\frac{P}{2}}"} inline/>
                        </Text>
                        <Text textStyle={"lg"}>
                          <LatexRenderer expression={"= \\lim_{P \\to 0} \\frac{\\sin 2P}{\\tan \\frac{1}{2}P} \\times \\lim_{P \\to 0} \\frac{\\sin 2P}{\\tan \\frac{1}{2}P} \\times \\lim_{P \\to 0} \\frac{\\sin 2P}{\\tan \\frac{1}{2}P}"} inline/>
                        </Text>
                        <Text textStyle={"lg"}>
                          <LatexRenderer expression={"= 4 \\times 4 \\times 4 "} inline/>
                        </Text>
                        <Text textStyle={"lg"}>
                          <LatexRenderer expression={"= 64 "} inline/>
                        </Text>
                      </Box>
                    </SimpleGrid>
                  </Box>
                  <Box as={"li"}>
                    <SimpleGrid columns={{xl: 2, lg: 2, md: 2, sm: 1, base: 1}} gap={2} display={{xl: "flex", lg: "flex", md: "flex", sm: "block", base: "block"}}>
                      <Box>
                        <Text textStyle={"lg"}>
                          <LatexRenderer expression={"\\lim_{x \\to \\infty} \\frac{\\cot \\frac{1}{2x}}{\\csc \\frac{3}{x}}"} inline/>
                        </Text>
                      </Box>
                      <Box ms={1} display={"flex"} flexDirection={"column"} gap={7}  mt={{xl: 0, lg: 0, md: 0, sm: 7, base: 7}}>
                        <Text textStyle={"lg"}>
                          <LatexRenderer expression={"= \\lim_{p \\to 0}\\frac{\\frac{1}{\\tan\\frac{P}{2}}}{\\frac{1}{\\sin\\frac{P}{3}}}"} inline/>
                        </Text>
                        <Text textStyle={"lg"}>
                          <LatexRenderer expression={"= \\lim_{P \\to 0} \\frac{\\sin 3P}{\\tan \\frac{1}{2}P}"} inline/>
                        </Text>
                        <Text textStyle={"lg"}>
                          <LatexRenderer expression={"= 6 "} inline/>
                        </Text>
                      </Box>
                    </SimpleGrid>
                  </Box>
                  <Box as={"li"}>
                  <SimpleGrid columns={{xl: 2, lg: 2, md: 2, sm: 1, base: 1}} gap={2} display={{xl: "flex", lg: "flex", md: "flex", sm: "block", base: "block"}}>
                      <Text textStyle={"lg"}>
                        <LatexRenderer expression={"\\lim_{x \\to \\infty} \\csc \\frac{1}{x} - \\cot \\frac{1}{x} "} inline/>
                      </Text>
                      <Box ms={1} display={"flex"} flexDirection={"column"} gap={7}  mt={{xl: 0, lg: 0, md: 0, sm: 7, base: 7}}>
                        <Text textStyle={"lg"}>
                          <LatexRenderer expression={"= \\lim_{P \\to 0} \\csc P - \\cot P "} inline/>
                        </Text>
                        <Text textStyle={"lg"}>
                          <LatexRenderer expression={"= \\lim_{P \\to 0} \\frac{1}{\\sin P} - \\frac{\\cos P}{\\sin P}"} inline/>
                        </Text>
                        <Text textStyle={"lg"}>
                          <LatexRenderer expression={"= \\lim_{P \\to 0} \\frac{1 - \\cos P}{\\sin P}"} inline/>
                        </Text>
                        <Text textStyle={"lg"}>
                          <LatexRenderer expression={"= \\lim_{P \\to 0} \\frac{2 \\sin^2 \\frac{1}{2}P}{\\sin P}"} inline/>
                        </Text>
                        <Text textStyle={"lg"}>
                          <LatexRenderer expression={"= 2 \\lim_{P \\to 0} \\frac{\\sin \\frac{1}{2}P}{\\sin P} \\times \\lim_{P \\to 0} \\frac{\\sin \\frac{1}{2}P}{1}"} inline/>
                        </Text>
                        <Text textStyle={"lg"}>
                          <LatexRenderer expression={"= 2 \\lim_{P \\to 0} \\frac{\\frac{1}{2}P}{\\sin P} \\times \\frac{1}{2}P"} inline/>
                        </Text>
                        <Text textStyle={"lg"}>
                          <LatexRenderer expression={"= 2 \\times \\frac{1}{2} \\times (0) \\times \\frac{1}{2} \\times (0)"} inline/>
                        </Text>
                        <Text textStyle={"lg"}>
                          <LatexRenderer expression={"= 0"} inline/>
                        </Text>
                      </Box>
                    </SimpleGrid>
                  </Box>
                  <Box as={"li"}>
                  <SimpleGrid columns={{xl: 2, lg: 2, md: 2, sm: 1, base: 1}} gap={2} display={{xl: "flex", lg: "flex", md: "flex", sm: "block", base: "block"}}>
                      <Text textStyle={"lg"}>
                        <LatexRenderer expression={"\\lim_{x \\to \\infty} \\frac{3 \\sin^2 \\frac{6}{x}}{\\sin \\frac{4}{x} \\tan \\frac{3}{x}}  "} inline/>
                      </Text>
                      <Box ms={1} display={"flex"} flexDirection={"column"} gap={7}  mt={{xl: 0, lg: 0, md: 0, sm: 7, base: 7}}>
                        <Text textStyle={"lg"}>
                          <LatexRenderer expression={"= \\lim_{P \\to 0} \\frac{3 \\sin^2 6P}{\\sin 4P \\tan 3P} "} inline/>
                        </Text>
                        <Text textStyle={"lg"}>
                          <LatexRenderer expression={"= 3 \\lim_{P \\to 0} \\frac{\\sin 6P}{\\sin 4P} \\times \\lim_{P \\to 0} \\frac{\\sin 6P}{\\tan 3P}"} inline/>
                        </Text>
                        <Text textStyle={"lg"}>
                          <LatexRenderer expression={"= 3 \\times \\frac{6}{4} \\times \\frac{6}{3}"} inline/>
                        </Text>
                        <Text textStyle={"lg"}>
                          <LatexRenderer expression={"= \\frac{36}{4}"} inline/>
                        </Text>
                        <Text textStyle={"lg"}>
                          <LatexRenderer expression={"= 9"} inline/>
                        </Text>
                      </Box>
                    </SimpleGrid>
                  </Box>
                </Box>
              </Box>
            </Container>
          </Box>
        </Container>
      </Box>
    </Container>
  );
}

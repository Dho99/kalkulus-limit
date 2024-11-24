
import { metadata } from "@/app/layout";
import { Container, Box, Text, For } from "@chakra-ui/react";
import Sidenav from "@/components/page/materi/sidenav";
import LatexRenderer from "@/components/LatexRenderer";
import { SimpleGrid } from "@chakra-ui/react";
import NextPrevButton from "@/components/page/nextPrevButton";

export default function Page() {

  metadata.title = 'LearnLimit | Contoh Aplikasi Limit Fungsi';
  
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
        color="white"
      >
        <Sidenav content={"Konsep Dasar Limit"} />
        <Container flexBasis={"100%"}>
          <Text
            textStyle={"5xl"}
            color={"white"}
            justifyContent={"center"}
            display={"flex"}
            fontWeight={"bold"}
            mb={"3%"}
            textAlign={"center"}
            w="full"
            ms={3}
            mt={5}
          >
            Contoh Aplikasi Limit Fungsi
          </Text>

          <Text textStyle={"lg"}>
            <Container mx={-4} as="ul" listStyle={"number"}>
              <Box as="li">
                <Box display={"flex"} flexDirection={"column"}>
                  <Text>
                    Suatu partikel bergerak mengikuti persamaan{" "}
                    <Text my={2}>
                      <LatexRenderer
                        expression={"S(t) = t^2 + 4t, t \\geq 0"}
                        inline={true}
                      />
                    </Text>{" "}
                    dengan t menyatakan waktu (dalam jam) dan S(t) menyatakan
                    jarak tempuh. Berapa kecepatan partikel pada jam 2?
                  </Text>
                  <Text fontWeight={"bold"}>Penyelesaian : </Text>
                  <Box>
                    <Text
                      display={{
                        xl: "flex",
                        lg: "block",
                        md: "block",
                        sm: "block",
                        base: "block",
                      }}
                      alignItems={"center"}
                    >
                      Kecepatan rata-rata partikel dari jam 2 sampai dengan 2+h,
                      dengan{" "}
                      <Text display={"flex"} alignItems={"center"}>
                        <LatexRenderer
                          expression={"\\space h \\neq 0 \\space"}
                          inline={true}
                        />{" "}
                        adalah
                      </Text>
                    </Text>
                    <LatexRenderer
                      expression={"V_h = \\frac{S(2+h)-S(2)}{h} = 8 + h"}
                    />
                    <Text>
                      Apabila diambil h sangat kecil mendekati 0, maka akan
                      diperoleh kecepatan pada saat jam 2, yaitu
                    </Text>
                    <LatexRenderer expression={"v(2) = \\lim_{h \\to 0} = 8"} />
                  </Box>
                </Box>
              </Box>
              <Box as={"li"}>
                <Box display={"flex"} flexDir={"column"}>
                  <Text
                    display={{
                      xl: "flex",
                      lg: "flex",
                      md: "block",
                      sm: "block",
                      base: "block",
                    }}
                    alignItems={"center"}
                    gapY={3}
                  >
                    Suatu mobil bergerak dengan persamaan jarak
                    <Box
                      display={"flex"}
                      alignItems={{
                        xl: "center",
                        lg: "center",
                        md: "center",
                        sm: "center",
                        base: "start",
                      }}
                      gapY={2}
                      flexDir={{
                        xl: "row",
                        lg: "row",
                        md: "row",
                        sm: "row",
                        base: "column",
                      }}
                      my={{ xl: "0", lg: "0", md: "0", sm: "0", base: 2 }}
                    >
                      <LatexRenderer
                        expression={"\\space f(t) = 3t^2 + t \\space"}
                        inline={true}
                      />
                      <Text>(dalam m).</Text>
                    </Box>
                  </Text>
                  Tentukan kecepatan mobil pada saat t = 10 detik
                </Box>
                <Text fontWeight={"bold"} mt={2}>
                  Penyelesaian :{" "}
                </Text>
                <Box display={"flex"} flexDir={"column"}>
                  <Box mb={5}>
                    Kecepatan pada saat t = 10 adalah
                    <LatexRenderer
                      expression={"\\lim_{h \\to 0}\\frac{f(t+h)-f(t)}{h}"}
                    />
                  </Box>
                    <SimpleGrid columns={{xl: 2, lg: 2, md: 2, sm: 1, base: 1}} me={"auto"} gapY={6}>
                        <Text textStyle={"xl"}>
                            <LatexRenderer
                            expression={
                                "\\lim_{h \\to 0} \\frac{f(t+h) - f(t)}{h}"
                            }
                            inline
                            />
                        </Text>
                        <Box ms={{xl: -14, lg: -14, md: -14, sm: 1, base: 1}} display="flex" flexDirection={"column"} gapY={6}>
                            <For each={[
                                {
                                    exp: "= \\lim_{h \\to 0} \\frac{f(t+h) - f(t)}{h}"
                                },
                                {
                                    exp: "= \\lim_{h \\to 0} \\frac{3(t+h)^2 + (t+h) - (3t^2 + t)}{h}"
                                },
                                {
                                    exp: "= \\lim_{h \\to 0} \\frac{3t^2 + 6th + 3h^2 + t + h - 3t^2 - t}{h}"
                                },
                                {
                                    exp: "= \\lim_{h \\to 0} \\frac{6th + 3h^2 + h}{h}"
                                },
                                {
                                    exp: "= \\lim_{h \\to 0} (6t + 3h + 1)"
                                },
                                {
                                    exp: "= (6t + 0 + 1)"
                                },
                                {
                                    exp: "= (6t + 1)"
                                },
                            ]}>
                               {(item) => (
                                <Text textStyle={"xl"}><LatexRenderer expression={item.exp} inline={true}/></Text>
                               )}
                            </For>
                        </Box>
                    </SimpleGrid>
                    <Text mt={4}>Jadi, kecepatan mobil pada saat t = 10 detik adalah</Text>
                    <SimpleGrid columns={2} me={"auto"}>
                        <Text>6t + 1</Text>
                        <Box ms={-7}>
                            <Text> = 6 x 10 + 1</Text>
                            <Text>= 61m / detik</Text>
                        </Box>
                    </SimpleGrid>
                </Box>
              </Box>
            </Container>
            <Box>
              <NextPrevButton prevPath={'/materi/konsep-dasar-limit-fungsi-aljabar/aplikasi-fungsi-limit'} nextPath={'/materi/konsep-dasar-limit-fungsi-aljabar/mini-quiz'} isDoubleBtn={true} isFinishButton={false} nextMateri=""/>
            </Box>
          </Text>
        </Container>
      </Box>
    </Container>
  );
}

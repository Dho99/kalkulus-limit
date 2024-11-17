import { metadata } from "@/app/layout";
import { Text, Container, Box, Flex } from "@chakra-ui/react";
import LatexRenderer from "../../../components/LatexRenderer";
import Sidenav from "@/components/page/materi/sidenav";
import BasicTable from "@/components/page/materi/konsep-dasar/table";

import NextPrevButton from "@/components/page/nextPrevButton";

export default function Page() {
  metadata.title = "LearnLimit | Konsep Dasar Limit Fungsi Aljabar";

  const latex = " \\lim_{ x\\to a} = L";
  const latexExpression = latex;

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
              Konsep Dasar Limit Fungsi Aljabar
            </Text>

            <Container mt={10}>
              <Text textStyle={"2xl"} fontWeight={"bold"}>
                A. Pengertian
              </Text>
              <Text textStyle={"lg"} mt={2}>
                Limit dalam matematika adalah nilai yang didekati oleh suatu
                fungsi saat variabel inputnya mendekati nilai tertentu. Konsep
                limit ini penting untuk memahami perilaku fungsi aljabar di
                sekitar titik tertentu, meskipun nilai fungsi di titik itu
                mungkin tidak terdefinisi. Secara umum, kita menulis limit
                fungsi sebagai berikut
                <Box overflow={"hidden"} mb={2}>
                  <LatexRenderer expression={latexExpression} />
                </Box>
              </Text>
              <Text
                textStyle={"lg"}
                display={"flex"}
                overflow={"hidden"}
                maxH={"25px"}
              >
                yang artinya, ketika 𝑥 mendekati 𝑎, tetapi (𝑥
                <Box my={2}>
                  <LatexRenderer expression={"\\neq"} inline={true} />
                </Box>
                a) maka nilai dari 𝑓(𝑥) mendekati 𝐿
              </Text>

              <Box my={2} textStyle={"lg"}>
                Suatu fungsi memiliki limit jika limit kiri sama dengan limit
                kanan, dapat ditulis:
                <LatexRenderer
                  expression={"\\lim_{x\\to a^-}f(x) = \\lim_{x \\to a^+}f(x)"}
                  inline={false}
                />
                <Text fontWeight={"bold"}>Contoh : </Text>
                <br />
                <Flex
                  justifyContent={"center"}
                  flexDirection={{
                    xl: "row",
                    lg: "row",
                    md: "row",
                    sm: "column",
                    base: "column",
                  }}
                >
                  <LatexRenderer
                    expression={"\\lim_{x \\to 1} = \\frac{x^2 - 1}{x - 1} ="}
                  />
                  <Box border={"1px solid "} ms={3} px={2} pt={3} pb={5}>
                    Fungsi{" "}
                    <Box mb={3}>
                      <Box my={3} me={2} display={"flex"}>
                        <LatexRenderer
                          expression={"f(x) = \\frac{x^2-1}{x-1}"}
                          inline={true}
                        />
                      </Box>
                      terdefinisi untuk semua x bilangan real kecuali x = 1.{" "}
                    </Box>
                    Contoh :{" "}
                    <Flex justifyContent={"start"} mt={3}>
                      <Flex mx={0}>
                        <LatexRenderer
                          expression={
                            "f(x) = \\frac{1^2-1}{1-1} = \\frac{0}{0}"
                          }
                          inline={true}
                        />
                      </Flex>
                    </Flex>
                  </Box>
                </Flex>
                <Box mt={7}>
                  <Text fontWeight={"bold"}>Contoh menggunakan tabel : </Text>
                  <Container my={3}>
                    <BasicTable />
                  </Container>
                </Box>




                <Box>
                  <NextPrevButton isDoubleBtn={true} nextPath={'/materi/konsep-dasar-limit-fungsi-aljabar/menentukan-nilai-limit'} prevPath={'/'} isFinishButton={false} nextMateri={''} />
                </Box>
              </Box>
            </Container>
          </Container>
        </Box>
      </Container>
    </>
  );
}

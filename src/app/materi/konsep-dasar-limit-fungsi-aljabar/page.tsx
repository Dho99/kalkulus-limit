import { metadata } from "@/app/layout";
import { Text, Container, Box, Flex } from "@chakra-ui/react";
import Link from "next/link";
import LatexRenderer from "../../../components/LatexRenderer";
import Sidenav from "@/components/page/materi/sidenav";
import Chart from "chart.js/auto";
import AcquisitionsChart from "@/components/page/materi/chart";

export default function Page() {
  metadata.title = "LearnLimit - Konsep Dasar Limit Fungsi Aljabar";

  const latex = " \\lim_{ x\\to a} = L";
  const latexExpression = latex;
  const twoHandLimit = " \\lim_{x \\to a^-}f(x) = \\lim_{x \\to a^+}f(x)";
  const limitRight = "\\lim_{x \\to a^+}f(x)";
  const limitLeft = "\\lim_{x \\to a^-}f(x)";

  const data = [
    { x: -20, y: -10 },
    { x: 0, y: 5,  },
    { x: 5, y: 10,  },
    { x: 8, y: 5,},
    { x: 15, y: 0},
  ];

  return (
    <>
      <Container fluid={true} mt={{ xl: "5%", lg: "8%" }} zIndex={2}>
        <Flex direction={"row"} gap={10}>
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
            >
              Konsep Dasar Limit Fungsi Aljabar
            </Text>

            <Box mt={10}>
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
                <Box maxH={"30px"} overflow={"hidden"} mb={2}>
                  <LatexRenderer expression={latexExpression} inline={false} />
                </Box>
              </Text>
              <Text
                textStyle={"lg"}
                display={"flex"}
                overflow={"hidden"}
                maxH={"25px"}
              >
                yang artinya, ketika 𝑥 mendekati 𝑎, tetapi (𝑥{" "}
                <Text maxW={"20px"} overflow={"hidden"}>
                  <LatexRenderer expression={"\\neq"} inline={true} />
                </Text>{" "}
                a) maka nilai dari 𝑓 ( 𝑥 ) mendekati 𝐿
              </Text>
            </Box>
            <Box maxW={"50%"} display={"flex"} margin={"auto"} my={3}>
              <AcquisitionsChart datas={data} />

            </Box>

            <Box mt={10}>
              <Text textStyle={"2xl"} fontWeight={"bold"}>
                B. Limit Kanan
              </Text>
              <Text textStyle={"lg"} mt={2}>
                Limit kanan adalah nilai yang didekati oleh fungsi 𝑓 ( 𝑥 )
                ketika variabel 𝑥 mendekati suatu nilai tertentu dari arah kanan
                atau lebih besar dari titik tersebut. Notasi untuk limit kanan
                adalah:
                <Box maxH={"38px"} overflow={"hidden"} my={4}>
                  <LatexRenderer expression={limitRight} inline={false} />
                </Box>
                Di sini, 𝑥 mendekati 𝑎 dari nilai yang sedikit lebih besar dari
                𝑎.
              </Text>
            </Box>

            <Box mt={10}>
              <Text textStyle={"2xl"} fontWeight={"bold"}>
                C. Limit Kiri
              </Text>
              <Text textStyle={"lg"} mt={2}>
                Limit kanan adalah nilai yang didekati oleh fungsi 𝑓 ( 𝑥 )
                ketika variabel 𝑥 mendekati suatu nilai tertentu dari arah kiri
                atau lebih kecil dari titik tersebut. Notasi untuk limit kiri
                adalah:
                <Box maxH={"38px"} overflow={"hidden"} my={4}>
                  <LatexRenderer expression={limitLeft} inline={false} />
                </Box>
                Di sini,𝑥 mendekati 𝑎 dari nilai yang sedikit lebih kecil dari
                𝑎.
              </Text>
            </Box>

            <Box mt={10}>
              <Text textStyle={"2xl"} fontWeight={"bold"}>
                D. Limit Kanan Kiri
              </Text>
              <Text textStyle={"lg"} mt={2}>
                Suatu fungsi memiliki limit jika limit kiri sama dengan limit
                kanan, dapat ditulis:
                <Box maxH={"38px"} overflow={"hidden"} my={4}>
                  <LatexRenderer expression={twoHandLimit} inline={false} />
                </Box>
                yang artinya, ketika 𝑥 mendekati 𝑎, nilai dari 𝑓 ( 𝑥 ) mendekati
                𝐿
              </Text>
            </Box>

            <Box mt={10}>
              <Text textStyle={"2xl"} fontWeight={"bold"}>
                E. Contoh
              </Text>
              <Text textStyle={"lg"} mt={2}>
                Suatu fungsi memiliki limit jika limit kiri sama dengan limit
                kanan, dapat ditulis:
                <Box maxH={"38px"} overflow={"hidden"} my={4}>
                  <LatexRenderer expression={twoHandLimit} inline={false} />
                </Box>
                yang artinya, ketika 𝑥 mendekati 𝑎, nilai dari 𝑓 ( 𝑥 ) mendekati
                𝐿
              </Text>
            </Box>
          </Box>
        </Flex>
      </Container>
    </>
  );
}

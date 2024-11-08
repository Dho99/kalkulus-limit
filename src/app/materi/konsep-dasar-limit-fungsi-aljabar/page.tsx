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

  const datasets = [
    {
      label: "Grafik 1",
      data: [
        { x: 1, y: 2.5, isLimitValue: false },
        { x: 1.5, y: 3.2, isLimitValue: false },
        { x: 2.5, y: 3.8, isLimitValue: false },
        { x: 2.9, y: 3.9, isLimitValue: true },    // Mendekati x = 3
        { x: 2.95, y: 3.95, isLimitValue: true },  // Mendekati x = 3
        { x: 3, y: 4, isLimitValue: true }         // Nilai batas x = 3
      ],
      borderColor: "blue",
      backgroundColor: "blue",
    },
    {
      label: "Grafik 2",
      data: [
        { x: 1, y: 3.5, isLimitValue: false },
        { x: 1.5, y: 3.9, isLimitValue: false },
        { x: 2.5, y: 4.2, isLimitValue: false },
        { x: 2.9, y: 4.8, isLimitValue: true },    // Mendekati x = 3
        { x: 2.95, y: 4.9, isLimitValue: true },   // Mendekati x = 3
        { x: 3, y: 5, isLimitValue: true }         // Nilai batas x = 3
      ],
      borderColor: "green",
      backgroundColor: "green",
    },
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
                  <LatexRenderer expression={latexExpression}/>
                </Box>
              </Text>
              <Text
                textStyle={"lg"}
                display={"flex"}
                overflow={"hidden"}
                maxH={"25px"}
              >
                yang artinya, ketika 𝑥 mendekati 𝑎, tetapi (𝑥{" "}
                <Text>
                  <LatexRenderer expression={"\\neq"} />
                </Text>{" "}
                a) maka nilai dari 𝑓 ( 𝑥 ) mendekati 𝐿
              </Text>
            </Box>



            <Box my={2}>
              <Text fontWeight={"bold"}>Contoh Grafik Limit jika <LatexRenderer expression={" \\lim_{ x\\to 3}"}></LatexRenderer></Text>
              <Box maxW={{xl:"65%", lg: "65%", base: "80%"}} display={"flex"} margin={"auto"} my={3}>
                <AcquisitionsChart datasets={datasets} xMax={3} yMax={10} xMin={1} yMin={5}/>
              </Box>
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

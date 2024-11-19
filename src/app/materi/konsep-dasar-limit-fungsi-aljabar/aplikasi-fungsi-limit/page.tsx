import { Container, Box, Text } from "@chakra-ui/react";
import Sidenav from "@/components/page/materi/sidenav";
import { metadata } from "@/app/layout";
import LatexRenderer from "@/components/LatexRenderer";
import NextPrevButton from "@/components/page/nextPrevButton";

export default function Page() {
  metadata.title = "LearnLimit | Aplikasi Limit Fungsi";
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
            Aplikasi Limit Fungsi
          </Text>

          <Text textStyle={"lg"}>
            <Text>
              Limit fungsi memainkan peran vital di berbagai disiplin ilmu.
              Pemahamannya tidak hanya fundamental dalam teori matematika,
              tetapi juga aplikatif dalam bidang-bidang praktis seperti fisika,
              ekonomi, teknik, biologi, dan ilmu komputer. Ada pula beberapa
              contoh aplikasi limit dalam kehidupan, diantaranya
            </Text>
            <Container mx={-4} my={3}>
              <Box as={"ul"} listStyleType={"number"} gap={6} display={"flex"} flexDirection={"column"}>
                <Box as={"li"}>
                  <Text fontWeight="bold">Aplikasi dalam fisika</Text>
                  <Box as={"ul"} listStyle={"circle"}>
                    <Container mx={-4}>
                      <Box as={"li"} mt={3}>
                        <Text fontWeight={"bold"}>Gerak dan Kecepatan</Text>
                        <Text>
                          Dalam fisika, limit sangat penting untuk
                          mendeskripsikan gerak. Kecepatan sesaat suatu benda
                          adalah turunan dari posisinya terhadap waktu.
                          Misalkan, posisi suatu benda s(t) sebagai fungsi dari
                          waktu t, maka kecepatan sesaat v(t) adalah:
                        </Text>
                        <LatexRenderer
                          expression={
                            "v(t) = \\lim_{\\Delta t \\to 0} \\frac{s(t + \\Delta t) - s(t)}{\\Delta t}"
                          }
                        />
                        <Text>
                          Limit ini mendefinisikan turunan dari fungsi posisi,
                          yang artinya kecepatan adalah sifat limit dari rasio
                          perubahan posisi terhadap waktu.
                        </Text>
                      </Box>
                      <Box as={"li"} mt={4}>
                        <Text fontWeight={"bold"}>Hukum Gravitasi</Text>
                        <Text>
                          Konsep gravitasi Newton juga dapat dijelaskan melalui
                          limit. Gaya gravitasi antara dua benda dipengaruhi
                          oleh jarak yang semakin dekat mendekati nol. Hal ini
                          biasanya dieksplorasi dalam skenario dimana benda
                          mendekati pusat massa atau gravitasi, dan limit
                          digunakan untuk memahami gaya yang bekerja pada jarak
                          paling kecil atau paling ekstrem.
                        </Text>
                      </Box>
                    </Container>
                  </Box>
                </Box>
                <Box as={"li"}>
                  <Text fontWeight="bold" mb={3}>Aplikasi dalam Ekonomi</Text>
                  <Box as={"ul"} listStyle={"circle"}>
                    <Container mx={-4}>
                      <Box as={"li"}>
                        <Text fontWeight={"bold"}>
                          Marginal Cost dan Marginal Revenue
                        </Text>
                        <Text>
                          Dalam ekonomi, marginal cost (biaya marjinal) dan
                          marginal revenue (pendapatan marjinal) adalah turunan
                          dari total cost (biaya total) dan total revenue
                          (pendapatan total) masing-masing. Biaya marjinal
                          adalah tambahan biaya untuk memproduksi suatu unit
                          tambahan secara matetatis yang dinyatakan sebagai:{" "}
                        </Text>
                        <LatexRenderer expression={"MC = \\lim_{\\Delta q \\to 0} \\frac{TC(q + \\Delta q) - TC(q)}{\\Delta q}"} />
                        <Text>Dimana TC adalah fungsi biaya total dan q adalah jumlah unit yang diproduksi.</Text>
                      </Box>
                    </Container>
                  </Box>
                </Box>
                <Box as={"li"}>
                  <Text fontWeight="bold" mb={3}>Aplikasi dalam Komputer dan Informatika</Text>
                  <Box as={"ul"} listStyle={"circle"}>
                    <Container mx={-4}>
                      <Box as={"li"}>
                        <Text fontWeight={"bold"}>
                          Analisis Algoritma
                        </Text>
                        <Text>
                          Dalam ilmu komputer, limit digunakan untuk analisis kompleksitas algoritma. Limit memberikan dasar matematis untuk menghitung dan membandingkan efisiensi algoritma dalam skala besar data.
                        </Text>
                      </Box>
                      <Box as={"li"}>
                        <Text fontWeight={"bold"}>
                          Pembelajaran Mesin
                        </Text>
                        <Text>
                          Algoritma pembelajaran mesin, khususnya yang melibatkan pembaruan gradien, menggunakan konsep limit untuk mengoptimalkan fungsi kehilangan.
                        </Text>
                      </Box>
                    </Container>
                  </Box>
                </Box>
              </Box>
            </Container>
              <Box>
                <NextPrevButton
                  isDoubleBtn={true}
                  nextPath={
                    "/materi/konsep-dasar-limit-fungsi-aljabar/aplikasi-fungsi-limit/contoh"
                  }
                  prevPath={"/materi/konsep-dasar-limit-fungsi-aljabar/menentukan-nilai-limit"}
                  isFinishButton={false}
                  nextMateri={""}
                />
              </Box>
          </Text>
        </Container>
      </Box>
    </Container>
  );
}

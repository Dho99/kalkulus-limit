import { metadata } from "@/app/layout";
import { Text, Container, Flex, Box } from "@chakra-ui/react";
import Sidenav from "@/components/page/materi/sidenav";
import LatexRenderer from "@/components/LatexRenderer";

export default function Page() {
  metadata.title = "LearnLimit | Limit Suku Banyak";
  return (
    <>
      <Container
        fluid={true}
        mt={{ xl: "5%", lg: "8%", md: "8%", sm: "8%" }}
        zIndex={2}
      >
        <Flex direction={"row"} gap={10}>
          <Sidenav content={"Limit Suku Banyak"} />
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
              Menentukan Nilai Limit Fungsi
            </Text>

            <Box>
              <Text textStyle={"2xl"} fontWeight={"bold"} mb={2}>
                A. Pengertian
              </Text>
              <Text textStyle={"lg"}>
                <Text>
                  Limit suku banyak adalah konsep dalam matematika yang sering
                  muncul saat kita mempelajari fungsi polinomial (suku banyak)
                  dan perilakunya ketika variabel mendekati nilai tertentu.
                  Konsep ini terutama digunakan untuk memahami bagaimana fungsi
                  polinomial mendekati nilai tertentu saat input (variabel)
                  mendekati suatu angka.
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
                          me={{sm: 2}}
                          display={"flex"}
                          alignItems={"center"}
                          my={{sm: 2, base: 2}}
                        >
                          <LatexRenderer
                            expression={"\\lim_{x\\to c}"}
                            inline
                          />
                        </Box>{" "}
                          ,di mana 𝑥 mendekati suatu nilai tertentu 𝑐.
                      </Box>
                     
                    </Box>
                  </Text>
                </Box>
              </Text>
            </Box>
          </Box>
        </Flex>
      </Container>
    </>
  );
}

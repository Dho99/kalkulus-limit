import { Container, Box, Text } from "@chakra-ui/react";
import Sidenav from "@/components/page/materi/sidenav";
import { metadata } from "@/app/layout";
import LatexRenderer from "@/components/LatexRenderer";
import NextPrevButton from "@/components/page/nextPrevButton";

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
        <Sidenav content={"Limit Sepihak"} />
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
            Limit Sepihak
          </Text>

          <Box>
            <Text textStyle={"lg"}>
              <Text>
                Limit sepihak adalah ide untuk melihat apa yang terjadi untuk
                sebuah fungsi ketika didekati oleh suatu nilai x tertentu dari
                satu arah tertentu (kiri/kanan).
              </Text>
              <Container as={"ul"} mx={-4} my={2}>
                <Box as="li" listStyle={"circle"}>
                  <Box display={"flex"} flexDirection={"column"}>
                    <Text fontWeight={"bold"}>Limit Kanan</Text>
                    <Box
                      display={{
                        xl: "flex",
                        lg: "flex",
                        md: "flex",
                        sm: "block",
                        base: "block",
                      }}
                      gap={3}
                      alignItems={"center"}
                    >
                      <Text my={{ xl: 0, lg: 0, md: 0, sm: 3, base: 3 }}>
                        <LatexRenderer
                          expression={"\\lim_{x\\to c^+}f(x) = L"}
                          inline={true}
                        />
                      </Text>
                      Mengandung Arti bahwa x mendekati c dari arah kanan
                    </Box>
                  </Box>
                </Box>
                <Box as="li" listStyle={"circle"} my={2}>
                  <Box display={"flex"} flexDirection={"column"}>
                    <Text fontWeight={"bold"}>Limit Kiri</Text>
                    <Box
                      display={{
                        xl: "flex",
                        lg: "flex",
                        md: "flex",
                        sm: "block",
                        base: "block",
                      }}
                      gap={3}
                      alignItems={"center"}
                    >
                      <Text my={{ xl: 0, lg: 0, md: 0, sm: 3, base: 3 }}>
                        <LatexRenderer
                          expression={"\\lim_{x\\to c^-}f(x) = M"}
                          inline={true}
                        />
                      </Text>
                      Mengandung Arti bahwa x mendekati c dari arah kiri
                    </Box>
                  </Box>
                </Box>
              </Container>
              <Text>
                Limit sebuah fungsi dikatakan ada jika dan hanya jika limit kiri x limit kanan ada dan sama, sehingga:
                  <LatexRenderer expression={"\\lim_{x\\to c^-}f(x) - \\lim_{y \\to c^+}f(x) \\thinspace maka \\lim_{x\\to c}f(x)"} />
                Jika tidak terpenuhi, maka hasilnya tidak terdefinisi. 
              </Text>

              <NextPrevButton nextPath={'/materi/limit-sepihak/contoh'} prevPath={"/materi/limit-sepihak"} isFinishButton={false} isDoubleBtn={true} nextMateri={""}/>
            </Text>
          </Box>
        </Container>
      </Box>
    </Container>
  );
}

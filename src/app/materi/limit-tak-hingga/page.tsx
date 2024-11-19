import { Container, Box, Text } from "@chakra-ui/react";
import Sidenav from "@/components/page/materi/sidenav";
import { metadata } from "@/app/layout";
// import LatexRenderer from "@/components/LatexRenderer";

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
          </Box>
        </Container>
      </Box>
    </Container>
  );
}

import {
  Box,
  Text,
  Container,
  SimpleGrid,
  For,
  Button,
} from "@chakra-ui/react";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <Text
        textStyle={"lg"}
        textAlign={"center"}
        mb={5}
        mt={-2}
        fontWeight={"semibold"}
      >
        Ayo, Coba latihan ini untuk mengetahui kemampuan anda dalam memahami
        Limit Fungsi Kalkulus I !
      </Text>
      <Box
        as={"ul"}
        listStyle={"number"}
        p={5}
        border={"1px solid white"}
        rounded={"lg"}
        shadow={"lg"}
      >
        <Text textStyle={"lg"} fontWeight={"bold"}>
          Peraturan :{" "}
        </Text>
        <Container>
          <For
            each={[
              "Latihan berisi 10 soal, terdapat bentuk soal berupa Pilihan Ganda",
              "Durasi pengerjaan latihan 10 Menit",
              "Anda dapat melihat nilai / skor secara langsung setelah Latihan diselesaikan",
              "Anda dapat melakukan Latihan kembali secara berulang",
              "Sidebar dihilangkan untuk mendunukung fokus anda",
            ]}
          >
            {(item, key) => (
              <Text as={"li"} key={key} my={2}>
                {item}
              </Text>
            )}
          </For>
        </Container>
        <Container mx={-5}>
          <SimpleGrid
            columns={{ xl: 2, lg: 2, md: 2, sm: 1, base: 1 }}
            mt={10}
            gapY={4}
          >
            <Box display={"flex"} justifyContent={"start"} me={-10}>
              <Box
                minW={{
                  xl: "50%",
                  lg: "50%",
                  md: "50%",
                  sm: "100%",
                  base: "100%",
                }}
                me={-10}
              >
                <Link href={"/"}>
                  <Button shadow={"sm"} _hover={{ shadow: "lg" }} w={"100%"}>
                    Kembali
                  </Button>
                </Link>
              </Box>
            </Box>

            <Box display={"flex"} justifyContent={"end"}>
              <Box
                minW={{
                  xl: "50%",
                  lg: "50%",
                  md: "50%",
                  sm: "100%",
                  base: "100%",
                }}
                me={-10}
              >
                <Link href={"/latihan/soal"}>
                  <Button
                    shadow={"sm"}
                    _hover={{ shadow: "lg" }}
                    bgColor={"blue.500"}
                    color={"white"}
                    w={"100%"}
                  >
                    Siap
                  </Button>
                </Link>
              </Box>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
}

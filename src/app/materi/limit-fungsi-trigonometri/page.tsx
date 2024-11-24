import { metadata } from "@/app/layout";
import { Text, Container, Box, For } from "@chakra-ui/react";
import Sidenav from "@/components/page/materi/sidenav";
import Link from "next/link";
import LatexRenderer from "@/components/LatexRenderer";
import NextPrevButton from "@/components/page/nextPrevButton";

export default function Page() {
  metadata.title = "LearnLimit | Limit Fungsi Trigonometri";
  return (
    <>
      <Container mt={{ xl: "5%", lg: "7%", md: "8%", sm: "8%", base: "14%"}} zIndex={2} fluid>
        <Box direction={"row"} gap={10} maxW={"dvw"} display={{xl: "flex", lg: "flex", md: "flex", sm: "flex", base: "block"}} color={"white"}>
          <Sidenav content={"Limit Fungsi Trigonometri"}/>
          <Box flexBasis={"100%"}>
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
             Limit Fungsi Trigonometri
            </Text>

            <Box mt={10}>
              <Text textStyle={"2xl"} fontWeight={"bold"} mb={2}>
                A. Pengertian
              </Text>
              <Text textStyle={"lg"}>
                Limit fungsi trigonometri adalah nilai yang dicapai oleh suatu
                fungsi trigonometri ketika variabelnya mendekati suatu nilai
                tertentu. Penghitungannya bisa langsung disubstitusi seperti{" "}
                <Text
                  fontWeight={"bold"}
                  display={"inline"}
                  textDecor={"underline"}
                >
                  <Link href={"/materi/konsep-dasar-limit-fungsi-aljabar"}>
                    Limit Fungsi Aljabar
                  </Link>
                </Text>
                , tetapi ada fungsi trigonometri yang harus diubah terlebih
                dahulu ke identitas trigonometri untuk limit tak tentu.
                <Box mt={4}>
                  <Text fontWeight={"bold"}>
                    Apa itu Identitas Trigonometri ?{" "}
                  </Text>
                  <Text mt={1}>
                    Dilansir dari{" "}
                    <Text fontWeight={"bold"} display={"inline"}>
                      <Link
                        href={
                          "https://www.quipper.com/id/blog/mapel/matematika/identitas-trigonometri/"
                        }
                      >
                        Quipper
                      </Link>
                    </Text>
                    , Identitas trigonometri adalah suatu identitas yang berisi
                    kesamaan fungsi trigonometri di ruas kiri dan ruas kanan.
                    Kesamaan itu diperoleh dengan cara menjabarkan salah satu
                    fungsi, bisa di ruas kiri atau ruas kanan hingga diperoleh
                    bentuk akhir yang sama
                  </Text>
                  <Text fontWeight={"bold"} mt={4}>
                    Berikut adalah bentuk - bentuk dari identitas Trigonometri
                  </Text>
                  <Container>
                    <Box as="ul" listStyle={"circle"} mt={4}>
                    <For
                      each={[
                        {
                          exp: "sin^2ax + cos^2ax = 1",
                        },
                        {
                          exp: "1 - cos^2ax = sin^2ax",
                        },
                        {
                          exp: "cos ax = 1 - 2 sin^2\\frac{1}{2}ax",
                        },
                        {
                          exp: "1- cos ax = 2 sin^2\\frac{1}{2}ax",
                        },
                        {
                          exp: "sin^2x + cos^2x = 1",
                        },
                        {
                          exp: "cos^2x = 1 - sin^2x",
                        },
                        {
                          exp: "cos 2x = cos^2x - sin^2x",
                        },
                        {
                          exp: "cos 2x = 2cos^2x - 1",
                        },
                        {
                          exp: "cos 2x = 1 - 2sin^2x",
                        },
                      ]}
                      >
                        {(item, index) => (
                          <Box as="li" my={3} key={index}>
                            <LatexRenderer
                              inline
                              expression={item.exp}
                            />
                          </Box>
                        )}
                      </For>
                    </Box>
                  </Container>
                </Box>
              </Text>
            </Box>
          <Box>
          <NextPrevButton
            isDoubleBtn={true}
            nextPath={
              "/materi/limit-fungsi-trigonometri/menentukan-nilai-limit-fungsi-trigonometri"
            }
            prevPath={"/"}
            isFinishButton={false}
            nextMateri={"finish"}
          />
        </Box>
          </Box>

        
        </Box>
      </Container>
    </>
  );
}

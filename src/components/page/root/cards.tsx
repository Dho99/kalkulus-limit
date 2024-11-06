"use client";

import {useRouter} from "next/navigation";
import { Box, Text, Flex } from "@chakra-ui/react";
import { Button } from "@/components/ui/button";
import {
  TimelineConnector,
  TimelineContent,
  TimelineDescription,
  TimelineItem,
  TimelineRoot,
  TimelineTitle,
} from "@/components/ui/timeline";
import { ArrowForwardIcon } from "@chakra-ui/icons";

export default function Cards() {

  const router = useRouter();

  return (
    <>
      <Box mt={"20%"} minH={"svh"}>
        <Text textStyle={"5xl"} fontWeight={"bold"} display={"flex"} mb={"60px"} justifyContent={"center"}>Kumpulan Materi Fungsi Limit Kalkulus</Text>
        {/* <Box border={"1px solid"} maxW="700px" marginX={"auto"} mb={"80px"}></Box> */}

        <Flex gap={4} justifyContent={"center"}>
          <Box flexBasis={"50%"}>
            <TimelineRoot>
              <TimelineItem>
                <TimelineConnector bg={"black"} mt={3}></TimelineConnector>
                <TimelineContent>
                  <TimelineTitle>
                    <Text textStyle={"4xl"} fontWeight={"bold"}>
                      Konsep Dasar Limit Fungsi Aljabar
                    </Text>
                  </TimelineTitle>
                  <Text textStyle="xl" mt={3}>
                    Pelajari dasar - dasar mengenai Konsep Dasar Limit terlebih
                    dahulu sebelum berlanjut ke langkah berikutnya
                  </Text>
                  <Button
                    mt={4}
                    maxW={"170px"}
                    colorPalette={"yellow"}
                    size={"md"}
                    onClick={() => {router.push('/materi/konsep-dasar-limit-fungsi-aljabar')}}
                  >
                    <Text fontWeight={"bold"}>
                      Mulai Belajar <ArrowForwardIcon />
                    </Text>
                  </Button>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineConnector bg={"black"} mt={"65px"}></TimelineConnector>
                <TimelineContent mt={"50px"}>
                  <TimelineTitle>
                    <Text textStyle={"4xl"} fontWeight={"bold"}>
                      Limit Suku Banyak
                    </Text>
                  </TimelineTitle>
                  <Text textStyle="xl" mt={3}>
                    Sudah menguasai materi sebelumnya? Hebat! Mari kita lanjut
                    ke materi selanjutnya !
                  </Text>
                  <Button
                    mt={4}
                    maxW={"170px"}
                    colorPalette={"yellow"}
                    size={"md"}
                    onClick={() => {router.push('/materi/limit-suku-banyak')}}
                  >
                    <Text fontWeight={"bold"}>
                      Lihat Materi <ArrowForwardIcon />
                    </Text>
                  </Button>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineConnector bg={"black"} mt={"65px"}></TimelineConnector>
                <TimelineContent mt={"50px"}>
                  <TimelineTitle>
                    <Text textStyle={"4xl"} fontWeight={"bold"}>
                      Limit Fungsi Trigonometri
                    </Text>
                  </TimelineTitle>
                  <Text textStyle="xl" mt={3}>
                    Sudah menguasai materi sebelumnya? Hebat! Mari kita lanjut
                    ke materi selanjutnya !
                  </Text>
                  <Button
                    mt={4}
                    maxW={"170px"}
                    colorPalette={"yellow"}
                    size={"md"}
                    onClick={() => {router.push('/materi/limit-fungsi-trigonometri')}}
                  >
                    <Text fontWeight={"bold"}>
                      Lihat Materi <ArrowForwardIcon />
                    </Text>
                  </Button>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem display={"none"} />
            </TimelineRoot>
          </Box>
        </Flex>
      </Box>
    </>
  );
}

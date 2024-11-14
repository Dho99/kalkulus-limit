import { Text, Flex, Box, Container } from "@chakra-ui/react";
import Sidenav from "@/components/page/materi/sidenav";
import { metadata } from "@/app/layout";
import Image from "next/image";

export default function Page() {
  metadata.title = "LearnLimit | Sudut Istimewa";
  return (
    <Container
      fluid={true}
      mt={{ xl: "5%", lg: "8%", md: "8%", sm: "8%" }}
      zIndex={2}
    >
      <Flex direction={"row"} gap={10}>
        <Sidenav content={"Limit Fungsi Trigonometri"} />
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
            Bentuk Istimewa Fungsi Trigonometri
          </Text>
          <Box display={"flex"} alignItems={"center"} gap={5} flexDirection={"column"}>
            <Image
              height={900}
              width={900}
              src={"/Images/bentuk-umum-1-dan-2.png"}
              alt="Bentuk Umum Limit 1 dan 2"
              // layout="fill"
              objectFit="cover"
              quality={75}
              sizes="100vw"
              loading="lazy"
            ></Image>
            <Image
              height={900}
              width={900}
              src={"/Images/bentuk-umum-1-dan-2.png"}
              alt="Bentuk Umum Limit 1 dan 2"
              // layout="fill"
              objectFit="cover"
              quality={75}
              sizes="100vw"
              loading="lazy"
            ></Image>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}

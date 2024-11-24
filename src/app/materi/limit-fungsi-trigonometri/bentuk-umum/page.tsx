import { Text, Box, Container } from "@chakra-ui/react";
import Sidenav from "@/components/page/materi/sidenav";
import { metadata } from "@/app/layout";
import Image from "next/image";
import NextPrevButton from "@/components/page/nextPrevButton";

export default function Page() {
  metadata.title = "LearnLimit | Sudut Istimewa";
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
        color={"white"}
        // overflow={"hidden"}
      >
        <Sidenav content={"Limit Fungsi Trigonometri"} />
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
            Bentuk Istimewa Fungsi Trigonometri
          </Text>
          <Box
            display={"flex"}
            alignItems={"center"}
            gap={5}
            flexDirection={"column"}
            mt={10}
          >
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
        <Box>
          <NextPrevButton
            isDoubleBtn={true}
            nextPath={"/materi/limit-fungsi-trigonometri/mini-quiz"}
            prevPath={
              "/materi/limit-fungsi-trigonometri/menentukan-nilai-limit-fungsi-trigonometri"
            }
            isFinishButton={true}
            nextMateri={"sukuBanyak"}
          />
        </Box>
        </Box>
      </Box>
    </Container>
  );
}

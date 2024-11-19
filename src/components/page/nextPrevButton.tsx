"use client";

import { Button, Box, Container, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { QuizContext } from "@/app/quiz-context";
import { FaChevronLeft, FaCheck, FaChevronRight } from "react-icons/fa";
import {
  DialogActionTrigger,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type FNprops = {
  isDoubleBtn: boolean;
  nextPath: string;
  prevPath: string;
  isFinishButton: boolean;
  nextMateri: string;
};

export default function NextPrevButton({
  isDoubleBtn,
  nextPath,
  prevPath,
  isFinishButton,
  nextMateri,
}: FNprops) {
  const router = useRouter();
  const { levelFinish, updateLevelFinish } = useContext(QuizContext);

  const updateLocalStorage = (materi :string) => {
    localStorage.removeItem("progress");
    const levelObj: { [key: string]: boolean } = {...levelFinish};
    levelObj[materi] = true;

    localStorage.setItem("progress", JSON.stringify(levelObj));
    
  }


  if (isDoubleBtn) {
    return (
      <Container my={10} display={"flex"}>
        <Box me={"auto"}>
          <Link href={`${prevPath}`}>
            <Button colorPalette={"yellow"} size={"md"}>
              <Box me={2}>
                <FaChevronLeft />
              </Box>
              <Text
                textStyle={"lg"}
                fontWeight={"bold"}
                display={{
                  xl: "block",
                  lg: "block",
                  md: "block",
                  sm: "none",
                  base: "none",
                }}
              >
                Kembali{" "}
              </Text>
            </Button>
          </Link>
        </Box>
        <Box ms={"auto"}>
          <Link href={`${nextPath}`}>
            <Button colorPalette={"yellow"} size={"md"}>
              <Text
                textStyle={"lg"}
                fontWeight={"bold"}
                display={{
                  xl: "block",
                  lg: "block",
                  md: "block",
                  sm: "none",
                  base: "none",
                }}
              >
                Selanjutnya{" "}
              </Text>
              <Box ms={2}>
                <FaChevronRight />
              </Box>
            </Button>
          </Link>
        </Box>
      </Container>
    );
  } else if (isFinishButton) {
    return (
        <Container my={10} display={"flex"}>
          <Box ms={"auto"}>
            <DialogRoot placement={"center"} motionPreset="slide-in-bottom">
              <DialogTrigger asChild>
                <Button colorPalette={"yellow"} size={"md"}>
                  <Text
                    textStyle={"lg"}
                    fontWeight={"bold"}
                    display={{
                      xl: "block",
                      lg: "block",
                      md: "block",
                      sm: "none",
                      base: "none",
                    }}
                  >
                    Selesaikan{" "}
                  </Text>
                  <Box ms={2}>
                    <FaCheck />
                  </Box>
                </Button>
              </DialogTrigger>
              <DialogContent
                colorPalette={"yellow"}
                bgColor={"white"}
                color={"black"}
              >
                <DialogHeader>
                  <DialogTitle>Konfirmasi</DialogTitle>
                </DialogHeader>
                <DialogBody>
                  <Text>Apakah anda sudah memahami Materi ?</Text>
                </DialogBody>
                <DialogFooter>
                  <DialogActionTrigger asChild>
                    <Button
                      variant="outline"
                      colorPalette={"gray"}
                      color={"black"}
                      _hover={{ color: "white" }}
                    >
                      Belum, Mau baca lagi
                    </Button>
                  </DialogActionTrigger>
                  <Button
                    onClick={() => {
                        // updateLevelFinish(nextMateri, true);
                        // updateLocalStorage(nextMateri);
                        // router.push('/');
                    }}
                  >
                    Sudah
                  </Button>
                </DialogFooter>
                <DialogCloseTrigger />
              </DialogContent>
            </DialogRoot>
          </Box>
        </Container>
    );
  }
}

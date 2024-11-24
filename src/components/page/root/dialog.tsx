import { HStack, Text } from "@chakra-ui/react";
import { Button } from "@/components/ui/button";
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

type DialogProps = {
  buttonText: string;
  title: string;
  body: string;
  buttonColor: string;
  size: object;
  maxW: number | string;
  dialogColor: string;
  showCancelButton: boolean;
  variant: "solid" | "subtle" | "surface" | "outline" | "ghost" | "plain";
  color: string;
};

export default function Dialog({
  buttonText,
  title,
  body,
  buttonColor, //eslint-disable-line
  size,
  maxW,
  dialogColor,
  showCancelButton,
  variant = "solid",
  color
}: DialogProps) {
  return (
    <HStack wrap="wrap" gap="4">
      <DialogRoot placement={"center"} motionPreset="slide-in-bottom">
        <DialogTrigger asChild>
          <Button bg={"blue.300"}  size={size} maxW={maxW} variant={variant} color={color} shadow={"sm"} opacity={0.7}>
            <Text fontWeight={"bold"}>{buttonText}</Text>
          </Button>
        </DialogTrigger>
        <DialogContent colorPalette={dialogColor} bgColor={"white"} color={"black"}>
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
          </DialogHeader>
          <DialogBody>
            <Text textStyle={"md"}>{body}</Text>
          </DialogBody>
          <DialogFooter>
            {(() => {
              if (showCancelButton) {
                return (
                  <DialogActionTrigger asChild>
                    <Button variant="solid">Tutup</Button>
                  </DialogActionTrigger>
                );
              }
            })()}
            <DialogActionTrigger asChild>
              <Button variant="solid">Okay</Button>
            </DialogActionTrigger>
          </DialogFooter>
          <DialogCloseTrigger />
        </DialogContent>
      </DialogRoot>
    </HStack>
  );
}

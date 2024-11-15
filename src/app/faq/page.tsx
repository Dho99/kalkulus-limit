import { Box, Text, Container, For } from "@chakra-ui/react";
import Sidenav from "@/components/page/materi/sidenav";
import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
} from "@/components/ui/accordion";

export default function Page() {
  // const items = [
  //     { value: "a", title: "First Item", text: "Some value 1..." },
  //     { value: "b", title: "Second Item", text: "Some value 2..." },
  //     { value: "c", title: "Third Item", text: "Some value 3..." },
  //   ]
  return (
    <Container mt={{ xl: "7%", lg: "7%", md: "8%", sm: "8%", base: "14%" }}>
      <Box mb={10}>
        <Text
          textStyle={"5xl"}
          color={"black"}
          justifyContent={"center"}
          display={"flex"}
          fontWeight={"bold"}
          textAlign={"center"}
          w="full"
        >
          Frequently Asked Questions
        </Text>
        <Text textStyle={"lg"} textAlign={"center"}>
          Pertanyaan yang sering ditanyakan
        </Text>
      </Box>

      <Container maxW={"80vw"}>
        <AccordionRoot collapsible>
          <For
            each={[
              {
                value: 1,
                q: "Apakah materinya legit ? ",
                a: "Tentu Saja! Kami mengambil dari beberapa sumber yang valid untuk menyusun materi ini",
              },
              {
                value: 2,
                q: "lorem Ipsum Dolor Sit Amet ?",
                a: "lorem Ipsum Dolor Sit Amet",
              },
              {
                value: 3,
                q: "lorem Ipsum Dolor Sit Amet ?",
                a: "lorem Ipsum Dolor Sit Amet",
              },
              {
                value: 4,
                q: "lorem Ipsum Dolor Sit Amet ?",
                a: "lorem Ipsum Dolor Sit Amet",
              },
              {
                value: 5,
                q: "lorem Ipsum Dolor Sit Amet ?",
                a: "lorem Ipsum Dolor Sit Amet",
              },
              {
                value: 6,
                q: "lorem Ipsum Dolor Sit Amet ?",
                a: "lorem Ipsum Dolor Sit Amet",
              },
              {
                value: 7,
                q: "lorem Ipsum Dolor Sit Amet ?",
                a: "lorem Ipsum Dolor Sit Amet",
              },
              {
                value: 8,
                q: "lorem Ipsum Dolor Sit Amet ?",
                a: "lorem Ipsum Dolor Sit Amet",
              },
              {
                value: 9,
                q: "lorem Ipsum Dolor Sit Amet ?",
                a: "lorem Ipsum Dolor Sit Amet",
              },
            ]}
          >
            {(item, index) => (
              <AccordionItem key={index} value={item.value} py={2}>
                <AccordionItemTrigger>
                  <Text fontWeight={"semibold"} textStyle={"lg"}>
                    {item.q}
                  </Text>
                </AccordionItemTrigger>
                <AccordionItemContent>{item.a}</AccordionItemContent>
              </AccordionItem>
            )}
          </For>
        </AccordionRoot>
      </Container>
    </Container>
  );
}

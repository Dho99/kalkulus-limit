import {
  Card,
  Container,
  Box,
  Text,
  For,
  SimpleGrid,
  Flex,
} from "@chakra-ui/react";
// import { Avatar } from "@/components/ui/avatar";
import Image from "next/image";

export default function Page() {
  return (
    <Container mt={{ xl: "7%", lg: "7%", md: "10%", sm: "10%", base: "14%" }}>
      <Box mb={10}>
        <Text
          textStyle={"5xl"}
          color={"white"}
          justifyContent={"center"}
          display={"flex"}
          fontWeight={"bold"}
          textAlign={"center"}
          w="full"
        >
          Kontributor Projek
        </Text>
        <Text textStyle={"lg"} textAlign={"center"} color={"white"} maxW="50vw" m="auto">
          Kami dari Kelompok 3 Kalkulus, mempersembahkan Projek ini dengan
          materi yang telah kami pelajari. Yaitu materi mengenai Fungsi Limit
        </Text>
      </Box>

      <Flex my={"30px"} justifyContent={"center"}>
        <SimpleGrid columns={{ xl: 4, lg: 4, md: 2, sm: 2, base: 1 }} gap={5}>
          <For
            each={[
              {
                nama: "Ridho Awwaludin",
                npm: 247006111014,
                kontribusi: "Programmer",
                imgSrc: "/Images/about/ridho.png",
              },
              {
                nama: "Briliant Arifin P. P.",
                npm: 247006111012,
                kontribusi: "UI / UX Designer",
                imgSrc: "/Images/about/briliant.png",
              },
              {
                nama: "Arum Rizky Ramadhani",
                npm: 247006111000,
                kontribusi: "Research Materi",
                imgSrc: "/Images/about/arum.png",
              },
              {
                nama: "Defan Ahmad Rubian",
                npm: 247006111013,
                kontribusi: "Dokumentasi",
                imgSrc: "/Images/about/defan.png",
              },
            ]}
          >
            {(item, index) => (
              <Card.Root
                width="fit-content"
                key={index}
                // bgColor={"yellow.300"}
                bgColor={"#3F72AF"}
                border={"0"}
                shadow={"lg"}
              >
                <Card.Body
                  gap="2"
                  rounded={"xl"}
                  p={4}
                  bgColor={"#3F72AF"}

                  color={"white"}
                  _hover={{shadow: "md"}}
                >
                  <Box rounded={"xl"} overflow={"hidden"}>
                    <Image
                      src={item.imgSrc}
                      width={220}
                      height={10}
                      alt={item.nama}
                    />
                  </Box>
                  <Card.Title mt="20px">
                    <Text textStyle={"md"}>{item.npm}</Text>
                  </Card.Title>
                  <Card.Title mt="-10px">
                    <Text textStyle={"xl"}>{item.nama}</Text>
                  </Card.Title>
                  <Card.Description color={"white"} mt={3}>
                    <Text textStyle={"lg"} fontWeight={"semibold"} bg={"blue.700"} textAlign={"center"} rounded={"lg"} p={2} shadow={"sm"}>{item.kontribusi}</Text>
                  </Card.Description>
                </Card.Body>
              </Card.Root>
            )}
          </For>
        </SimpleGrid>
      </Flex>

    </Container>
  );
}

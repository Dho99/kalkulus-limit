import { Card, Container, Box, Text, For, SimpleGrid, Flex } from "@chakra-ui/react";
import { Avatar } from "@/components/ui/avatar";
// import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <Container mt={{ xl: "7%", lg: "7%", md: "10%", sm: "10%", base: "14%" }}>
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
          Kontributor Projek
        </Text>
        <Text textStyle={"lg"} textAlign={"center"} maxW="50vw" m="auto">
          Kami dari Kelompok 3 Kalkulus, mempersembahkan Projek ini dengan materi yang telah kami pelajari. Yaitu materi mengenai Fungsi Limit
        </Text>
      </Box>

      <Flex my={"60px"} justifyContent={"center"}>
        <SimpleGrid columns={{xl: 4, lg: 4, md: 2, sm: 2, base: 1}} gap={5}>
          <For
            each={[
              {
                nama: "Ridho Awwaludin",
                npm: 247006111014,
                kontribusi: "Programmer",
              },
              {
                nama: "Brilliant Arifin P. P.",
                npm: 247006111012,
                kontribusi: "UI / UX Designer",
              },
              {
                nama: "Arum Rizky Ramadhani",
                npm: 247006111000,
                kontribusi: "Research Materi",
              },
              {
                nama: "Defan Ahmad Rubian",
                npm: 247006111000,
                kontribusi: "Dokumentasi",
              },
            ]}
          >
            {(item, index) => (
              <Card.Root width="320px" key={index}>
                <Card.Body gap="2">
                  <Avatar
                    src="https://picsum.photos/200/300"
                    name={item.nama}
                    size="lg"
                    shape="rounded"
                  />
                  <Card.Title mt="70px">{item.npm}</Card.Title>
                  <Card.Title mt="-10px">{item.nama}</Card.Title>
                  <Card.Description>{item.kontribusi}</Card.Description>
                </Card.Body>
              </Card.Root>
            )}
          </For>
        </SimpleGrid>
      </Flex>
    </Container>
  );
}

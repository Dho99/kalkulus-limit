"use client";
import { Container, Box, Text, Flex } from "@chakra-ui/react";
import { Table } from "@chakra-ui/react";

export default function Page() {
  const getFromLS: string | null | any = typeof window !== 'undefined' ? localStorage.getItem('history') : null;  //eslint-disable-line
  const items: any[] = JSON.parse(getFromLS); //eslint-disable-line

  const formatDate = (rawDate: string) => {
    let dateString: string = "";
    dateString = `${new Date(rawDate).toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    })}`;
    return dateString;
  };

  return (
    <Container mt={{ xl: "7%", lg: "7%", md: "10%", sm: "10%", base: "14%" }}>
      <Box mb={5}>
        <Text
          textStyle={"5xl"}
          color={"white"}
          justifyContent={"center"}
          display={"flex"}
          fontWeight={"bold"}
          textAlign={"center"}
          w="full"
        >
          Riwayat Latihan
        </Text>
      </Box>

      <Container
        border={"1px solid white"}
        rounded={"lg"}
        h={"fit-content"}
        p={5}
        shadow={"lg"}
        overflow={"hidden"}
      >
        <Table.ScrollArea borderWidth="1px" shadow={"md"} rounded={"lg"}>
          <Table.Root
            size="lg"
            variant="outline"
            bg={"blue.800"}
            color={"white"}
            interactive
            colorPalette={"blue"}
          >
            <Table.Header>
              <Table.Row bg={"blue.500"}>
                <Table.ColumnHeader textAlign={"center"}>
                  <Text textStyle={"md"}>Tanggal</Text>
                </Table.ColumnHeader>
                <Table.ColumnHeader textAlign={"center"}>
                  <Text textStyle={"md"}>Jawaban Benar</Text>
                </Table.ColumnHeader>
                <Table.ColumnHeader textAlign={"center"}>
                  <Text textStyle={"md"}>Jawaban Salah</Text>
                </Table.ColumnHeader>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {items ? (
                items.map((item, key) => (
                  <Table.Row key={key}>
                    <Table.Cell textAlign={"center"}>
                      {" "}
                      {formatDate(item.date)}
                    </Table.Cell>
                    <Table.Cell textAlign={"center"}>
                      {item.correctAnswer}
                    </Table.Cell>
                    <Table.Cell textAlign={"center"}>
                      {item.wrongAnswer}
                    </Table.Cell>
                  </Table.Row>
                ))
              ) : (
                <Table.Row>
                  <Table.Cell colSpan={3} textAlign={"center"}>
                    Belum ada Riwayat Latihan
                  </Table.Cell>
                </Table.Row>
              )}
            </Table.Body>
          </Table.Root>
        </Table.ScrollArea>
      </Container>

      <Flex my={"30px"} justifyContent={"center"}></Flex>
    </Container>
  );
}

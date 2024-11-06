import {Container, Flex, Box, Text} from "@chakra-ui/react"
import Sidenav from "@/components/page/materi/sidenav";

export default function Page() {
  return (
    <>
      <Container fluid={true} mt={"8%"} zIndex={2}>
        <Flex direction={"row"} gap={10}>
          <Sidenav content={"Konsep Dasar Limit"} />
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
              Konsep Dasar Limit Fungsi Aljabar
            </Text>

            <Box>
              <Box
                maxHeight={"59px"}
                overflow={"hidden"}
                justifyContent={"center"}
                margin={"auto"}
                maxW={"150px"}
                bg={"black"}
                rounded={"md"}
                alignItems={"center"}
                p={3}
              >
              </Box>
            </Box>

            <Box mt={"1000px"}>
              <section id="pengertian">
                <Text textStyle={"3xl"}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Similique enim quaerat nulla, nesciunt, quibusdam officiis
                  accusantium maxime sed possimus sapiente quisquam, quod
                  adipisci repudiandae ad assumenda odit neque deserunt dolorum
                  sint explicabo nisi nemo vitae ut voluptas! Nam culpa maiores
                  hic consequatur voluptates quibusdam fugiat delectus, aliquid
                  quaerat facere. Qui facilis delectus sit asperiores repellat
                  deleniti earum minima quam sint magnam eaque hic, fugiat sequi
                  molestiae expedita tempore quos distinctio? Corrupti enim
                  minus et laudantium nobis cumque obcaecati facere. Non nam
                  commodi, vitae illo, totam nulla, fugiat ex harum provident
                  tempore nostrum? Facere, nisi ipsa porro earum similique
                  dolorem voluptas!
                </Text>
              </section>
            </Box>
          </Box>
        </Flex>
      </Container>
    </>
  );
}

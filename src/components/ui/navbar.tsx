import { Box, Container, Link, Text } from "@chakra-ui/react";

export default function Navbar() {
  const navMenu: Array<String> = ["Item 1", "Item 2"];

  return (
    <Container pos="relative" maxW={"dvw"} backgroundColor={"white"}>
      <Box position={"fixed"} zIndex={"1"} left={0} shadow={"xs"}  backgroundColor={"blackAlpha.300"}>
        <Box flexDirection="row" w={"dvw"} px={{lg:10, base: 0}}>
          <Container display={"flex"} py={4} px={5} alignItems={"center"}>
            <Box flexBasis={"50%"}>
              <Link variant={"plain"} colorPalette={"cyan"} href="/">
                <Text textStyle="3xl" fontWeight="bold">
                  LearnLimit
                </Text>
              </Link>
            </Box>
            <Box
              flexBasis={"50%"}
              flexDirection="row"
              display={{ lg: "flex", base: "none" }}
              justifyContent={"right"}
            >
              {navMenu.map((menu, index) => {
                return (
                  <Box flexBasis={"10%"} key={index}>
                    <Link
                      color={{ base: "gray ", _hover: "black"}}
                      transition={"all 0.2s ease-in-out "}
                    >
                      <Text fontWeight={"semibold"}>{menu}</Text>
                    </Link>
                  </Box>
                );
              })}
            </Box>
          </Container>
        </Box>
      </Box>
    </Container>
  );
}

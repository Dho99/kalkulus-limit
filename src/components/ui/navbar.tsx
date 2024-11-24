"use client";

import { Box, Container, Link as ChakraUILinker, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import MenuDrawer from "../drawer";
import LatexRenderer from "../LatexRenderer";

export default function Navbar() {
  const router = useRouter();
  type NavItems = {
    href: string;
    navTitle: string;
    loading: boolean;
  };

  const navMenu: Array<NavItems> = [
    {
      navTitle: "Kalkulator",
      href: "/#kalkulator",
      loading: false,
    },
    {
      navTitle: "Materi",
      href: "/#materi",
      loading: false,
    },
    {
      navTitle: "Tentang",
      href: "/tentang",
      loading: true,
    },
  ];

  return (
    <Container pos="relative">
      <Box
       position="fixed"
       zIndex="3"
       left={0}
       right={0}
       mx={2}
       mt={2}
       backgroundColor="rgba(30, 64, 175, 0.85)" // blue.800 with opacity
       backdropFilter="auto"
       backdropBlur="8px"
       borderWidth="1px"
       borderColor="whiteAlpha.500"
       borderRadius="2xl"
       boxShadow="sm"
       width="calc(100vw - 40px)"
      >
        <Box flexDirection="row"  px={{ lg: 10, base: 0 }}>
          <Container display={"flex"} py={2} px={5} alignItems={"center"}>
            <Box flexBasis={"50%"}>
              <ChakraUILinker
                variant={"plain"}
                bg={"blue.200"}
                onClick={() => {
                  router.push("/");
                }}
                p={4}
                rounded={"full"}
                color={"blue"}
                shadow={"sm"}
              >
                <Text textStyle="3xl" fontWeight="bold">
                  <LatexRenderer expression={"\\lim_{x \\to n}f(x)"} inline={true} />
                </Text>
              </ChakraUILinker>
            </Box>
            <Box
              flexBasis={"50%"}
              flexDirection="row"
              display={{ lg: "flex", md: "flex", base: "none" }}
              justifyContent={"right"}
              gapX={1}
            >
              {navMenu.map((menu, index) => {
                return (
                  <Box
                    key={index}
                    _hover={{ bgColor: "blue.600" }}
                    py={3}
                    px={4}
                    m={0}
                    rounded={"lg"}
                    transition={"0.2s all"}
                  >
                    {(() => {
                      if (menu.loading) {
                        return (
                          <Link href={menu.href}>
                            <Text
                              fontWeight={"bold"}
                              style={{ color: "white" }}
                              textStyle={"lg"}
                            >
                              {menu.navTitle}
                            </Text>
                          </Link>
                        );
                      } else {
                        return (
                          <a href={menu.href}>
                            {" "}
                            <Text
                              fontWeight={"bold"}
                              style={{ color: "white" }}
                              textStyle={"lg"}
                            >
                              {menu.navTitle}
                            </Text>
                          </a>
                        );
                      }
                    })()}
                  </Box>
                );
              })}
            </Box>
            <MenuDrawer listMenu={navMenu} />
          </Container>
        </Box>
      </Box>
    </Container>
  );
}

"use client"

import { Box, Container, Link as ChakraUILinker, Text } from "@chakra-ui/react";
import Link from 'next/link' 
import {useRouter} from 'next/navigation';
import MenuDrawer from "../drawer";

export default function Navbar() {
  const router = useRouter();
  type NavItems = {
    href: string;
    navTitle: string;
  };


  const navMenu: Array<NavItems> = [
    {
      navTitle: "Sumber",
      href: "/materi/konsep-dasar-limit-fungsi-aljabar"
    },
    {
      navTitle: "Tentang",
      href: "/tentang"
    },
    {  
      navTitle: "Materi",
      href: "/konz1" 
    },
  ];

  return (
    <Container pos="relative">
      <Box
        position={"fixed"}
        zIndex={"3"}
        left={0}
        shadow={"sm"}
        backgroundColor={"blue.700"}
      >
        <Box flexDirection="row" w={"100vw"} px={{ lg: 10, base: 0 }}>
          <Container display={"flex"} py={4} px={5} alignItems={"center"}>
            <Box flexBasis={"50%"}>
              <ChakraUILinker variant={"plain"} colorPalette={"cyan"} onClick={() => {router.push('/')}}>
                <Text textStyle="3xl" fontWeight="bold">
                  LearnLimit
                </Text>
              </ChakraUILinker>
            </Box>
            <Box
              flexBasis={"50%"}
              flexDirection="row"
              display={{ lg: "flex", md: "flex", base: "none" }}
              justifyContent={"right"}
              gap={7}
            >
              {navMenu.map((menu, index) => {
                return (
                  <Box key={index}>
                    <Link
                      href={menu.href}
                    >
                      <Text fontWeight={"semibold"} style={{color: "white"}}>{menu.navTitle}</Text>
                    </Link>
                  </Box>
                );
              })}
            </Box>
            <MenuDrawer listMenu={navMenu}/>
          </Container>
        </Box>
      </Box>
    </Container>
  );
}

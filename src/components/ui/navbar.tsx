"use client"

import { Box, Container, Link as ChakraUILinker, Text } from "@chakra-ui/react";
import Link from 'next/link' 
import {useRouter} from 'next/navigation';

export default function Navbar() {
  const router = useRouter();
  type NavItems = {
    href: string;
    navTitle: string;
  };


  const navMenu: Array<NavItems> = [
    {
      navTitle: "Item 1",
      href: "/materi/konsep-dasar-limit-fungsi-aljabar"
    },
    {  
      navTitle: "Item 2",
      href: "/konz1" 
    },
  ];

  return (
    <Container pos="relative">
      <Box
        position={"fixed"}
        zIndex={"3"}
        left={0}
        shadow={"xs"}
        backgroundColor={"white"}
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
              display={{ lg: "flex", base: "none" }}
              justifyContent={"right"}
            >
              {navMenu.map((menu, index) => {
                return (
                  <Box flexBasis={"10%"} key={index}>
                    <Link
                      href={menu.href}
                    >
                      <Text fontWeight={"semibold"} style={{color: "black"}}>{menu.navTitle}</Text>
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

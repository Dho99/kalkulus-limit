"use client";

import { Button } from "@/components/ui/button";
import {
  DrawerActionTrigger,
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Link from "next/link";
import { Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";


type NavItems = {
  href: string;
  navTitle: string;
};

type NavArrayItems = {
  listMenu: Array<NavItems>;
};

export default function MenuDrawer({ listMenu }: NavArrayItems) {
  const [open, setOpen] = useState(false);
  return (
    <DrawerRoot open={open} onOpenChange={(e) => setOpen(e.open)}>
      <DrawerBackdrop />
      <DrawerTrigger asChild>
        <Button
          variant="solid"
          colorPalette={"yellow"}
          size="sm"
          display={{
            xl: "none",
            lg: "none",
            md: "none",
            sm: "block",
            base: "block",
          }}
          ms={"auto"}
        >
            <FiMenu/>
        </Button>
      </DrawerTrigger>
      <DrawerContent bg="white">
        <DrawerHeader>
          <DrawerTitle color={"black"}>Drawer Menu</DrawerTitle>
        </DrawerHeader>
        <DrawerBody>
          <Flex gapY={3} flexDirection={"column"} mx="-3">
            {listMenu.map((item, index) => (
              <Link href={item.href} key={index}>
                <Button
                  w="full"
                  colorPalette={"yellow"}
                  variant={"solid"}
                  shadow="xs"
                  onClick={() => setOpen(false)}
                >
                  <Text me={"auto"} display="flex">
                    {item.navTitle}
                  </Text>
                </Button>
              </Link>
            ))}
          </Flex>
        </DrawerBody>
        <DrawerCloseTrigger />
      </DrawerContent>
    </DrawerRoot>
  );
}

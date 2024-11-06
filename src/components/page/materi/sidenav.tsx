"use client";

import { Box, Flex, Menu } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import sidenav from "../../../../public/sidenav.module.css";

interface SidenavProps {
  content: string;
}

export default function Sidenav({ content }: SidenavProps) {
  const prefixPageUrls = "/materi/konsep-dasar-limit-fungsi-aljabar";
  const currLoc = usePathname();

  type MenuContent = {
    menuSelection: string[];
    menuLink: string[];
    sections: string[];
  };

  type Menus = {
    konsepDasar: Array<MenuContent>;
  };

  let menus: Array<MenuContent> = [];

  const menuElements: Array<Menus> = [
    {
      konsepDasar: [
        {
          menuSelection: ["Konsep Dasar", "Menentukan Nilai Limit"],
          menuLink: [
            prefixPageUrls,
            `${prefixPageUrls}/menentukan-nilai-limit`,
          ],
          sections: ["Pengertian"],

        },
      ],
    },
  ];

  switch (content) {
    case "Konsep Dasar Limit":
      menus.push(menuElements[0].konsepDasar[0]);
      break;
  }

  return (
    <>
      <Box flexBasis={"20%"} borderRight={"2px solid"} minH={"svh"} pt={8}>
        <Flex
          direction={"column"}
          gap={2}
          pos={{ xl: "fixed", lg: "relative" }}
          ms={"-10px"}
        >
          {menus[0].menuSelection.map((item, key) => {
            return (
              <>
                <Link
                  key={key}
                  href={menus[0].menuLink[key]}
                  className={
                    currLoc == menus[0].menuLink[key]
                      ? sidenav.active
                      : sidenav.basic
                  }
                >
                  {key + 1} . {item}
                </Link>
              </>
            );
          })}
        </Flex>
      </Box>
    </>
  );
}

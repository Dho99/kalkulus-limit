"use client";

import { Box, Flex, Button } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import sidenav from "../../../../public/sidenav.module.css";
import { useState } from "react";

interface SidenavProps {
  content: string;
}

export default function Sidenav({ content }: SidenavProps) {
  const prefixPageUrls = "/materi";
  const currLoc = usePathname();

  type MenuContent = {
    menuSelection: string[];
    menuLink: string[];
    sections: string[];
  };

  type Menus = {
    konsepDasar: Array<MenuContent>;
    limitSukuBanyak: Array<MenuContent>;
  };

  let menus: Array<MenuContent> = [];

  const menuElements: Array<Menus> = [
    {
      konsepDasar: [
        {
          menuSelection: ["Konsep Dasar", "Menentukan Nilai Limit"],
          menuLink: [
            `${prefixPageUrls}/konsep-dasar-limit-fungsi-aljabar`,
            `${prefixPageUrls}/konsep-dasar-limit-fungsi-aljabar/menentukan-nilai-limit`,
          ],
          sections: ["Pengertian"],
        },
      ],
      limitSukuBanyak: [
        {
          menuSelection: ["Pengertian"],
          menuLink: [
            `${prefixPageUrls}/limit-suku-banyak`,
          ],
          sections: ["Pengertian"],
        },
      ]
    },
  ];

  

  switch (content) {
    case "Konsep Dasar Limit":
      menus = [];
      menus.push(menuElements[0].konsepDasar[0]);
      break;
    case "Limit Suku Banyak":
      menus = [];
      menus.push(menuElements[0].limitSukuBanyak[0]);
      break;
  }

  const [sidebarPos, setSidebarPos] = useState(false);

  return (
    <>
      <Box
        position={"absolute"}
        display={{ lg: "none", sm: "block", base: "block" }}
        left={sidebarPos ? 230 : 0}
        top={70}
      >
        <Button
          type="button"
          position={"fixed"}
          zIndex={11}
          shadow={"sm"}
          onClick={() => {
            setSidebarPos(!sidebarPos);
          }}
        >
          {sidebarPos ? "show" : "hidden"}
        </Button>
      </Box>
      <Box
        marginLeft={"-10px"}
        flexBasis={"22%"}
        minW={"200px"}
        borderRight={"2px solid"}
        minH={"dvh"}
        pt={{lg: 8, md: 0, sm: 0, base: 0}}
        display={{
          lg: "block",
          md: sidebarPos ? "block" : "none",
          sm: sidebarPos ? "block" : "none",
          base: sidebarPos ? "block" : "none",
        }}
        position={{lg: "relative" , md: sidebarPos ? "fixed" : "relative", sm: sidebarPos ? "fixed" : "relative",  base: sidebarPos ? "fixed" : "relative"}}
        backgroundColor={"white"}
        zIndex={10}
      >
        <Flex
          direction={"column"}
          gap={2}
          pos={{ xl: "fixed", lg: "relative" }}
          ms={"7px"}
          me={{ sm: "10px", base: "10px" }}
          pe={{lg: 2}}
        >
          <Box
            as="ul"
            listStyleType={"circle"}
            display={"inline-flex"}
            flexDirection={"column"}
            gapY={2}
            mt={{lg: 0, sm: 10}}
          >
            {menus[0].menuSelection.map((item, key) => {
              return (
                <Box as="li" key={key}>
                  <Link
                    href={menus[0].menuLink[key]}
                    className={
                      currLoc == menus[0].menuLink[key]
                        ? sidenav.active
                        : sidenav.basic
                    }
                  >
                    {item}
                  </Link>
                </Box>
              );
            })}
          </Box>
        </Flex>
      </Box>
    </>
  );
}

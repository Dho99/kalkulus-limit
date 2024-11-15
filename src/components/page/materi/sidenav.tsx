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
    limitFungsiTrigonometri: Array<MenuContent>;
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
          menuSelection: ["Pengertian", "Latihan"],
          menuLink: [
            `${prefixPageUrls}/limit-suku-banyak`,
            `${prefixPageUrls}/limit-suku-banyak/latihan`,
          ],
          sections: ["Pengertian"],
        },
      ],
      limitFungsiTrigonometri: [
        {
          menuSelection: ["Pengertian", "Menentukan Nilai", "Bentuk Istimewa"],
          menuLink: [
            `${prefixPageUrls}/limit-fungsi-trigonometri`,
            `${prefixPageUrls}/limit-fungsi-trigonometri/menentukan-nilai-limit-fungsi-trigonometri`,
            `${prefixPageUrls}/limit-fungsi-trigonometri/bentuk-umum`,
            // `${prefixPageUrls}/limit-suku-banyak/latihan`,
          ],
          sections: ["Pengertian"],
        },
      ],
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
    case "Limit Fungsi Trigonometri":
      menus = [];
      menus.push(menuElements[0].limitFungsiTrigonometri[0]);
      break;
  }

  const [sidebarPos, setSidebarPos] = useState(false);

  return (
    <>
      <Box
        position={"absolute"}
        display={{ lg: "none", sm: "block", base: "block" }}
        left={sidebarPos ? {md: 220, sm: 210, base: 250} : {md: -2, sm: -1, base: 2}}
        top={-2}
      >
        <Button
          type="button"
          position={"fixed"}
          zIndex={8}
          shadow={"sm"}
          onClick={() => {
            setSidebarPos(!sidebarPos);
          }}
        >
          {!sidebarPos ? "show" : "hide"}
        </Button>
      </Box>
      <Box
        marginLeft={"-10px"}
        flexBasis={"22%"}
        minW={"200px"}
        borderRight={"2px solid"}
        minH={"dvh"}
        mt={{xl: -5, lg: -8, md: -10, sm: -10, base: -10}}
        pt={{xl: 8, lg: 8, md: 0, sm: 0, base: 5}}
        px={{xl: 0, lg: 0, md: 0, sm: 0, base:5}}
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

"use client";

import { Box, Flex, Button, Text } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import sidenav from "../../../../public/sidenav.module.css";
import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

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
    limitSepihak: Array<MenuContent>;
    limitTakHingga: Array<MenuContent>;
  };

  let menus: Array<MenuContent> = [];

  const menuElements: Array<Menus> = [
    {
      konsepDasar: [
        {
          menuSelection: ["Konsep Dasar", "Menentukan Nilai", "Aplikasi Limit", "Contoh Aplikasi", "Mini Quiz"],
          menuLink: [
            `${prefixPageUrls}/konsep-dasar-limit-fungsi-aljabar`,
            `${prefixPageUrls}/konsep-dasar-limit-fungsi-aljabar/menentukan-nilai-limit`,
            `${prefixPageUrls}/konsep-dasar-limit-fungsi-aljabar/aplikasi-fungsi-limit`,
            `${prefixPageUrls}/konsep-dasar-limit-fungsi-aljabar/aplikasi-fungsi-limit/contoh`,
            `${prefixPageUrls}/konsep-dasar-limit-fungsi-aljabar/mini-quiz`,
          ],
          sections: ["Pengertian"],
        },
      ],
      limitSukuBanyak: [
        {
          menuSelection: ["Pengertian", "Mini Quiz"],
          menuLink: [
            `${prefixPageUrls}/limit-suku-banyak`,
            `${prefixPageUrls}/limit-suku-banyak/mini-quiz`,
          ],
          sections: ["Pengertian"],
        },
      ],
      limitFungsiTrigonometri: [
        {
          menuSelection: ["Pengertian", "Menentukan Nilai", "Bentuk Istimewa", "Mini Quiz"],
          menuLink: [
            `${prefixPageUrls}/limit-fungsi-trigonometri`,
            `${prefixPageUrls}/limit-fungsi-trigonometri/menentukan-nilai-limit-fungsi-trigonometri`,
            `${prefixPageUrls}/limit-fungsi-trigonometri/bentuk-umum`,
            `${prefixPageUrls}/limit-fungsi-trigonometri/mini-quiz`,
          ],
          sections: ["Pengertian"],
        },
      ],
      limitSepihak : [
        {
          menuSelection: ["Pengertian", "Contoh", "Mini Quiz"],
          menuLink: [
            `${prefixPageUrls}/limit-sepihak`,
            `${prefixPageUrls}/limit-sepihak/contoh`,
            `${prefixPageUrls}/limit-sepihak/mini-quiz`,
          ],
          sections: ["Pengertian"],
        },
      ],
      limitTakHingga : [
        {
          menuSelection: ["Pengertian", "Mini Quiz"],
          menuLink: [
            `${prefixPageUrls}/limit-tak-hingga`,
            `${prefixPageUrls}/limit-tak-hingga/mini-quiz`,
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
    case "Limit Sepihak":
      menus = [];
      menus.push(menuElements[0].limitSepihak[0]);
      break;
    case "Limit Tak Hingga":
      menus = [];
      menus.push(menuElements[0].limitTakHingga[0]);
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
        opacity={sidebarPos ? 1 : 0.75}
        zIndex={15}
      >
        <Button
          type="button"
          position={"fixed"}
          shadow={"sm"}
          colorPalette={"blue"}
          onClick={() => {
            setSidebarPos(!sidebarPos);
          }}
        >
          {!sidebarPos ? <FaChevronRight/> : <IoClose />}
        </Button>
      </Box>
      <Box
        marginLeft={"-30px"}
        flexBasis={"22%"}
        minW={"200px"}
        rounded={"xl"}
        // borderRight={"2px solid"}
        
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
        position={{xl: "relative", lg: "relative" , md: sidebarPos ? "fixed" : "relative", sm: sidebarPos ? "fixed" : "relative",  base: sidebarPos ? "fixed" : "relative"}}
        backgroundColor={"blue.800"}
        zIndex={10}
      >
        <Flex
          direction={"column"}
          gap={2}
          // pos={{ xl: "fixed", lg: "relative" }}
          ms={"8px"}
          me={{ sm: "10px", base: "10px" }}
          pe={{lg: 2}}
        >
          <Box
            as="ul"
            display={"inline-flex"}
            flexDirection={"column"}
            gapY={2}
            mt={{lg: 0, sm: 10}}
            ms={3}
            // mx={-1}
          >
            {menus[0].menuSelection.map((item, key) => {
              if(currLoc == menus[0].menuLink[key]){
                return (
                  <Button as="li" key={key} justifyContent={"start"} colorPalette={"blue"} variant={"solid"}>
                    <Link
                      href={menus[0].menuLink[key]}
                      className={sidenav.active}
                    >
                      <Text display={"flex"} textOverflow={"clip"}>
                        <Text me={2}>{key+1}.</Text>{item}  
                      </Text>
                    </Link>
                  </Button>
                );
              }else{
                return (
                  <Button as="li" key={key} justifyContent={"start"} variant={"solid"}>
                    <Link
                      href={menus[0].menuLink[key]}
                      className={sidenav.basic}
                    >
                      <Text display={"flex"} textOverflow={"clip"} textStyle={"md"}>
                        <Text me={2}>{key+1}.</Text>{item}  
                      </Text>
                    </Link>
                  </Button>
                )
              }
            })}
          </Box>
        </Flex>
      </Box>
    </>
  );
}

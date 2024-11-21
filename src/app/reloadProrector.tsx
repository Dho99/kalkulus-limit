"use client";
import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useContext } from "react";
import { QuizContext } from "./quiz-context";

export default function ReloadProtector() {
  const prefixPageUrls = "/materi";
  const currPathname = usePathname();
  const level = useContext(QuizContext);

  type Endpoints = {
    endPoints: string;
    level: boolean;
  };


  const menuElements: Array<Endpoints> = [
    {
      endPoints: `${prefixPageUrls}/konsep-dasar-limit-fungsi-aljabar`,
      level: level.levelFinish.konsepDasar.open,
    },
    {
      endPoints: `${prefixPageUrls}/konsep-dasar-limit-fungsi-aljabar/menentukan-nilai-limit`,
      level: level.levelFinish.konsepDasar.open,
    },
    {
      endPoints: `${prefixPageUrls}/limit-suku-banyak`,
      level: level.levelFinish.sukuBanyak.open,
    },
    {
      endPoints: `${prefixPageUrls}/limit-suku-banyak/latihan`,
      level: level.levelFinish.sukuBanyak.open,
    },
    {
      endPoints: `${prefixPageUrls}/limit-fungsi-trigonometri`,
      level: level.levelFinish.trigonometri.open,
    },
    {
      endPoints: `${prefixPageUrls}/limit-fungsi-trigonometri/menentukan-nilai-limit-fungsi-trigonometri`,
      level: level.levelFinish.trigonometri.open,
    },
    {
      endPoints: `${prefixPageUrls}/limit-fungsi-trigonometri/bentuk-umum`,
      level: level.levelFinish.trigonometri.open,
    },

  ];

  const router = useRouter();
  useEffect(() => {
    menuElements.map((item) => {
      if (item.endPoints == currPathname && item.level == false) {
        router.push("/");
      }
    });
  }, [router]); //eslint-disable-line

  return null;
}

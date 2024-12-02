"use client";

import { createContext, useState } from "react";


const localValue: string | null = typeof window !== 'undefined' ? localStorage.getItem('progress') : null;
const parsedValue = localValue ? JSON.parse(localValue) : null;


type ObjType = {
  konsepDasar: {
    open: boolean;
    finish: boolean;
  },
  sepihak: {
    open: boolean;
    finish: boolean;
  },
  sukuBanyak: {
    open: boolean;
    finish: boolean;
  },
  takHingga: {
    open: boolean;
    finish: boolean;
  },
  trigonometri: {
    open: boolean;
    finish: boolean;
  },
  exercise: {
    open: boolean;
    finish: boolean;
  },

}

const initialLevelFinish: ObjType = {
  konsepDasar: {
    open: parsedValue && parsedValue.konsepDasar.open ? parsedValue.konsepDasar.open : true,
    finish: parsedValue && parsedValue.konsepDasar.finish ? parsedValue.konsepDasar.finish : false,
  },

  sepihak: {
    open: parsedValue && parsedValue.sepihak.open ? parsedValue.sepihak.open : false,
    finish: parsedValue && parsedValue.sepihak.finish ? parsedValue.sepihak.finish : false,
  },
  sukuBanyak: {
    open: parsedValue && parsedValue.sukuBanyak.open ? parsedValue.sukuBanyak.open : false,
    finish: parsedValue && parsedValue.sukuBanyak.finish ? parsedValue.sukuBanyak.finish : false,
  },
  takHingga: {
    open: parsedValue && parsedValue.takHingga.open ? parsedValue.takHingga.open : false,
    finish: parsedValue && parsedValue.takHingga.finish ? parsedValue.takHingga.finish : false,
  },
  trigonometri: {
    open: parsedValue && parsedValue.trigonometri.open ? parsedValue.trigonometri.open : false,
    finish: parsedValue && parsedValue.trigonometri.finish ? parsedValue.trigonometri.finish : false,
  },
  exercise: {
    open: parsedValue && parsedValue.exercise.open ? parsedValue.exercise.open : false,
    finish: parsedValue && parsedValue.exercise.finish ? parsedValue.exercise.finish : false,
  },
};


export const QuizContext = createContext({
  levelFinish: initialLevelFinish ,
  updateLevelFinish: (key: string, value: boolean) => {} //eslint-disable-line
});

export default function QuizProvider({
  children,
}: {
  children: React.ReactNode;
  
}) {
  const [levelFinish, setLevelFinish] = useState(initialLevelFinish);
  const updateLevelFinish = (key: string, value: boolean) => {
    setLevelFinish((prev) => ({
      ...prev,
      [key]: value,
    }));
  };
  return (
    <QuizContext.Provider value={{ levelFinish, updateLevelFinish }}>
      {children}
    </QuizContext.Provider>
  );
}

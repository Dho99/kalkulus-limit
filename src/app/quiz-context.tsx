"use client";

import { createContext, useState } from "react";


const localValue: string | null = typeof window !== 'undefined' ? localStorage.getItem('progress') : null;
const parsedValue = localValue ? JSON.parse(localValue) : null;

const initialLevelFinish = {
  konsepDasar: parsedValue && parsedValue.konsepDasar ? parsedValue.konsepDasar : true,
  sukuBanyak: parsedValue && parsedValue.sukuBanyak ? parsedValue.sukuBanyak : false,
  trigonometri: parsedValue && parsedValue.trigonometri ? parsedValue.trigonometri : false,
};

// const initialLevelFinish = {
//   konsepDasar: true,
//   sukuBanyak: false,
//   trigonometri: false
// }


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

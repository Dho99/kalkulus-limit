"use client";

import { createContext } from "react";

const levelFinish = {
  konsepDasar: false,
  sukuBanyak: false,
  trigonometri: false,
};

export const QuizContext = createContext(levelFinish);

export default function QuizProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QuizContext.Provider value={levelFinish}>{children}</QuizContext.Provider>
  );
}

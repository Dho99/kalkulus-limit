"use client"

import React from "react";
import "katex/dist/katex.min.css";
import TeX from "@matejmazur/react-katex";

interface LatexRendererProps {
  expression: string;
  inline?: boolean;
}

const LatexRenderer: React.FC<LatexRendererProps> = ({
  expression,
  inline = false,
}) => {
  return <TeX math={expression} block={inline ? true : false}/>;
};

export default LatexRenderer;

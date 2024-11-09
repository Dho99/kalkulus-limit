"use client"

import React from "react";
import "katex/dist/katex.min.css";
import TeX from "@matejmazur/react-katex";
import { Box } from "@chakra-ui/react";

interface LatexRendererProps {
  expression: string;
  inline?: boolean;
}

const LatexRenderer: React.FC<LatexRendererProps> = ({
  expression,
  inline = false,
}) => {
  return (
    <Box my={-2}>
      <TeX math={expression} block={inline ? false : true}/>
    </Box>
  );
};

export default LatexRenderer;

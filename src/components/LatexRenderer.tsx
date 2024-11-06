import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';

interface LatexRendererProps {
  expression: string;
  inline?: boolean;
}

const LatexRenderer: React.FC<LatexRendererProps> = ({ expression, inline = false }) => {
  return inline ? (
    <InlineMath>{expression}</InlineMath>
  ) : (
    <BlockMath>{expression}</BlockMath>
  );
};

export default LatexRenderer;

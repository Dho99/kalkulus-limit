declare global {
  namespace JSX {
    interface IntrinsicElements {
      "math-field": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        onInput?: (event: CustomEvent) => void; // Tambahkan event handler khusus jika diperlukan
      };
    }
  }
}

import "mathlive";
import { useState, useEffect, useRef, Dispatch, SetStateAction } from "react";
import nerdamer from "nerdamer"
require('nerdamer/all'); //eslint-disable-line

interface KeyboardProps{
  inputKey: string,
  handleInput: (key: string, value: string) => void;
}


function VirtualKeyboard({inputKey, handleInput}: KeyboardProps) {
  const mf: any = useRef();
  // Customize the mathfield when it is created
  useEffect(() => {
    mf.current.mathVirtualKeyboardPolicy = "manual";

    mf.current.addEventListener("focusin", (evt: any) =>
      window.mathVirtualKeyboard.show()
    );

    mf.current.addEventListener("focusout", (evt: any) =>
      window.mathVirtualKeyboard.hide()
    );

  }, []);

  const setValue = (value: string) => {
    const parsedValue = nerdamer.convertFromLaTeX(value).toString();
    handleInput(inputKey, parsedValue);
    // alert(parsedValue)
  }

  return (
    <>
      <math-field 
        ref={mf}
        onInput={(evt: any)=> setValue(evt.target.value)}
        style={{minWidth: "100%"}}
      >
      </math-field>
        Value : {inputKey}
    </>
  );
 
}

export default VirtualKeyboard;

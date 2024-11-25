import { useEffect, useRef } from 'react';
import React from 'react';


// Deklarasi tipe untuk props
interface MathKeyboardProps {
  onChange?: (value: string) => void;
  initialValue?: string;
  className?: string;
}

const MathKeyboard = React.memo(({ onChange, initialValue = '', className = '' }: MathKeyboardProps) =>  {
  const mathfieldRef = useRef<HTMLDivElement>(null);
  // const mathValueRef = useRef<string>(initialValue);
    
    useEffect(() => {
      let mathfield: any = null;
      
      const initMathField = async () => {
        if (!mathfieldRef.current) return;
        
        while (mathfieldRef.current.firstChild) {
          mathfieldRef.current.removeChild(mathfieldRef.current.firstChild);
        }
        // Dynamic import
        const { MathfieldElement } = await import('mathlive');
        
        // Register custom element jika belum terdaftar
        if (!customElements.get('math-field')) {
          customElements.define('math-field', MathfieldElement);
        }
  
        mathfield = new MathfieldElement();
        
        // Konfigurasi mathfield
        mathfield.setValue(initialValue);
        mathfield.setOptions({
          virtualKeyboardMode: 'auto',
          virtualKeyboards: 'all',
          virtualKeyboardTheme: 'material',
          virtualKeyboardLayout: 'qwerty',
        });
        
        // mathfield = new Audio()
  
        // Event handler
        mathfield.addEventListener('input', () => {
          const value = mathfield.value;
          // mathValueRef.current = value; // Update ref dengan nilai terbaru
          onChange?.(value);
       });
  
        // Append ke DOM
        mathfieldRef.current.appendChild(mathfield);
      };
  
      initMathField();
  
    }, []); // Dependency array yang minimal
  
    return <div ref={mathfieldRef} className="math-keyboard-container" />; 
  });
  
  export default MathKeyboard;
import React, { useState, useRef, useEffect } from 'react';

const InputText = () => {
  const [inputText, setInputText] = useState('');
  const prevInputText = useRef('');

  const getInput = (e) => {
    setInputText(e.target.value);
    // console.log(inputText);
  };

  useEffect(() => {
    // console.log(inputText);
    prevInputText.current = inputText;
    // console.log(prevInputText.current);
  }, [inputText]);

  return (
    <>
      <div>
        <label htmlFor="text-input">Introduzca un texto: </label>
        <input
          type="text"
          name="text-input"
          id="text-input"
          placeholder="Input a text"
          onChange={(e) => getInput(e)}
        />
      </div>
      <div>
        <h2>Current Value: {inputText}</h2>
        <h2>Previous Value: {prevInputText.current}</h2>

        {/* Se renderiza antes de ejecutar el useEffect. El hook useEffect se ejecuta después del render del DOM. El useRef persiste el valor anterior. */}
      </div>
    </>
  );
};

export default InputText;

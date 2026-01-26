import { useState } from "react";
export default function ColorInput({ id, defaultValue, handleValue }) {
  const [inputValue, setInputValue] = useState(defaultValue);
  function handleInputValue(event) {
    setInputValue(event.target.value);
    handleValue(event.target);
  }
  return (
    <>
      <input
        type="text"
        id={id}
        name={id}
        value={inputValue}
        onChange={handleInputValue}
      />
      <input
        type="color"
        name={id}
        value={inputValue}
        onChange={handleInputValue}
      />
    </>
  );
}

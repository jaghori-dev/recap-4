import { useState, useEffect } from "react";
export default function ColorInput({
  id,
  name = id,
  defaultValue,
  handleValue,
}) {
  const [inputValue, setInputValue] = useState(defaultValue);
  useEffect(() => {
    setInputValue(defaultValue);
  }, [defaultValue]);
  function handleInputValue(event) {
    const { value } = event.target;
    setInputValue(value);
    if (handleValue) {
      handleValue({ name, value });
    }
  }
  return (
    <>
      <input
        type="text"
        id={id}
        name={name}
        value={inputValue}
        onChange={handleInputValue}
      />
      <input
        type="color"
        id={id}
        name={name}
        value={inputValue}
        onChange={handleInputValue}
      />
    </>
  );
}

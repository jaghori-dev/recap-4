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
      <input className="w-60 h-11 bg-slate-400 rounded-xl px-4 text-lg relative"
        type="text"
        id={id}
        name={name}
        value={inputValue}
        onChange={handleInputValue}
      />
      <input className="h-9 bg-slate-400 absolute right-1 top-8"
        type="color"
        id={id}
        name={name}
        value={inputValue}
        onChange={handleInputValue}
      />
    </>
  );
}

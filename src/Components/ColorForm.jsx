import { useState } from "react";
import Form from "./Form";

export default function ColorForm({
  onSubmitColor,
  initialData = { role: "some color", hex: "#123456", contrastText: "#f5f4f4" },
}) {
  const [color, setColor] = useState(initialData.hex);
  const [textColor, setTextColor] = useState(initialData.contrastText);
  function handleValue(colorInput) {
    const { name, value } = colorInput;
    if (name === "hex") {
      setColor(value);
    }
    if (name === "contrastText") {
      setTextColor(value);
    }
  }
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    setColor(data.hex);
    onSubmitColor(data);
  }

  return (
    <Form
      onSubmit={handleSubmit}
      role={initialData.role}
      color={initialData.hex}
      contrast={initialData.contrastText}
      btnText="ADD Color"
      bgc={color}
      txtColor={textColor}
      handleValue={handleValue}
    />
  );
}

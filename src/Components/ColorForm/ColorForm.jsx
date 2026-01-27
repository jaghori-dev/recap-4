import { useState } from "react";
import ColorInput from "../ColorInput";
import "./ColorForm.css";

export default function ColorForm({
  onSubmitColor,
  initialData = { role: "some color", hex: "#123456", contrastText: "#ffffff" },
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
    <form
      className="color-form"
      onSubmit={handleSubmit}
      style={{ backgroundColor: color, color: textColor }}
    >
      <label htmlFor="role">
        Role
        <br />
        <input
          type="text"
          id="role"
          name="role"
          defaultValue={initialData.role}
        />
      </label>
      <br />
      <label htmlFor="hex">
        Hex
        <br />
        <ColorInput
          id="hex"
          defaultValue={initialData.hex}
          handleValue={handleValue}
        />
      </label>
      <br />
      <label htmlFor="contrastText">
        Contrast Text
        <br />
        <ColorInput
          id="contrastText"
          defaultValue={initialData.contrastText}
          handleValue={handleValue}
        />
      </label>
      <br />
      <button>ADD COLOR</button>
    </form>
  );
}

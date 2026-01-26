import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";
import ColorForm from "./Components/Color/ColorForm/ColorForm";
import { useState } from "react";
import { uid } from "uid";

function App() {
  const [data, setData] = useState(initialColors);
  function onSubmitColor(input) {
    setData([{ id: uid(2), ...input }, ...data]);
  }
  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onSubmitColor={onSubmitColor} />
      {data.map((color) => {
        return (
          <Color
            key={color.id}
            color={color.hex}
            role={color.role}
            contrast={color.contrastText}
          />
        );
      })}
    </>
  );
}

export default App;

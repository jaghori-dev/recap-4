import { initialColors } from "./lib/colors";
import Color from "./Components/Color/ColorCard";
import "./App.css";
import ColorForm from "./Components/ColorForm/ColorForm";
import { useState } from "react";
import { uid } from "uid";

function App() {
  const [data, setData] = useState(initialColors);
  function onSubmitColor(input) {
    setData([{ id: uid(2), ...input }, ...data]);
  }
  function deleteCard(id) {
    const newData = data.filter((card) => card.id !== id);
    setData(newData);
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
            handleDelete={() => deleteCard(color.id)}
          />
        );
      })}
    </>
  );
}

export default App;

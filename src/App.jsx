import { initialColors } from "./lib/colors";
import ColorCard from "./Components/Color/ColorCard";
import "./App.css";
import ColorForm from "./Components/ColorForm/ColorForm";
import { uid } from "uid";
import {useLocalStorage } from "@uidotdev/usehooks";

function App() {
  const [data, setData] = useLocalStorage("localData", initialColors);
  function onSubmitColor(input) {
    setData([{ id: uid(2), ...input }, ...data]);
  }
  function handleEdit(id, updatedData) {
    console.log(id, updatedData);
    setData((prevData) =>
      prevData.map((card) =>
        card.id === id
          ? {
              ...card,
              role: updatedData.role,
              hex: updatedData.hex,
              contrastText: updatedData.contrastText,
            }
          : card,
      ),
    );
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
          <ColorCard
            key={color.id}
            id={color.id}
            color={color.hex}
            role={color.role}
            contrast={color.contrastText}
            handleDelete={() => deleteCard(color.id)}
            handleEdit={handleEdit}
            
          /> 
          
        );
      })}
    </>
  );
}

export default App;

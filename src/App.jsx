import { initialColors } from "./lib/colors";
import ColorCard from "./Components/ColorCard";
import ColorForm from "./Components/ColorForm";
import { uid } from "uid";
import { useLocalStorage } from "@uidotdev/usehooks";
import { useState } from "react";

function App() {
  const [data, setData] = useLocalStorage("localData", initialColors);
  const [isFormVisible, setIsFormVisible] = useState(false);
  
  function addFormVisible() {
    setIsFormVisible((prev) => !prev);
  }
  function onSubmitColor(input) {
    setData([{ id: uid(6), isFavorite: false, ...input }, ...data]);
    setIsFormVisible((prev) => !prev);
  }
  const favColors = data.filter(({ isFavorite }) => isFavorite).length;

  function handleEdit(id, updatedData) {
    // console.log(id, updatedData);
    setData((prevData) =>
      prevData.map((card) => (card.id === id ? { id, ...updatedData } : card)),
    );
  }
  function deleteCard(id) {
    setData(data.filter((card) => card.id !== id));
  }
  function toggleFavorite(id) {
    setData(
      data.map((card) =>
        id === card.id ? { ...card, isFavorite: !card.isFavorite } : card,
      ),
    );
  }
  if (data.length === 0) { return <h1>there is no color card lets add some</h1> }
  return (
    <>
      <div className="h-120 flex flex-col items-center bg-slate-00">
        
        <h1 className="text-4xl text-black font-bold m-4">Theme Creator</h1>
        {isFormVisible ? (
          <ColorForm onSubmitColor={onSubmitColor} />
        ) : (
          <span
            className="w-70 h-12 bg-slate-600 text-lg flex justify-center  items-center rounded-md cursor-pointer"
            onClick={addFormVisible}
          >
            Add color card
          </span>
        )}
      </div>
      <ul className="flex gap-5 justify-center flex-wrap ">
        {data.map((color) => {
          return (
            <li key={color.id}>
              <ColorCard
                id={color.id}
                color={color.hex}
                role={color.role}
                contrast={color.contrastText}
                handleDelete={() => deleteCard(color.id)}
                handleEdit={handleEdit}
                isFavorite={color.isFavorite}
                toggleFavorite={() => toggleFavorite(color.id)}
              />
            </li>
          );
        })}
      </ul>
      <h2 className="text-4xl text-black font-bold m-4">
        {" "}
        your favorite colors {favColors}
      </h2>
    </>
  );
}

export default App;

import { initialColors } from "./lib/colors";
import ColorCard from "./Components/ColorCard";
import ColorForm from "./Components/ColorForm";
import { uid } from "uid";
import { useLocalStorage } from "@uidotdev/usehooks";

function App() {
  const [data, setData] = useLocalStorage("localData", initialColors);
  function onSubmitColor(input) {
    setData([{ id: uid(2), ...input }, ...data]);
  }
  function handleEdit(id, updatedData) {
    // console.log(id, updatedData);
    setData((prevData) =>
      prevData.map((card) => (card.id === id ? {...card,updatedData} : card)),
    );
  }
  function deleteCard(id) {
    setData(data.filter((card) => card.id !== id));
  }
  return (
    <>
      <div className="h-120 flex flex-col items-center bg-slate-00">
        <h1 className="text-4xl font-bold m-4">Theme Creator</h1>
        <ColorForm onSubmitColor={onSubmitColor} />
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
              />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;

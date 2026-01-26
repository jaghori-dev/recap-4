import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";

function App() {
  return (
    <>
      {initialColors.map((color) => {
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

import ColorInput from "./ColorInput";
import "./Color/ColorCard.css";

export default function Form({
  role,
  color,
  contrast,
  onSubmit,
  btnText,
  bgc,
  handleValue,
  txtColor,
}) {
  return (
    <form
      action=""
      onSubmit={onSubmit}
      className="color-form"
      style={{ backgroundColor: bgc, color: txtColor }}
    >
      <label htmlFor="role">
        Role: <br />
        <input type="text" id="role" name="role" defaultValue={role} />
      </label>
      <br />
      <label htmlFor="hex">
        Hex: <br />{" "}
        <ColorInput
          id="hex"
          defaultValue={color}
          handleValue={handleValue}
        />{" "}
      </label>
      <br />
      <label htmlFor="contrastText">
        Contrast:
        <br />{" "}
        <ColorInput
          id="contrastText"
          defaultValue={contrast}
          handleValue={handleValue}
        />{" "}
      </label>
      <br />
      <button type="submit">{btnText}</button>
    </form>
  );
}

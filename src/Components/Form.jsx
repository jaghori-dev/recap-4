import ColorInput from "./ColorInput";
import Button from "./Button";

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
      className="w-90 py-1 flex flex-col justufy-center items-center rounded-xl"
      action=""
      onSubmit={onSubmit}
      style={{ backgroundColor: bgc, color: txtColor }}
    >
      <label htmlFor="role">
        Role: <br />
        <input
          type="text"
          id="role"
          name="role"
          defaultValue={role}
          className="w-60 h-11 p-2 text-lg bg-slate-400 rounded-xl"
        />
      </label>
      <br />
      <label htmlFor="hex" className="flex flex-col relative text-lg">
        Hex: <br />{" "}
        <ColorInput
          id="hex"
          defaultValue={color}
          handleValue={handleValue}
        />{" "}
      </label>
      <br />
      <label htmlFor="contrastText" className="flex flex-col relative text-lg">
        Contrast:
        <br />{" "}
        <ColorInput
          id="contrastText"
          defaultValue={contrast}
          handleValue={handleValue}
        />{" "}
      </label>
      <br />
      <Button type="submit">{btnText}</Button>
    </form>
  );
}

import "./ColorCard.css";
import { useState } from "react";
import ColorInput from "../ColorInput";
import CopyToClipboard from "../CopyToClipboard";

export default function Color({
  color,
  role,
  contrast,
  handleDelete,
  handleEdit,
  id,
}) {
  const [isConfirmVisible, setIsConfirmVisible] = useState(false);
  const [isConfirmEdit, setIsConfirmEdit] = useState(false);
  function toggleShow() {
    setIsConfirmVisible((prev) => !prev);
  }
  function handleCofirmEdit() {
    setIsConfirmEdit((prev) => !prev);
  }
  function submitForm(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    handleEdit(id, data);
    setIsConfirmEdit(false);
  }

  return (
    <div
      className="color-card"
      style={{ backgroundColor: color, color: contrast }}
    >
      <h2 className="color-card-headline">{color}</h2>
      <CopyToClipboard colorCode={color} color={color}/>
      <h3 style={{ color: contrast }}>{role}</h3>
      <p style={{ color: contrast }}>Contrast: {contrast}</p>
      {isConfirmEdit && (
        <form action="" onSubmit={submitForm} className="edit-form">
          <label htmlFor="rolle">
            Role: <br />
            <input type="text" id="rolle" name="rolle" defaultValue={role} />
          </label>
          <br />
          <label htmlFor="color">
            Hex: <br />{" "}
            <ColorInput id="color" name="color" defaultValue={color} />{" "}
          </label>
          <br />
          <label htmlFor="contrast">
            Contrast:
            <br /> <ColorInput id="contrast" defaultValue={contrast} />{" "}
          </label>
          <br />
          <button type="submit">Save</button>
        </form>
      )}

      <div className="color-card-buttons">
        {isConfirmVisible && <p>Do you want to delete it?</p>}
        {!isConfirmEdit && (
          <button onClick={toggleShow}>
            {isConfirmVisible ? "Cancel" : "Delete"}
          </button>
        )}

        {!isConfirmVisible && (
          <button onClick={handleCofirmEdit}>
            {isConfirmEdit ? "Cancel" : "Edit"}
          </button>
        )}
        {isConfirmVisible && <button onClick={handleDelete}>Confirm</button>}
      </div>
    </div>
  );
}

import "./ColorCard.css";
import { useState } from "react";
import CopyToClipboard from "../CopyToClipboard";
import Form from "../Form";

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
      <CopyToClipboard colorCode={color} color={color} />
      <h3 style={{ color: contrast }}>{role}</h3>
      <p style={{ color: contrast }}>Contrast: {contrast}</p>
      {isConfirmEdit && (
        <Form
          role={role}
          color={color}
          contrast={contrast}
          onSubmit={submitForm}
          btnText="Save"
        />
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

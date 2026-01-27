import "./Color.css";
import { useState } from "react";

export default function Color({ color, role, contrast, handleDelete }) {
  const [isConfirmVisible, setIsConfirmVisible] = useState(false);
  function toggleShow() {
    setIsConfirmVisible((prev) => !prev);
  }
  return (
     <div
      className="color-card"
      style={{ backgroundColor: color, color: contrast }}
    >
      <h2 className="color-card-headline">{color}</h2>
      <h3 style={{ color: contrast }}>{role}</h3>
      <p style={{ color: contrast }}>Contrast: {contrast}</p>
      <div className="color-card-buttons">
        {isConfirmVisible && <p>Do you want to delete it?</p>}
        <button onClick={toggleShow}>
          {isConfirmVisible ? "Cancel" : "Delete"}
        </button>
        {isConfirmVisible && <button onClick={handleDelete}>Delete</button>}
      </div>
    </div>
  );
}

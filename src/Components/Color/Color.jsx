import "./Color.css";
import { useState } from "react";

export default function Color({ color, role, contrast, handleDelete }) {
  const [isHidde, setIsHidde] = useState("none");
  const [content, setContent] = useState("delete");
  function toggleShow() {
    setIsHidde(isHidde === "none" ? "flex" : "none");
    setContent(content === "delete" ? "cancel" : "delete");
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
        <p className="" style={{ display: isHidde }}>Do you want to delete it?</p>
        <button onClick={toggleShow}>{content}</button>
        <button onClick={handleDelete} style={{ display: isHidde }}>
          Delete
        </button>
      </div>
    </div>
  );
}

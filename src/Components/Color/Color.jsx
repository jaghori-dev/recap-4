import "./Color.css";

export default function Color({ color, role, contrast }) {
  return (
    <div
      className="color-card"
      style={{ backgroundColor: color, color: contrast }}
    >
      <h2 className="color-card-headline">{color}</h2>
      <h3>{role}</h3>
      <p>Contrast: {contrast}</p>
    </div>
  );
}

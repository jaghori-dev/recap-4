import { useState } from "react";
import CopyToClipboard from "./CopyToClipboard";
import Form from "./Form";
import Button from "./Button";

export default function Color({
  color,
  role,
  contrast,
  handleDelete,
  handleEdit,
  id,
}) {
  const [isConfirmVisible, setIsConfirmVisible] = useState(false);
  const [isEditVisible, setIsEditVisible] = useState(false);

  function toggleShow() {
    setIsConfirmVisible((prev) => !prev);
  }
  function handleCofirmEdit() {
    setIsEditVisible((prev) => !prev);
  }
  function submitForm(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    handleEdit(id, data);
    setIsEditVisible(false);
  }

  return (
    <div
      style={{ "--bg": color, "--text": contrast }}
      className="w-90 min-h-90 bg-[var(--bg)] text-[var(--text)] flex flex-col items-center p-3 rounded-xl"
    >
      <div className="flex">
        <h2 className="text-2xl p-2 rounded-xl">{color}</h2>
        <CopyToClipboard colorCode={color} color={color} />
      </div>
      <h3 className="text-xl py-1 px-2" style={{ color: contrast }}>
        {role}
      </h3>
      <p className="text-xl py-1 px-2" style={{ color: contrast }}>
        Contrast: {contrast}
      </p>
      {isEditVisible && (
        <Form
          role={role}
          color={color}
          contrast={contrast}
          onSubmit={submitForm}
          btnText="Save"
        />
      )}

      <div className="">
        {isConfirmVisible && <p>Do you want to delete it?</p>}
        {!isEditVisible && (
          <Button onClick={toggleShow}>
            {isConfirmVisible ? "Cancel" : "Delete"}
          </Button>
        )}

        {!isConfirmVisible && (
          <Button onClick={handleCofirmEdit}>
            {isEditVisible ? "Cancel" : "Edit"}
          </Button>
        )}
        {isConfirmVisible && <Button onClick={handleDelete}>Confirm</Button>}
      </div>
    </div>
  );
}

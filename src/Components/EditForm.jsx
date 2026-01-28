import ColorInput from "./ColorInput"

export default function EditForm({role, color, contrast, onSubmit}){
    return (
         <form action="" onSubmit={onSubmit} className="edit-form">
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
    )
}
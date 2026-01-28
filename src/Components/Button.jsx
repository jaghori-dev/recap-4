export default function Button({ children, type, onClick }) {
  return (
    <button
      className="bg-sky-500 hover:bg-sky-700 rounded-md font-medium m-2 py-2 px-3 cursor-pointer transition duration-300"
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

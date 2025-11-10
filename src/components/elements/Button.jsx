export default function Button({ handleClick, icon }) {
  return (
    <button onClick={handleClick} className="cursor-pointer">
      {icon}
    </button>
  );
}

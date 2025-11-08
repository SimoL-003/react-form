export default function FormInputText({
  inputValue,
  handleInputChange,
  id,
  placeholder,
}) {
  return (
    <input
      value={inputValue}
      onChange={handleInputChange}
      type="text"
      id={id}
      placeholder={placeholder}
      className="block min-w-[300px] w-fit border-2 py-1 px-1 rounded-md"
    />
  );
}

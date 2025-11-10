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
      className="w-full"
      required
    />
  );
}

export default function Form({ handleSubmbit, inputValue, handleInputChange }) {
  return (
    <form
      action=""
      onSubmit={handleSubmbit}
      autoComplete="off"
      className="flex gap-1"
    >
      <input
        value={inputValue}
        onChange={handleInputChange}
        id="new-title"
        type="text"
        placeholder="Aggiungi il titolo di un nuovo post..."
        className="block min-w-[300px] w-fit border-2 py-1 px-1 rounded-md"
      />
      <button type="submit" className="button block">
        Aggiungi
      </button>
    </form>
  );
}

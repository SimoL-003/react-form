import FormInputText from "../elements/FormInputText";
import SubmitButton from "../elements/SubmitButton";

export default function Form({
  handleSubmbit,
  titleInputValue,
  handleTitleInputChange,
}) {
  return (
    <form
      action=""
      onSubmit={handleSubmbit}
      autoComplete="off"
      className="flex gap-1"
    >
      <FormInputText
        id={"new-title"}
        inputValue={titleInputValue}
        handleInputChange={handleTitleInputChange}
        placeholder={"Aggiungi il titolo di un nuovo post..."}
      />
      <SubmitButton text={"Aggiungi post"} />
    </form>
  );
}

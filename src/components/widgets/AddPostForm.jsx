import FormInputText from "../elements/FormInputText";
import SubmitButton from "../elements/SubmitButton";

export default function AddPostForm({
  handleSubmbit,
  titleInputValue,
  handleTitleInputChange,
}) {
  return (
    <form
      action=""
      onSubmit={handleSubmbit}
      autoComplete="off"
      className="flex flex-col sm:flex-row gap-4 sm:gap-2"
    >
      <FormInputText
        id={"new-title"}
        inputValue={titleInputValue}
        handleInputChange={handleTitleInputChange}
        placeholder={"Scrivi il titolo del nuovo post..."}
      />
      <SubmitButton text={"Aggiungi post"} />
    </form>
  );
}

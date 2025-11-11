import FormInputText from "../elements/FormInputText";
import SubmitButton from "../elements/SubmitButton";

export default function AddPostForm({
  handleEditSubmbit,
  editedTitleInputValue,
  handleEditedTitleInputChange,
}) {
  return (
    <form
      action=""
      onSubmit={handleEditSubmbit}
      autoComplete="off"
      className="flex flex-col sm:flex-row gap-4 sm:gap-2"
    >
      <FormInputText
        id={"new-title"}
        inputValue={editedTitleInputValue}
        handleInputChange={handleEditedTitleInputChange}
        placeholder={"Modifica il titolo del post"}
      />
      <SubmitButton text={"Modifica titolo"} />
    </form>
  );
}

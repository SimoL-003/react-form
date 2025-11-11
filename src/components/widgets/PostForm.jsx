import FormInputText from "../elements/FormInputText";
import SubmitButton from "../elements/SubmitButton";

export default function AddPostForm({
  handleSubmbit,
  titleInputValue,
  handleTitleInputChange,
  inputId,
  placeholder,
  buttonText,
}) {
  return (
    <form
      action=""
      onSubmit={handleSubmbit}
      autoComplete="off"
      className="flex flex-col sm:flex-row gap-4 sm:gap-2"
    >
      <FormInputText
        id={inputId}
        inputValue={titleInputValue}
        handleInputChange={handleTitleInputChange}
        placeholder={placeholder}
      />
      <SubmitButton text={buttonText} />
    </form>
  );
}

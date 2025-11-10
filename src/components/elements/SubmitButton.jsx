export default function SubmitButton({ text }) {
  return (
    <button type="submit" className="button block w-fit min-w-fit self-center">
      {text}
    </button>
  );
}

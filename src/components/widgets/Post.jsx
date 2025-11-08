import DeleteButton from "../elements/DeleteButton";

export default function Post({ curPost, deletePost }) {
  return (
    <li className="flex justify-between py-2 border-b-2">
      <h4>{curPost.titolo}</h4>
      <DeleteButton deletePost={deletePost} />
    </li>
  );
}

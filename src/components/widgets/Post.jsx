import DeleteButton from "../elements/DeleteButton";

export default function Post({ curPost, deletePost }) {
  return (
    <li className="card-post">
      <h4>{curPost.titolo}</h4>
      <DeleteButton deletePost={deletePost} />
    </li>
  );
}

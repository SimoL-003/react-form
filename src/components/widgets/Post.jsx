import { useState } from "react";
import DeleteButton from "../elements/DeleteButton";
import EditButton from "../elements/EditButton";

export default function Post({ curPost, deletePost, editPostTitle }) {
  return (
    <li className="card-post">
      <h4>{curPost.titolo}</h4>
      <div className="buttons flex gap-1">
        <EditButton editPostTitle={editPostTitle} />
        <DeleteButton deletePost={deletePost} />
      </div>
    </li>
  );
}

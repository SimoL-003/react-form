import { useState } from "react";
import blogPosts from "./data/blogPosts"; /* id, titolo, contenuto */
import Post from "./components/widgets/Post";
import AddPostForm from "./components/widgets/AddPostForm";

function App() {
  const [posts, setPosts] = useState(blogPosts);
  const [newPostTitle, setNewPostTitle] = useState("");

  function addNewPost(e) {
    e.preventDefault();

    const newPostId = posts.length === 0 ? 1 : posts[posts.length - 1].id + 1;
    const newPost = {
      id: newPostId,
      titolo: newPostTitle,
      contenuto: "",
    };

    setPosts((prev) => [...prev, newPost]);
    setNewPostTitle("");
  }

  function editPostTitle(postTitle, postId) {
    let editedTitle = prompt("Modifica il titolo del tuo post", postTitle);

    setPosts((prev) =>
      prev.map((curPost) => {
        if (curPost.id === postId) {
          return { ...curPost, titolo: editedTitle };
        } else return curPost;
      })
    );
  }

  function deletePost(postToDeleteId) {
    setPosts((prev) => prev.filter((curPost) => curPost.id !== postToDeleteId));
  }

  return (
    <>
      <main className="min-h-full">
        <div className="container">
          <h1 className="mt-16">Il mio blog</h1>

          <div className="form-container my-8">
            <AddPostForm
              handleSubmbit={addNewPost}
              titleInputValue={newPostTitle}
              handleTitleInputChange={(event) =>
                setNewPostTitle(event.target.value)
              }
            />
          </div>

          <div className="posts my-8">
            <h2>Articoli</h2>
            <ul className="py-4 grid grid-cols-3 gap-4">
              {posts.map((curPost) => (
                <Post
                  key={curPost.id}
                  curPost={curPost}
                  editPostTitle={() =>
                    editPostTitle(curPost.titolo, curPost.id)
                  }
                  deletePost={() => deletePost(curPost.id)}
                />
              ))}
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;

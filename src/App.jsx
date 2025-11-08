import { useState } from "react";
import blogPosts from "./data/blogPosts"; /* id, titolo, contenuto */
import Post from "./components/widgets/Post";
import Form from "./components/widgets/Form";

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

  function deletePost(postToDelete) {
    setPosts((prev) => prev.filter((curPost) => curPost.id !== postToDelete));
  }

  return (
    <>
      <main className="min-h-full">
        <div className="container">
          <h1 className="mt-16">Il mio blog</h1>

          <div className="form-container my-8"></div>
          <Form
            handleSubmbit={addNewPost}
            titleInputValue={newPostTitle}
            handleTitleInputChange={(event) =>
              setNewPostTitle(event.target.value)
            }
          />

          <div className="posts my-8">
            <h2>Articoli</h2>
            <ul>
              {posts.map((curPost) => (
                <Post
                  key={curPost.id}
                  curPost={curPost}
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

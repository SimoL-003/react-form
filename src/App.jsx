import { useState } from "react";
import blogPosts from "./data/blogPosts"; /* id, titolo, contenuto */
import Post from "./components/widgets/Post";

function App() {
  const [posts, setPosts] = useState(blogPosts);
  const [newPostTitle, setNewPostTitle] = useState("");

  function addNewPost(e) {
    e.preventDefault();

    const newPostId = posts[posts.length - 1].id;
    const newPost = {
      id: newPostId + 1,
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

          <div className="form-container my-8">
            <form
              action=""
              onSubmit={addNewPost}
              autoComplete="off"
              className="flex gap-1"
            >
              <input
                value={newPostTitle}
                onChange={(event) => setNewPostTitle(event.target.value)}
                id="new-title"
                type="text"
                placeholder="Aggiungi il titolo di un nuovo post..."
                className="block min-w-[300px] w-fit border-2 py-1 px-1 rounded-md"
              />
              <button type="submit" className="button block">
                Aggiungi
              </button>
            </form>
          </div>

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

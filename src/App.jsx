import { useState } from "react";
import blogPosts from "./data/blogPosts"; /* id, titolo, contenuto */

function App() {
  const [posts, setPosts] = useState(blogPosts);
  const [newPostTitle, setNewPostTitle] = useState("");

  function addNewPost(e) {
    e.preventDefault();
    const newPost = {
      id: posts.length + 1,
      titolo: newPostTitle,
      contenuto: "",
    };
    setPosts([...posts, newPost]);
    setNewPostTitle("");
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
                <li key={curPost.id}>
                  <h4>{curPost.titolo}</h4>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;

import { useState } from "react";
import blogPosts from "./data/blogPosts"; /* id, titolo, contenuto */

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
                <li
                  key={curPost.id}
                  className="flex justify-between py-2 border-b-2"
                >
                  <h4>{curPost.titolo}</h4>
                  <span
                    onClick={() => deletePost(curPost.id)}
                    className="cursor-pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 640"
                      width={25}
                    >
                      <path d="M232.7 69.9L224 96L128 96C110.3 96 96 110.3 96 128C96 145.7 110.3 160 128 160L512 160C529.7 160 544 145.7 544 128C544 110.3 529.7 96 512 96L416 96L407.3 69.9C402.9 56.8 390.7 48 376.9 48L263.1 48C249.3 48 237.1 56.8 232.7 69.9zM512 208L128 208L149.1 531.1C150.7 556.4 171.7 576 197 576L443 576C468.3 576 489.3 556.4 490.9 531.1L512 208z" />
                    </svg>
                  </span>
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

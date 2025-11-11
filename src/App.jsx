import { useState } from "react";
import blogPosts from "./data/blogPosts"; /* id, titolo, contenuto */
import Post from "./components/widgets/Post";
import PostForm from "./components/widgets/PostForm";

function App() {
  const [posts, setPosts] = useState(blogPosts);
  const [newPostTitle, setNewPostTitle] = useState("");
  const [postToEdit, setPostToEdit] = useState(null);

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

  function editingPost(post) {
    setPostToEdit(post);
    setNewPostTitle(post.titolo);
  }

  function editPostTitle(e) {
    e.preventDefault();

    setPosts((prev) =>
      prev.map((curPost) => {
        if (curPost.id === postToEdit.id) {
          return { ...curPost, titolo: newPostTitle };
        } else return curPost;
      })
    );

    setPostToEdit(null);
    setNewPostTitle("");
  }

  function deletePost(postToDeleteId) {
    setPosts((prev) => prev.filter((curPost) => curPost.id !== postToDeleteId));
  }

  return (
    <>
      <main className="min-h-screen">
        <div className="container">
          <h1 className="pt-16 text-center sm:text-start">Il mio blog</h1>

          <div className="form-container my-8">
            {postToEdit === null ? (
              <PostForm
                handleSubmbit={addNewPost}
                titleInputValue={newPostTitle}
                handleTitleInputChange={(event) =>
                  setNewPostTitle(event.target.value)
                }
                inputId={"new-title"}
                placeholder={"Scrivi il titolo del nuovo post..."}
                buttonText={"Aggiungi post"}
              />
            ) : (
              <PostForm
                handleSubmbit={editPostTitle}
                titleInputValue={newPostTitle}
                handleTitleInputChange={(event) =>
                  setNewPostTitle(event.target.value)
                }
                inputId={"title-to-edit"}
                placeholder={"Modifica il titolo del tuo post..."}
                buttonText={"Modifica titolo"}
              />
            )}
          </div>

          <div className="posts my-8">
            <h2 className="text-center sm:text-start">Articoli</h2>
            <ul className="py-4 flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {posts.map((curPost) => (
                <Post
                  key={curPost.id}
                  curPost={curPost}
                  editPostTitle={() => editingPost(curPost)}
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

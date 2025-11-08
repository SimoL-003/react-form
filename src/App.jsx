import { useState } from "react";
import blogPosts from "./data/blogPosts"; /* id, titolo, contenuto */

function App() {
  return (
    <>
      <main className="min-h-full">
        <div className="container">
          <h1 className="mt-16">Il mio blog</h1>

          <div className="posts my-8">
            <h2>Articoli</h2>
            <ul>
              {blogPosts.map((curPost) => (
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

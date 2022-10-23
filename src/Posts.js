import axios from "axios";
import { useState, useEffect } from "react";
import PostCard from "./Components/postCard.js";

function Posts() {
  let [postArray, setPostArray] = useState("");
  function getPosts() {
    axios
      .get("https://enshrined-tasty-snagglefoot.glitch.me/posts")
      .then((response) => {
        const posts = response.data;
        setPostArray(posts);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <section className="section">
        <div className="container">
          <div className="container-data">
            <h1 className="title">My gallery</h1>
            <div className="post-wrapper">
              <PostCard posts={postArray} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Posts;

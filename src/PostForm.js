import { useState } from "react";
import axios from "axios";

function PostForm() {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState("https://i.ibb.co/HDcH56z/image.png");
  const [password, setPassword] = useState("");

  async function handleData(e) {
    e.preventDefault();
    await axios
      .post("http://localhost:5000/posts", {
        caption: caption,
        image: image,
        password: password,
      })
      .then((res) => {
        console.log(res);
      });
  }

  return (
    <div>
      <section className="section">
        <div className="container">
          <div className="container-data">
            <h1 className="title">New post</h1>
            <form className="form-group form-post" onSubmit={handleData}>
              <div className="form-input-wrap">
                <label className="form-input-label" for="caption">
                  Caption
                </label>
                <input
                  onChange={(e) => setCaption(e.target.value)}
                  type="text"
                  id="caption"
                  name="caption"
                  required
                  autocomplete="off"
                  className="form-input"
                  placeholder="Assume this is some random cool quote"
                />
              </div>
              <div className="form-input-wrap">
                <label className="form-input-label" for="Image">
                  Image Link
                </label>
                <input
                  onChange={(e) => setImage(e.target.value)}
                  type="text"
                  id="Image"
                  autocomplete="off"
                  required
                  name="Image"
                  className="form-input"
                  placeholder="https://whatever.com/cool/image/link.png"
                />
              </div>
              <div className="form-img-preview">
                <img
                  src={image || "https://i.ibb.co/HDcH56z/image.png"}
                  className="form-img"
                />
              </div>
              <div className="form-input-wrap grid-col-4">
                <label className="form-input-label" for="password">
                  Password
                </label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  id="password"
                  required
                  name="password"
                  autocomplete="on"
                  className="form-input"
                  placeholder="SomeReallyCoolPasswordWhichIsVeryHard"
                />
              </div>

              <button className="button form-button" type="sbumit">
                Post Image <i class="bx bx-right-arrow-alt"></i>
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PostForm;

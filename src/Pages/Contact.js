import Nav from "../Components/nav";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Contact() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function handleData(e) {
    e.preventDefault();

    navigate("/sent");
    await axios
      .post("https://enshrined-tasty-snagglefoot.glitch.me/designs", {
        name: name,
        email: email,
        message: message,
      })
      .then((res) => {
        console.log("sent");
      });
  }
  return (
    <>
      <Nav />
      <section className="section">
        <div className="container">
          <h1 className="title">
            Send me a <br /> message
          </h1>
          <form className="form-group" onSubmit={handleData} action="/">
            <div className="form-input-wrap">
              <label className="form-input-label" for="name">
                Name
                <span className="required">*</span>
              </label>
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                id="name"
                required
                name="name"
                className="form-input"
                placeholder="John Doe"
              />
            </div>
            <div className="form-input-wrap">
              <label className="form-input-label" for="email">
                Email
                <span className="required">*</span>
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="email"
                name="email"
                className="form-input"
                required
                placeholder="johndoe@john.com"
              />
            </div>
            <div className="form-input-wrap form-textarea-wrap">
              <label className="form-input-label " for="description">
                Tell me a little about your project
                <span className="required">*</span>
              </label>
              <textarea
                onChange={(e) => setMessage(e.target.value)}
                type="text"
                id="description"
                name="description"
                required
                className="form-input form-textarea"
                placeholder="I'm making a..."
                rows="6"
              ></textarea>
            </div>
            <button className={"button"} type="submit">
              Send message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;

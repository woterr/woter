import { useState } from "react";
import axios from "axios";
function Design() {
  const [ServiceErrorMessage, setServiceErrorMessage] = useState("");
  const [sentHandle, setSentHandle] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [budget, setBudget] = useState("");
  const [web, setWeb] = useState(false);
  const [UI, setUI] = useState(false);
  const [UX, setUX] = useState(false);

  async function handleData(e) {
    e.preventDefault();
    const serviceArray = [web, UI, UX];

    if (serviceArray.some((item) => item)) {
      await axios
        .post("http://localhost:5000/designs", {
          name: name,
          email: email,
          message: message,
          budget: budget,
          services: serviceArray,
        })
        .then((res) => {
          console.log(res);
        });
    } else {
      setServiceErrorMessage("Please select atleast one service");
    }
  }
  return (
    <div>
      <section className="section">
        <div className="container">
          <h1 className="title">I'm interested in...</h1>
          <form className="form-group" onSubmit={handleData} action="/">
            <div className="form-input-checkbox">
              <div>
                <label>
                  <input
                    type="checkbox"
                    name="Web design"
                    className="form-checkbox"
                    onChange={(e) => setWeb(e.target.checked)}
                  />
                  <span>Web design</span>
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="checkbox"
                    name="UI design"
                    className="form-checkbox"
                    onChange={(e) => setUI(e.target.checked)}
                  />
                  <span>UI design</span>
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="checkbox"
                    name="UX design"
                    className="form-checkbox"
                    onChange={(e) => setUX(e.target.checked)}
                  />
                  <span>UX design</span>
                </label>
              </div>
              <span className="required">*</span>
              {ServiceErrorMessage && (
                <p className="error"> {ServiceErrorMessage} </p>
              )}
            </div>
            <div className="form-input-wrap form-number-input-wrap">
              <label className="form-input-label" for="budget">
                Budget (USD)
                <span className="required">*</span>
              </label>
              <span className="dollar-sign">$</span>
              <input
                onChange={(e) => setBudget(e.target.value)}
                type="number"
                id="budget"
                required
                name="budget"
                min="2"
                className="form-input form-number-input"
                placeholder="5?"
              />
            </div>
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
            <button
              className={sentHandle ? "button sent" : "button"}
              type="sbumit"
              onSubmit={(e) => setSentHandle(true)}
            >
              {sentHandle ? "Message sent!" : "Send message"}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Design;

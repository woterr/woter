import Nav from "../Components/nav";

function Info({ title, description }) {
  return (
    <>
      <Nav />
      <section className="section">
        <div className="container">
          <h1 className="title">{title}</h1>
          <br />
          <p
            className="description"
            style={{ width: "28rem", lineHeight: "2.2" }}
          >
            {description}
          </p>
        </div>
      </section>
    </>
  );
}

export default Info;

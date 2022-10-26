import ImageSlider from "./Components/imageSlider/imageSlider";

function Home() {
  return (
    <main>
      <section className="section home">
        <div className="container">
          <h1 className="title" style={{ textAlign: "center" }}>
            I design <br />
            your vision
          </h1>
          <p
            className="paragraph"
            style={{ textAlign: "center", marginTop: "1.5rem" }}
          >
            I'm a front-end web developer who loves designing flawless websites.{" "}
          </p>
          <ImageSlider />
          <div className="justify-content">
            <span>Recent projects</span>
            <a className="link" href="/posts">
              View more
            </a>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="featured-container">
            <div className="featured-info">
              <h3 className="subtitle">
                Featured projects that <br /> live on the net
              </h3>
              <p className="description">
                Let's have a look on the best designs that I've created in the
                recent times. I am providing the best design services for you
              </p>
            </div>
            <a
              href="https://faint.vip/"
              className="featured-card featured-long"
            >
              <h3 className="featured-title">Faint</h3>
              <span className="tag">Website</span>
              <p className="featured-description">
                A simple and easy to use discord antinuke bot which helps keep
                your server intact
              </p>
              <img
                src="https://media.discordapp.net/attachments/915979380826734612/1023614764607340574/Desktop.png"
                className="featured-image featured-long-image"
                alt=""
              />
            </a>
            <a href="https://staque.vercel.app/" className="featured-card">
              <h3 className="featured-title">Staque</h3>
              <div style={{ display: "flex", gap: ".5rem" }}>
                <span className="tag">Website</span>
                <span className="tag">Bot</span>
              </div>
              <p className="featured-description">
                The ideal Discord bot for managing tickets on and around your
                server
              </p>
              <img
                src="https://staque.vercel.app/images/logo-full.png"
                className="featured-image"
                alt=""
              />
            </a>
            <a href="https://sarc.xyz/" className="featured-card">
              <h3 className="featured-title">Sarc</h3>
              <span className="tag">Website</span>
              <p className="featured-description">
                A simple portfolio for a 16-year-old community manager and
                community builder from California
              </p>
            </a>
            <a href="https://discord.gg/knotts/" className="featured-card">
              <h3 className="featured-title">Knott's Wait times</h3>
              <span className="tag">Bot</span>
              <p className="featured-description">
                Updates the ride's status on the Discord server on a regular
                basis.
              </p>
            </a>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h1 className="title">Services I provide</h1>
          <div className="services-container">
            <div className="service">
              <h3 className="subtitle">Web design</h3>
              <p className="description">
                Excellent responsive designs hosted on the <br /> net with
                mobile and desktop compability.
              </p>
            </div>
            <div className="service">
              <h3 className="subtitle">UI/UX design</h3>
              <p className="description">
                Case study and simple, clean, responsive UI designed <br /> with
                provided source files.
              </p>
            </div>
          </div>
          <a className="button" href="/design">
            Request a design
          </a>
        </div>
      </section>
    </main>
  );
}

export default Home;

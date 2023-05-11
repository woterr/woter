import { useState } from "react";
import tagline from "../Images/tagline.svg";
import logo from "../Images/Logo.png";
import staque from "../Images/Staque.png";
import sarc from "../Images/Sarc.png";
import spongly from "../Images/Spongly.png";
import Nav from "../Components/nav";
function Home() {
  const [navDot, setNavDot] = useState("navdot active");
  function handleNavDot() {
    if (navDot === "navdot") {
      setNavDot("navdot active");
    } else {
      setNavDot("navdot");
    }
  }

  return (
    <>
      <Nav className="home-nav" />
      <main>
        <section className="section-home ">
          <div>
            <h1 className="title">I...</h1>
            <img src={tagline} alt="I design your vision" className="tagline" />
          </div>
          <div>
            <img src={logo} alt="logo" />
          </div>
          <div>
            <div onClick={handleNavDot} className={navDot}>
              <i className="bx bxs-bullseye"></i>
            </div>
            <nav>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/work">Work</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <p>
              A 16-year-old web-designer who aspires to create beautiful
              projects on the internet. My primary targets are small businesses
              and start-ups who need assistance.
            </p>
          </div>
        </section>
        <div className="scrolldown container">
          Scroll <i className="bx bx-chevron-down"></i> Down
        </div>
        <section className="section ">
          <div className="container">
            <h1 className="title">My work ~</h1>
            <div className="work-tainer">
              <div>
                <img src={staque} />
                <a href="https://staque.vercel.app/" className="button">
                  Visit
                </a>
              </div>
              <div>
                <img src={sarc} />
                <a href="https://sarc.xyz/" className="button">
                  Visit
                </a>
              </div>
              <div>
                <img src={spongly} />
                <a href="https://spongly-pink.vercel.app/" className="button">
                  Visit
                </a>
              </div>
              <div className="overlay"></div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;

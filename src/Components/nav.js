import { useState } from "react";
import logoDark from "../Images/logo-dark.png";
// import logoLight from "../Images/logo-light.png";

function Nav() {
  const [nav, setNav] = useState("header");

  function handleNav() {
    if (nav === "header") {
      setNav("header active");
    } else {
      setNav("header");
    }
  }

  return (
    <>
      <header className={nav} onClick={handleNav}>
        <div className="nav-container container">
          <a href="/" className="logo">
            <img src={logoDark} className="logo-img" />
            <span className="logo-name">woter</span>
          </a>
          <nav className="nav">
            <ul className="nav-menu">
              <li className="nav-item">
                <a href="/">Home</a>
              </li>
              <li className="nav-item">
                <a href="/about">About</a>
              </li>
              <li className="nav-item">
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </nav>
          <i class="bx bx-x nav-close" onClick={handleNav}></i>
        </div>
      </header>
      <header className="mobile-nav container">
        <a href="/" className="logo">
          <img src={logoDark} className="logo-img" />
          <span className="logo-name">woter</span>
        </a>
        <i className="bx bx-grid-alt nav-open" onClick={handleNav}></i>
      </header>
    </>
  );
}

export default Nav;

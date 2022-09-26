import { useState } from "react";

function Nav() {
  const [nav, setNav] = useState("container nav");

  function handleNav() {
    if (nav === "container nav") {
      setNav("container nav active");
    } else {
      setNav("container nav");
    }
  }

  return (
    <header className="header">
      <nav className={nav}>
        <div className="nav-logo">
          <a href="/">Woter</a>
        </div>
        <ul className="nav-list">
          <li className="list-item">
            <a href="/" className="nav-link">
              Home
            </a>
          </li>
          <li className="list-item">
            <a href="/posts" className="nav-link">
              Posts
            </a>
          </li>
          <li className="list-item">
            <a href="/contact/" className="nav-link">
              Contact
            </a>
          </li>
          <li className="list-item nav-cta">
            <a href="/design">Order</a>
          </li>
        </ul>
        <div className="nav-menu nav-mobile">
          <i className="bx bx-grid-alt" onClick={handleNav}></i>
        </div>
      </nav>
    </header>
  );
}

export default Nav;

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="logo-name">
          <a href="/" className="logo">
            Woter
          </a>
          <p>
            I'm a front-end web developer who loves designing flawless websites.
          </p>
        </div>
        <div className="pages">
          <h1 className="subtitle">Pages</h1>
          <ul className="pages-list">
            <a href="/" className="nav-link">
              Home
            </a>
            <a href="/posts" className="nav-link">
              Posts
            </a>
            <a href="/design" className="nav-link">
              Design
            </a>
            <a href="/contact" className="nav-link">
              Contact
            </a>
          </ul>
        </div>
        <div className="credit">
          <span>© Copyright Woter. All rights reserved</span>
          <span>
            <a href="https://reactjs.org/" className="link">
              ReactJS
            </a>{" "}
            framework hosted on{" "}
            <a href="https://vercel.com/" className="link">
              Vercel
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import logo from "../Images/logo-dark.png";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-container container">
          <div className="footer-pers">
            <img src={logo} />
            <p>
              A web designer who develops responsive and elegant websites and
              webapps
            </p>
          </div>
          <div className="footer-links footer-div">
            <h3 className="footer-sub">Links</h3>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="footer-social footer-div">
            <h3 className="footer-sub">Social</h3>
            <ul>
              <li>
                <a href="/">
                  <i className="bx bxl-discord-alt social-icon"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="bx bxl-github social-icon"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

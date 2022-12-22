const Footer = () => {
  return (
    <footer className="footer-section bg-dark">
      <div className="social">
        <a href="https://www.instagram.com/nick._.assassin/">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/in/mohammad-shahez-b4b000221/">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="https://www.facebook.com/mohammed.shahez/">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://www.linkedin.com/in/mohammad-shahez-b4b000221/">
          <i className="fab fa-twitter"></i>
        </a>
      </div>
      <ul className="list-inline">
        <li className="list-inline-item footer-link">
          <a href="#hero-section">Home</a>
        </li>
        <li className="list-inline-item footer-link">
          <a href="#about-section">About</a>
        </li>
        <li className="list-inline-item footer-link">
          <a href="#work-section">Works</a>
        </li>
      </ul>
      <p className="copyright mt-5">
        Copyright © 2022 <a>mshahez</a>. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

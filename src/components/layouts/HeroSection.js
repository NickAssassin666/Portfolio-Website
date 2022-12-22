import { NavLink } from "react-router-dom";

const MainNavigation = () => {
  return (
    <nav className="navbar navbar-expand-lg sticky-top bg-white">
      <div className="container">
        <div className="navbar-brand hero-logo">ms</div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5
              className="offcanvas-title offcanvas-logo"
              id="offcanvasNavbarLabel"
            >
              ms
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item pe-lg-5">
                <li
                  className="nav-link active"
                  aria-current="page"
                  href="#hero-section"
                >
                  Home
                </li>
              </li>
              <li className="nav-item pe-lg-5">
                <a className="nav-link" href="#about-section">
                  About
                </a>
              </li>
              <li className="nav-item pe-lg-5">
                <a className="nav-link" href="#projects-section">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#cta-section">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MainNavigation;

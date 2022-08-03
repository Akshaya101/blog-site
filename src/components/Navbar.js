import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./css/Navbar.css";
function Navbar() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <a className="navbar-brand" href="/">
          <i className="fas fa-mug-hot"></i>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <Router>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a href="/" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="/about" className="nav-link">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="/blogs" className="nav-link">
                  Blogs
                </a>
              </li>
              <li className="nav-item">
                <a href="/contact" className="nav-link">
                  Contact
                </a>
              </li>
            </ul>
          </Router>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

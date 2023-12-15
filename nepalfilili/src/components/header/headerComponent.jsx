import React from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/header.css";

const HeaderComponent = () => {
  return (
    <>
      <header id="header" className="header fixed-top">
        <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
          <Link to="/" className="logo d-flex align-items-center">
            {/* <img src="assets/img/logo.png" alt="NepFilili" /> */}
            <span>NepFilili</span>
          </Link>

          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <Link className="nav-link scrollto active" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="nav-link scrollto" to="/aboutus">
                  About
                </Link>
              </li>
              <li>
                <Link to="/blogs">Blog</Link>
              </li>
              <li className="dropdown megamenu">
                <Link to="/category">
                  <span>Category</span> <i className="bi bi-chevron-down"></i>
                </Link>
                <ul>
                  <li>
                    <Link to="#">Column 1 link 1</Link>
                    <Link to="#">Column 1 link 2</Link>
                    <Link to="#">Column 1 link 3</Link>
                  </li>
                  <li>
                    <Link to="#">Column 2 link 1</Link>
                    <Link to="#">Column 2 link 2</Link>
                    <Link to="#">Column 3 link 3</Link>
                  </li>
                  <li>
                    <Link to="#">Column 3 link 1</Link>
                    <Link to="#">Column 3 link 2</Link>
                    <Link to="#">Column 3 link 3</Link>
                  </li>
                  <li>
                    <Link to="#">Column 4 link 1</Link>
                    <Link to="#">Column 4 link 2</Link>
                    <Link to="#">Column 4 link 3</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link className="nav-link scrollto" to="/aboutus">
                  Jobs
                </Link>
              </li>
              <li>
                <Link className="nav-link scrollto" to="/aboutus">
                  Contact
                </Link>
              </li>
              <li>
                <Link className="getstarted scrollto" to="/auth/login">
                  Login
                </Link>
              </li>
              <li>
                <Link className="colorRed scrollto" to="/auth/register">
                  Become New Member
                </Link>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>
    </>
  );
};

export default HeaderComponent;

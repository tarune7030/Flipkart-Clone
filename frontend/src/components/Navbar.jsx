import React from "react";
import Logo from "../Assets/Images/logo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="position-sticky top-0 z-3 navbar navbar-expand-lg bg-primary">
      <div style={{ marginLeft: "150px" }} className="container-fluid">
        <a className="navbar-brand" href="/">
          <img className="logo" src={Logo} alt="logo" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex searchBar shadow h-10">
            <input
              className="form-control rounded-0 searchInput"
              type="search"
              placeholder="Search for products, brands and more"
              aria-label="Search"
            />
          </form>
          <ul
            style={{ marginLeft: "100px" }}
            className="navbar-nav me-auto mb-2 mb-lg-0 gap-4 NavbarList"
          >
            <li className="nav-item">
              <a className="nav-link headerText" aria-current="page" href="/">
                My Account
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link headerText" href="/">
                Become a Seller
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link headerText dropdown-toggle"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                More
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link headerText" href="/">
                <i
                  className="fa-solid fa-cart-shopping"
                  style={{ color: "#f9fafb", marginRight: "7px" }}
                ></i>
                Cart
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

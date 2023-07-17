import React from "react";
// import "../Navbar.css";

const Categories2 = () => {
  return (
    <div
      className="container-fluid bg-white pt-5   justify-content-sm-start position-fixed mt-0  z-3"
      style={{
        boxShadow: "rgba(17, 17, 26, 0.2) 0px 1px 0px",
      }}
    >
      <ul className="nav justify-content-center gap-3 categoryTitle">
        <li className="nav-item dropdown ">
          <a
            className="nav-link dropdown-toggle categoryTitle"
            href="/"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Electronics
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

        {/* ************************************************************************************** */}

        <li className="nav-item dropdown ">
          <a
            className="nav-link dropdown-toggle categoryTitle"
            href="/"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            TVs & Appliances
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

        {/* ************************************************************************************** */}

        <li className="nav-item dropdown ">
          <a
            className="nav-link dropdown-toggle categoryTitle"
            href="/"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Men
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

        {/* ************************************************************************************** */}

        <li className="nav-item dropdown ">
          <a
            className="nav-link dropdown-toggle categoryTitle"
            href="/"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Women
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

        {/* ************************************************************************************** */}

        <li className="nav-item dropdown ">
          <a
            className="nav-link dropdown-toggle categoryTitle"
            href="/"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Baby & Kids
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

        {/* ************************************************************************************** */}

        <li className="nav-item dropdown ">
          <a
            className="nav-link dropdown-toggle categoryTitle"
            href="/"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Home & Furniture
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

        {/* ************************************************************************************** */}

        <li className="nav-item dropdown ">
          <a
            className="nav-link dropdown-toggle categoryTitle"
            href="/"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Sports, Books & More
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

        {/* ************************************************************************************** */}

        <li className="nav-item dropdown ">
          <a
            className="nav-link categoryTitle"
            href="/"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Flights
          </a>
        </li>

        {/* ************************************************************************************** */}

        <li className="nav-item  ">
          <a
            className="nav-link categoryTitle"
            href="/"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Offer Zone
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Categories2;

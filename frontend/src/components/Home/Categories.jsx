import React from "react";
import "../Navbar.css";
import GroceryImage from "../../Assets/CategoriesImages/Image-1.webp";
import MobileImage from "../../Assets/CategoriesImages/Image-2.webp";
import FashionImage from "../../Assets/CategoriesImages/Image-3.webp";
import ElectronicsImage from "../../Assets/CategoriesImages/Image-4.webp";
import HomeImage from "../../Assets/CategoriesImages/Image-5.webp";
import AppliancesImage from "../../Assets/CategoriesImages/Image-6.webp";
import TravelImage from "../../Assets/CategoriesImages/Image-7.webp";
import OffersImage from "../../Assets/CategoriesImages/Image-8.webp";
import ToysImage from "../../Assets/CategoriesImages/Image-9.webp";
import TwoWheelerImage from "../../Assets/CategoriesImages/Image-10.webp";
import { NavLink } from "react-router-dom";

const Categories = () => {
  return (
    <div
      className="container-fluid pt-4 justify-content-sm-start "
      style={{
        backgroundColor: "white",
        boxShadow: "rgba(17, 17, 26, 0.2) 0px 1px 0px",
      }}
    >
      <ul className="nav justify-content-center gap-3 categoryTitle">
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="/products">
            <img height={70} src={GroceryImage} alt="grocery" />
          </NavLink>
          <li className="nav-item ">
            <NavLink className="nav-link categoryTitle" to="/products">
              Grocery
            </NavLink>
          </li>
        </li>
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="/">
            <img height={70} src={MobileImage} alt="mobiles" />
          </a>

          <li className="nav-item dropdown ">
            <a
              className="nav-link categoryTitle"
              href="/"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Mobiles
            </a>
          </li>
        </li>
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="/">
            <img height={70} src={FashionImage} alt="fashion" />
          </a>
          <li className="nav-item dropdown ">
            <a
              className="nav-link dropdown-toggle categoryTitle"
              href="/"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Fashion
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
        </li>
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="/">
            <img height={70} src={ElectronicsImage} alt="electronics" />
          </a>
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
        </li>
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="/">
            <img height={70} src={HomeImage} alt="Home & Furniture" />
          </a>
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
        </li>
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="/">
            <img height={70} src={AppliancesImage} alt="Appliances" />
          </a>
          <li className="nav-item dropdown ">
            <a
              className="nav-link categoryTitle"
              href="/"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Appliances
            </a>
          </li>
        </li>
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="/">
            <img height={70} src={TravelImage} alt="Travel" />
          </a>
          <li className="nav-item dropdown ">
            <a
              className="nav-link categoryTitle"
              href="/"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Travel
            </a>
          </li>
        </li>
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="/">
            <img height={70} src={OffersImage} alt="Top Offers" />
          </a>
          <li className="nav-item dropdown ">
            <a
              className="nav-link categoryTitle"
              href="/"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Top Offers
            </a>
          </li>
        </li>
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="/">
            <img height={70} src={ToysImage} alt="Beauty, Toys & More" />
          </a>

          <li className="nav-item dropdown ">
            <a
              className="nav-link dropdown-toggle categoryTitle"
              href="/"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Beauty, Toys & More
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
        </li>
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="/">
            <img height={70} src={TwoWheelerImage} alt="Two Wheelers" />
          </a>
          <li className="nav-item dropdown ">
            <a
              className="nav-link dropdown-toggle categoryTitle"
              href="/"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Two Wheelers
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
        </li>
      </ul>
    </div>
  );
};

export default Categories;

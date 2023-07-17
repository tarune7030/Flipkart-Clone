import React from "react";
import "./Banner.css";
import Banner1 from "../../Assets/BannerImages/Banner-1.jpg";
import Banner2 from "../../Assets/BannerImages/Banner-2.jpg";
import Banner3 from "../../Assets/BannerImages/Banner-3.png";
import Banner4 from "../../Assets/BannerImages/Banner-4.jpg";
import Banner5 from "../../Assets/BannerImages/Banner-5.jpg";

const Banner = () => {
  return (
    <div
      id="carouselExampleInterval"
      className="carousel slide mt-3"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner px-2">
        <div className="carousel-item active" data-bs-interval="4000">
          <div className="image-container">
            <img src={Banner1} className="d-block w-100" alt="Banner1" />
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="4000">
          <div className="image-container">
            <img src={Banner2} className="d-block w-100" alt="Banner2" />
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="4000">
          <div className="image-container">
            <img src={Banner3} className="d-block w-100" alt="Banner3" />
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="4000">
          <div className="image-container">
            <img src={Banner4} className="d-block w-100" alt="Banner4" />
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="4000">
          <div className="image-container">
            <img src={Banner5} className="d-block w-100" alt="Banner5" />
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="prev"
      >
        <i
          className="fa-solid fa-angle-left prevIcon"
          style={{ color: "#00040a", fontSize: "30px" }}
        ></i>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="next"
      >
        <i
          className="fa-solid fa-angle-right nextIcon"
          style={{ color: "#00040a", fontSize: "30px" }}
        ></i>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Banner;

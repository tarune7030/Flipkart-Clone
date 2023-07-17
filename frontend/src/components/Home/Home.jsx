import React from "react";
import Categories from "./Categories";
import Banner from "./Banner";
import ProductSlider1 from "./ProductSlider1";
import ProductSlider2 from "./ProductSlider2";
import Offers from "./Offers";

const Home = () => {
  return (
    <>
      <Categories />
      <Banner />
      <ProductSlider1 />
      <Offers />
      <ProductSlider2 />
    </>
  );
};

export default Home;

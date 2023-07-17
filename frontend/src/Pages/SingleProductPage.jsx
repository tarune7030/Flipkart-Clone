import React from "react";
import "./SingleProductPage.css";
import Categories2 from "../components/Home/Categories2";

const SingleProductPage = () => {
  return (
    <>
      <Categories2 />

      {/* ********************************************************************************************** */}

      <div className="container text-center m-auto">
        <div className="row  ">
          <div style={{ border: "1px solid blue" }} className="col-6 bg-white">
            Column
          </div>
          <div style={{ border: "1px solid red" }} className="col-6 bg-white">
            Column
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProductPage;

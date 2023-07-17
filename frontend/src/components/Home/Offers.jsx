import React from "react";
import Img1 from "../../Assets/OffersImages/Image-1.jpg";
import Img2 from "../../Assets/OffersImages/Image-2.jpeg";
import Img3 from "../../Assets/OffersImages/Image-3.jpeg";

const Offers = () => {
  return (
    <>
      <div className="container-fluid mt-3 ">
        <div className=" row">
          <div className="col-4">
            <img src={Img1} alt="" />
          </div>
          <div className="col-4">
            <img src={Img2} alt="" />
          </div>
          <div className="col-4">
            <img src={Img3} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Offers;

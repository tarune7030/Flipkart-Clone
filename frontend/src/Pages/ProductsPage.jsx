import React from "react";
import Categories2 from "../components/Home/Categories2";
import ProductCard from "../components/ProductCard";

const ProductsPage = () => {
  return (
    <>
      <Categories2 />
      <div className="row mt-5 py-2 m-auto px-2">
        <div className="col-2 bg-white">
          <div className="bg-white  ">
            <div className="p-2 d-flex  border-bottom ">
              <p style={{ fontWeight: "bold" }} className="text-md px-2">
                Filters
              </p>
            </div>

            {/* **************************************************************************************** */}

            <div className="border-bottom ">
              <div className="d-flex p-1">
                <p style={{ fontWeight: "bold" }} className="text-sm px-2">
                  CATEGORIES
                </p>
              </div>

              <div className=" d-flex  p-1 text-secondary">
                <i
                  className="fa-solid fa-angle-left prevIcon mt-2 "
                  style={{ color: "#00040a", fontSize: "10px" }}
                ></i>
                <p className="text-sm px-2 ">Clothing and Accessories</p>
              </div>

              {/* **************************************************************************************** */}

              <div className="d-flex p-1 text-secondary ">
                <i
                  className="fa-solid fa-angle-left prevIcon mt-2 "
                  style={{ color: "#00040a", fontSize: "10px" }}
                ></i>
                <p className="text-sm px-2 ">Top wear</p>
              </div>

              {/* **************************************************************************************** */}

              <div className="d-flex p-1 text-secondary">
                <i
                  className="fa-solid fa-angle-left prevIcon mt-2 "
                  style={{ color: "#00040a", fontSize: "10px" }}
                ></i>
                <p className="text-sm px-2">T-shirts</p>
              </div>

              {/* **************************************************************************************** */}
            </div>

            {/* **************************************************************************************** */}

            <div className="border-bottom  pb-4">
              <div className="d-flex p-1">
                <p style={{ fontWeight: "bold" }} className="text-sm px-2">
                  OFFERS
                </p>
              </div>

              {/* **************************************************************************************** */}

              <div className="d-flex p-1 text-secondary">
                <input type="checkbox" />
                <label className="text-sm px-2">Buy More, Save More</label>
              </div>
              {/* **************************************************************************************** */}

              <div className="d-flex  p-1 text-secondary">
                <input type="checkbox" id="offers1" />
                <label className="text-sm px-2">No cost EMI</label>
              </div>

              {/* **************************************************************************************** */}

              <div className="d-flex p-1 text-secondary">
                <input type="checkbox" />
                <label className="text-sm px-2">Special price</label>
              </div>
              {/* **************************************************************************************** */}
            </div>

            {/* **************************************************************************************** */}

            <div className="border-bottom  pb-4">
              <div className="d-flex p-1">
                <p style={{ fontWeight: "bold" }} className="text-sm px-2">
                  AVAILABILITY
                </p>
              </div>

              {/* **************************************************************************************** */}

              <div className="d-flex p-1 text-secondary">
                <input type="checkbox" id="availability0" />
                <label htmlFor="availability0" className="text-sm px-2">
                  Items in stock
                </label>
              </div>

              {/* **************************************************************************************** */}

              <div className="d-flex p-1 text-secondary">
                <input type="checkbox" />
                <label className="text-sm px-2">Include out of stock</label>
              </div>
              {/* **************************************************************************************** */}
            </div>

            {/* **************************************************************************************** */}

            <div className="border-bottom border-light">
              <div className="d-flex p-1">
                <p style={{ fontWeight: "bold" }} className="text-sm px-2">
                  SIZE
                </p>
              </div>
              <div className="d-flex p-1  text-secondary">
                <input type="checkbox" />
                <label className="text-sm px-2">sm</label>
              </div>
              <div className="d-flex p-1 text-secondary">
                <input type="checkbox" />
                <label className="text-sm px-2">md</label>
              </div>
              <div className="d-flex p-1 text-secondary">
                <input type="checkbox" />
                <label h className="text-sm px-2">
                  lg
                </label>
              </div>
              <div className="d-flex p-1 text-secondary">
                <input type="checkbox" />
                <label className="text-sm px-2">xl</label>
              </div>
            </div>
          </div>
        </div>

        {/* ********************************************************************************* */}

        <div
          style={{ width: "82%", marginLeft: "19px" }}
          className="col-10 bg-white"
        >
          <div className="bg-white text-lg-start  p-3 ">
            <div className="d-flex align-items-center gap-2">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a className="text-decoration-none" href="/">
                    Home
                  </a>
                </li>
                <li className="breadcrumb-item ">
                  <a className="text-decoration-none" href="/">
                    Clothes
                  </a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Men
                </li>
              </ol>
            </div>
            <p className="text-muted small">
              Are you looking for comfortable and stylish T-shirts that fit your
              needs? If yes, then you can have a glance at the tees collection
              that showcases varied patterns and designs. From casual outings to
              everyday activities, these tees can be useful for you in a wide
              variety of scenarios. Easy to accessorize and versatile, these
              men's T-shirts can be ideal new outfits to add to your wardrobe.
              There are also several diverse color options available with these
              tees. For summer men's T-shirts, you can go for lighter color
              choices to remain cozy during the heat. Moreover, you can also go
              for different theme options from branded T-shirt assortments.
              Choose from color-blocked, typography, graphic prints, floral
              prints, geometric prints, and other themes that meet your style
              and fit the occasion. You also get several fabric options, sleeve
              styles, and neck designs to make your fashion statement with ease
              when stepping out in these tees. These comfy and fashionable tees
              are offered by brands that include the likes of Veirdo, INKKR, NB
              Nicky Boy, FARBOT, BLIVE, Raymond, and others. So, browse the
              collection of T-shirts here and place an order online to have them
              delivered to a place of your choice.
            </p>
            <div className="d-flex align-items-baseline gap-2">
              <p>Mens T Shirts</p>
              <p className="text-muted small">
                (Showing 1 - 40 products of 38,473 products)
              </p>
            </div>
          </div>
          {/* ********************************** */}
          <ProductCard />
        </div>
      </div>
    </>
  );
};

export default ProductsPage;

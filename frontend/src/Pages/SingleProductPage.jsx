import React from "react";
import "./SingleProductPage.css";
import Categories2 from "../components/Home/Categories2";
import Offers from "../components/Home/Offers";
import OfferTag from "../Assets/Images/offer-tag.png";

const SingleProductPage = () => {
  return (
    <>
      <Categories2 />

      {/* ********************************************************************************************** */}

      <div className="container text-center m-auto">
        <div style={{ height: "100vh" }} className="row bg-white ">
          <div className="col-5 bg-white d-flex mt-3 position-sticky top-0">
            <div className="col-2">
              <div className="">
                <div className="productImg">
                  <img
                    src="https://rukminim2.flixcart.com/image/128/128/kyhlfgw0/t-shirt/e/9/o/-original-imagapnt4wggzagc.jpeg?q=70"
                    alt=""
                  />
                </div>
                <div className="productImg">
                  <img
                    src="https://rukminim2.flixcart.com/image/128/128/kyhlfgw0/t-shirt/u/o/b/-original-imagapntjhm3mfzg.jpeg?q=70"
                    alt=""
                  />
                </div>
                <div className="productImg">
                  <img
                    src="https://rukminim2.flixcart.com/image/128/128/kyhlfgw0/t-shirt/b/h/y/-original-imagapntq9avcftu.jpeg?q=70"
                    alt=""
                  />
                </div>
                <div className="productImg">
                  <img
                    src="https://rukminim2.flixcart.com/image/128/128/kyhlfgw0/t-shirt/9/o/b/-original-imagapntzrytxbx7.jpeg?q=70"
                    alt=""
                  />
                </div>
                <div className="productImg">
                  <img
                    src="https://rukminim2.flixcart.com/image/128/128/kyhlfgw0/t-shirt/s/v/z/-original-imagapntdbeshhfr.jpeg?q=70"
                    alt=""
                  />
                </div>
              </div>
            </div>
            {/* ********************************************************************************************************************************** */}
            <div className="col-10">
              <img
                height={"90%"}
                width={"100%"}
                src="https://rukminim2.flixcart.com/image/832/832/kyhlfgw0/t-shirt/e/9/o/-original-imagapnt4wggzagc.jpeg?q=70"
                alt=""
              />
            </div>
            {/* ********************************************************************************************************************************** */}
          </div>

          {/* ************************************************************************************************ */}
          <div
            // style={{ border: "1px solid red" }}
            className="col-7 bg-white mt-3 text-lg-start overflow-auto "
          >
            <div>
              <div style={{ color: "grey" }} className="font-medium fw-bold ">
                Allen Solly
              </div>
              <div>
                <p className="fs-5 text-dark  ">
                  Men Solid Polo Neck Pure Cotton Grey T-Shirt
                </p>
              </div>
              <div>
                <span style={{ color: "#26a541" }} className=" fw-semibold ">
                  Special Price
                </span>
              </div>
              <div>
                <div className=" fw-semibold  fs-2">₹681</div>
              </div>
              <div className="d-flex ps-3 ">
                <div className=" text-decoration-line-through text-muted ">
                  ₹1,049
                </div>
                <div className=" ms-3 ">
                  <span style={{ color: "#26a541" }} className=" fw-semibold ">
                    35% off
                  </span>
                </div>
              </div>
              <div className="d-flex gap-2 text-black ">
                <div>Or Pay</div>
                <div>₹660 +</div>
                <div className="supercoinImg">
                  <img
                    src="data:image/webp;base64,UklGRtYOAABXRUJQVlA4WAoAAAAQAAAAYwAAYwAAQUxQSO8EAAANv6SgbSPn054e0/NHtieCiPnPFI+CKuiCTYYuqAFVDIIq1cSCFDAYTKqhB7RQMUnFKvgGb7e2p222bdsiyQ43e6jMPZiZGU8+D2ZmZtipPYrBBpzakv6us1PTWD0+R/Q/mYQn11aXbphazC2poigw6tqO3hxsHf6yeTY2EX+HWXl3+c65jcWd1mF/MDzSsbExo7yYUvOZ+cLGwtzsX7/vfN38wgxITuALT3nScIxAoIQUSsZKjyITYUnG4+nMU6U/+vV2YCxjp+L5jdlbCuvtN4PXCZm8oCRKKuSEIk6lvazMRC3bwjJh/17+yU9RP7RMxMuVnvLv4L98FDJJWWUVzcSE5y+IEueoGyalMpV/2IAulonKaV6gIP5XDzSTEF7udhIQeW7F59tBaDl5+szs492LEQlteA8X3ttpB5zUz1Xu7pPYgrwt92WzF3KyYm3m1v26JsGSun/6h/24w0mK1dlbDkn0jHqw9uNuvc34xbi2vNM3JOyL2+Y2650249aqyzdoEk+rh1Z/3do/YLy0PzO7o3FBsDq7F4dDxpnK3Rr3cEKKh279Ie53OF6K+dLBocERJWrTjV0Tc1xaPXbPPs6kUw/c99Xbeshx5Vw3iHBIeZlCUOe4F285i1Pl+Ob7v3uJa/sCEeKYihEm5Fp3V5TAteWbiJufc7ok/1pr4+CtL5z9D4bT9GjxXGRxcGqhsNF+hytTUuOkUELZIZd9ni8f4ujCM81XbcglUVEBjqZKuoFldLu3Exkc9cveYvgNo5IY4qz0ZYYmozu8PRzO3hx9w2hONXHYn9E7CG70+jicvk7/zGhFRjjsL+pNFulgcFjmKLHIIU7LrCyyTAfH1SI30cNxdQNF+jguplhiiONqnhxDHBdZlohwXC6g0LiuqGBwXJYQWFwXFLA4LvKcjhQW11Ocjh45gdu2j0XguqVHTuC27WGQuG7YYUbittknIC1wPGCbWYnbZodDCgK3TY9zrEjcNhfYZVritjngV9aVwGWr/+RX1pXAZav/IKBtax7uRnWm6HJgllK4e7SluLRtZj3cjfYkl76Jbs7i7uBHj0t1W/JwVzcFlz47ujsrcdX0v0pxKbQDm/dxM+qJDJf/Mj8N7qviZv2TDFf1bUYKXLR6KLnq3wfPLXsK90y0+UqNU7Ubfrj/xAbu/fZOlVP36tZ9K1NZ3Aq6Fz6occ2h9pWIccvGOlRcs69f/v7Ze1WMOzr++LVblOSaxjaCUkHgku01sxy72fnh/L334c4nn66cyXHsIOz0alXcqcdZxvp9uzdYvx03vjubiSuM1TiMwtIcbuy2PMb+Jfbi2dtJ/rvdo2iZsbc2pSqvkfzZVqQFY1tx8dejXu0+4ZFcxMcHOX9ZxIxvt34Oe7X7hEdykf24nuPE3Z3un/l7RYFkevaT7nq+zImbf7a+KT0jSyTTsq+1pphI1B18Jxe4Hk8wSRvxK9v61myGiQQ7jZf8u3iSLJMNeIsvQsnErNHb7DCnZjzJZEy0p3eYpawkE7PB8A3e5YnUI0VPMgmjD98/eoskNHXbNRmV9dKeiBnXEg6jQPdlQZZJosn/B591by3eNLM65ynG1dHuub0f2z/kSdAQGj0yUkklpJCImMs2xlhjtYm1VNKTPkk2os+b3+ye31uM59bys5k5VSDPqEdX7wa73bO7m1sp/i4AAAAAVlA4IMAJAAAwMQCdASpkAGQAPjESiEKioYy9PwAUAYJbADIlhBb3lX9A/ID9u/htsH9E+5v7Xf57q8jf+qfvB+I/sf7h/5L3zf5X2U+YL+m/+A/sv7o9qPzE/rh/yP9d7y/pE9Bj+T/3brR/2q9g79hvTC/cX4Uv2f/aX4FP1azIft1/xX459Cr7E8y9mF93/JH5D9o+1T/fvyA4wu4D7YOd7uSf8B9oHyx4GfjHqFf0//Oeor/tfab76fqn/d/lf9A380/nP+m/s/7s/37wDeiqq7xwr3pk867EQRj4sF8Vr7S/hIQy3Wllkzh2s/G//IPB6PZm2jMGDxnNSRYLYfRGEevWZrAFXM38eukePbQUnOuJTcjK1gzizg3qrWsZK0+l/tJaAAhsjVR9HrgK6yC34XXeKb3XIVTY7Sb4A5zusdf9LPYkB45MPQ41CS+PhThe5jsOMlKOJm6zcoJvBA7x9eEzG+YGi261VPCXTkkbCsBQvvdWzfV0uZ19noO+D2MmviTovl+SZx8Pbnfezhvs6x5EcJ8GpgAA/v/0G497QwFyv9ZMRCA4v9RJc/V7IK94BQ8g/oxN4enKgPm9wJqlGlzJbuV9pdqYe/3xlpKl+PjFzzOfWplYwjBO/1Y+kHzQcHCjkSrS/AnbOf6I27JD2jIlFsaqbMvQE/yp0hv9WuTjZTx/2DWMMeCF0OX/YcrsXz5+I56tnr7uewHLuY/0uMHZnJoyX4Ezgtyuxu95snX3hnu1wCRWw90zrXejzTUGGBXVCLJZKKhIArXr2l4KBOPNI8+FQNxcu0xsY5cTvspxZwsXk/HtBoWyFFdR1BPpDPDsHsbL5YDD6xglmfTf/6NVr+rLP43EOIVFzgSfhaJnwEVTJ9R5QNFgLfTXH8iiERDhjgDCV/Xl5Jc9wsdRl8pXmWiwt993kQiAiFRwry+Jtykfvh2IBFPTkmozWKzU3I/bgsVUv3cgb4hg1sIx6moodKxdHf42k+toxQjGlSRKuCzKEiLP2/5rviqfUlmFfdLA9TAWzV54VBh9AtQtdmaaW15AuOJaLQoq0cb3Gt3lIRbdgO/4x4JDN16NQIfaZalzjgALeNnej8yKH8Rh/HOFPaAvdrP3mZ8+YGIQPXW+TLgQHZyAsmk++Pk7mOtJlib+i/Muk4sZDbITEcfCyusLn3PKi9yWpYlaZgpRYCOa5GBgPrRWq/boK3kX04q8fnaRWf72UJ23hPpZkW8ejkPVHBL01iXzGVpH77fTLVC5eRlmzAKtSLXngduB2S4kbYgoOirBUKLuydOTmAwhh5j1xeUxts/v7WhY0k2xbpnH1ol8Th/JSebhwU5MWCkatzQ0vQNyh01PbDMQrWuc5QL6uOKldGPbL5ewcd7Jhl0SBOTwZE2HxzEhGog1BLL4FtqQq4h7USl1iLhqRu6/pG7QJBA38bqZuPb3fwVzs4UpaqoXaakQ0soairpxeHx32tb5ZBhfjCt+Xs8ERiYPUapJn4kwb5hZRTxLb4EY+5r+HzLqiovwsi01k3jZnYyPIVaduJ6i8uT5I4fXQIfvN8wJBmDzDWvnNDtnd4Hqd/iorMumQUxEkN9IHISy25mj966ojWxS2kjAkr6ORpfb4yFTn3eVqzDWCM+AudQ3d0aTIOakKojqHRlIaMN9x8ATMa0T+JQyx++W/Uc8cIs1QKLOb9FwuJA8RY3CCEupWegoPwAunZpVd8LvmdgHhiP4P7QhIdyWkEfUSssvge2up2SDzJiTyGvLIUxmOjjO4k+DK7jIiAGWQH/DuRAmH701A3vkI8nXAEhFih4eCHmGRi2XzSEMduDBT7vMfI37IS+xNQqDnEriu+j3zsm/f+YZZr42ihhCY8x16zGYVvDr0vV589z2vxPJTwArzYUA1gGLabSSHtL/KGYykvdUmphe4lnm43ZAWH42jHx2yiR5J0seLdHQ76/SE30l0fIzgBpq2DSAsbSvUd6+U6s8RHMWtpx/51uzufTClm/DtLOinbeNgwB5IlaMx+G9xCNBdF3MpsW8DhIJsib/JFPEbivWz5lR5TGy16Xt4ppv6VivVVBTiGeKsTMidbHgVGP1LyiMFLOM7I+d0BSSaZ3HEDGy7D2q7hALjY0gNAHBgdj0AuomOT4W7Acnl12eozBWHVMDmpH1Gvo1uTpEsFcawHv9+3wRf/h2FLwwF4kJ9vu/5NRxOfhLN95a5FHII19MVAKruhDR7rq72J7s6RdXJeo/4XmzEK49aWPRYCXU6xm5f/x2Aj7srREYhBuELaFE/g74PxUkf6vcg9oPMxiXdalBalcbx04FSR1lWLTE54josKPLHljXocWq/+W4CS4aQ537BxHA8VJKcjBn8ziM2EW+ELRoWtEhvQ/K/L0Ujjmv2vmfgfahVopH7Pjy8pX0WtDPyC7uXQnKNt/+Hziw4IAUJ/qvUrpsx+xLIi/AzVMcJK/okpcPLH163HYL4l3qCZIUEQTrUgCMEcx011pgS1ODIcpIqMqKQEUn+8ju3qom5gtmmDCP/hcm+MqruXJm4dhw6qbpNoy7BeVOMMLnQhY8zg6E6bZikPmLCQC9KtoRn5lA/7Yf5nd2z6by8KDswc6QF/kyuR+BfdtK2cR35nQvoli5f7P51xLspHsGuT2ipRUQP44cpm0iM7RfagXVimB9NgTN67qGy7c46rocvl/+RSoqYDIBq4Yn+OH4oGoiXKGhUtMKhpiGZMQEmAW/JSmi1/tc+2JFdd9YIFOEAQRavnCakg9J/ezaSLa+NJ13erNlV/8MZ9m5o/cw5Fu/juYHcbymmgiomsrJ/0TE+ylKA1QNSZLyDUQWXYbDz+hnUnS56X2/iJQFlO91w7ZT9wTNtXh22/hqr4ZD3OQ/grPhRTJ/dma+wTe53vO9YpAX9Km5F5Crfa5ss9S5Qdvzv0LMcKrXK1LeoQPoH9cdoCkF/R/ghnk3oN0FyW5hDsk1cLj6JvcFrOfZ/TKltovck4cU1Gn846jDv+YzxaCnSd5AHxytwHd/0YoviYQBxrjZrwvFXWpamQr7xzLnPF1bOqiz47ul2yr/cOgDV8NnbCpXXD49LVzoht+v57ypuOB78R3W1gNPxZri8TwF/rvtOP0M6Y9C4f7+4vY+1izPJgx2PtcqNAIbSJDM2HVAAADMe02YIafQsGHAhpU8V4qvx04KZcmpCBxPAIDP0pSfDWshkaSo8lba7CXXci8ItNcC0OwfPX6376FDSddiQQ7BvQz3LPbDBC5nT+s5T3J7u74zJ7lpsPKFG4MMCqrxDiOED44OvYJ/V5CFTwnzAQZ/lEHKj7035zjiobyeQstVFINvAQAAAAA="
                    alt=""
                  />
                </div>
                <div>21</div>
              </div>
              <div className="d-flex mt-3 ">
                <div className="d-flex gap-3 ">
                  <div>
                    <span className="rating fw-bold ">
                      {" "}
                      4.1{" "}
                      <i
                        className="fa-sharp fa-solid fa-star ms-1"
                        style={{ color: "#f0f2f4" }}
                      ></i>
                    </span>
                  </div>
                  <div style={{ color: "#878787", fontWeight: "500" }}>
                    214 ratings and 18 reviews
                  </div>
                </div>
              </div>

              <div className="d-flex mt-5 ">
                <div>
                  <span
                    style={{ color: "#878787" }}
                    className="fw-semibold fs-6"
                  >
                    Size
                  </span>
                </div>
                <div className=" d-flex gap-3  ms-5">
                  <div>
                    <button className="button1  bg-white ">S</button>
                  </div>
                  <div>
                    <button className="button1  bg-white">M</button>
                  </div>
                  <div>
                    <button className="button1  bg-white">L</button>
                  </div>
                  <div>
                    <button className="button1  bg-white">XL</button>
                  </div>
                  <div>
                    <button className="button1  bg-white">XXL</button>
                  </div>
                  <div>
                    <button className="button1  bg-white">3XL</button>
                  </div>
                </div>
              </div>

              {/* ************************************************************************************************************ */}
              <div className="mt-3">
                <div>
                  <h6>Available Offers</h6>
                </div>
                <div>
                  <div className="d-flex">
                    <img
                      className="mt-1"
                      height={"18px"}
                      src={OfferTag}
                      alt="offerTag"
                    />
                    <p style={{ fontSize: "15px" }} className="ms-3">
                      <span className=" fw-semibold ">Special Price</span> Get
                      extra 12% off (price inclusive of cashback/coupon)T&C
                    </p>
                  </div>
                  <div className="d-flex">
                    <img
                      className="mt-1"
                      height={"18px"}
                      src={OfferTag}
                      alt="offerTag"
                    />
                    <p style={{ fontSize: "15px" }} className="ms-3">
                      <span className=" fw-semibold ">Combo Offer</span> Buy 2
                      items save 5%; Buy 3 or more save 10%See all productsT&C
                    </p>
                  </div>
                  <div className="d-flex">
                    <img
                      className="mt-1"
                      height={"18px"}
                      src={OfferTag}
                      alt="offerTag"
                    />
                    <p style={{ fontSize: "15px" }} className="ms-3">
                      <span className=" fw-semibold ">Bank Offer</span> 10% off
                      on AU Bank Credit Card Txns, up to ₹1,500 on orders of
                      ₹5,000 and aboveT&C
                    </p>
                  </div>
                  <div className="d-flex">
                    <img
                      className="mt-1"
                      height={"18px"}
                      src={OfferTag}
                      alt="offerTag"
                    />
                    <p style={{ fontSize: "15px" }} className="ms-3">
                      <span className=" fw-semibold ">Bank Offer</span> 10% off
                      on Bank of Baroda Credit Card Txns, up to ₹1,500 on orders
                      of ₹5,000 and aboveT&C
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <div>
                  <h6>Available Offers</h6>
                </div>
                <div>
                  <div className="d-flex">
                    <img
                      className="mt-1"
                      height={"18px"}
                      src={OfferTag}
                      alt="offerTag"
                    />
                    <p style={{ fontSize: "15px" }} className="ms-3">
                      <span className=" fw-semibold ">Special Price</span> Get
                      extra 12% off (price inclusive of cashback/coupon)T&C
                    </p>
                  </div>
                  <div className="d-flex">
                    <img
                      className="mt-1"
                      height={"18px"}
                      src={OfferTag}
                      alt="offerTag"
                    />
                    <p style={{ fontSize: "15px" }} className="ms-3">
                      <span className=" fw-semibold ">Combo Offer</span> Buy 2
                      items save 5%; Buy 3 or more save 10%See all productsT&C
                    </p>
                  </div>
                  <div className="d-flex">
                    <img
                      className="mt-1"
                      height={"18px"}
                      src={OfferTag}
                      alt="offerTag"
                    />
                    <p style={{ fontSize: "15px" }} className="ms-3">
                      <span className=" fw-semibold ">Bank Offer</span> 10% off
                      on AU Bank Credit Card Txns, up to ₹1,500 on orders of
                      ₹5,000 and aboveT&C
                    </p>
                  </div>
                  <div className="d-flex">
                    <img
                      className="mt-1"
                      height={"18px"}
                      src={OfferTag}
                      alt="offerTag"
                    />
                    <p style={{ fontSize: "15px" }} className="ms-3">
                      <span className=" fw-semibold ">Bank Offer</span> 10% off
                      on Bank of Baroda Credit Card Txns, up to ₹1,500 on orders
                      of ₹5,000 and aboveT&C
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Offers />
    </>
  );
};

export default SingleProductPage;

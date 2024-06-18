import firstImage from "/Images/Group 575.png";
import secondImage from "/Images/Group 583.png";
import thirdImage from "/Images/Group 589.png";
import forthImage from "/Images/Group 597.png";
import adidas from "/Images/urn_aaid_sc_US_2186e175-b022-45db-a2f4-c9ba6e4bde30 (3).png";

export default function SimilarPrducts() {
  return (
    <div className="container my-5" id="similarProducts">
      <h3>Similar Products</h3>
      <p className=" fs-5">You may like these products also</p>
      <div className="row">
        <div className="col-lg-3 col-md-6 ">
          <div className="product">
            <div className="image d-flex justify-content-center text-center align-items-center">
              <img src={firstImage} alt="model image" />
            </div>
            <div className="content">
              <p className="fw-bold ms-4">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              </p>
              <div className="d-flex  justify-content-between">
                <span className="ms-4">9,999 LE</span>
                <img src={adidas} alt="adidas logo" className="me-4" />
              </div>
              <div className="text-center my-2">
                <i className="fa-solid fa-star me-1"></i>
                <i className="fa-solid fa-star me-1"></i>
                <i className="fa-solid fa-star me-1"></i>
                <i className="fa-solid fa-star me-1"></i>
                <i className="fa-regular fa-star me-1"></i>
              </div>
              <div className="text-center my-3">
                <span>
                  Pickup From:<span className="fw-bold">Genena Mall</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 ">
          <div className="product">
            <div className="image d-flex justify-content-center text-center align-items-center">
              <img src={secondImage} alt="model image" />
            </div>
            <div className="content">
              <p className="fw-bold ms-4">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              </p>
              <div className="d-flex  justify-content-between">
                <span className="ms-4">9,999 LE</span>
                <img src={adidas} alt="adidas logo" className="me-4" />
              </div>
              <div className="text-center my-2">
                <i className="fa-solid fa-star me-1"></i>
                <i className="fa-solid fa-star me-1"></i>
                <i className="fa-solid fa-star me-1"></i>
                <i className="fa-solid fa-star me-1"></i>
                <i className="fa-regular fa-star me-1"></i>
              </div>
              <div className="text-center my-3">
                <span>
                  Pickup From:<span className="fw-bold">Genena Mall</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6  ">
          <div className="product">
            <div className="image d-flex justify-content-center text-center align-items-center">
              <img src={thirdImage} alt="model image" />
            </div>
            <div className="content">
              <p className="fw-bold ms-4">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              </p>
              <div className="d-flex  justify-content-between">
                <span className="ms-4">9,999 LE</span>
                <img src={adidas} alt="adidas logo" className="me-4" />
              </div>
              <div className="text-center my-2">
                <i className="fa-solid fa-star me-1"></i>
                <i className="fa-solid fa-star me-1"></i>
                <i className="fa-solid fa-star me-1"></i>
                <i className="fa-solid fa-star me-1"></i>
                <i className="fa-regular fa-star me-1"></i>
              </div>
              <div className="text-center my-3">
                <span>
                  Pickup From:<span className="fw-bold">Genena Mall</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6  ">
          <div className="product">
            <div className="image d-flex justify-content-center text-center align-items-center">
              <img src={forthImage} alt="model image" />
            </div>
            <div className="content">
              <p className="fw-bold ms-4">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              </p>
              <div className="d-flex  justify-content-between">
                <span className="ms-4">9,999 LE</span>
                <img src={adidas} alt="adidas logo" className="me-4" />
              </div>
              <div className="text-center my-2">
                <i className="fa-solid fa-star me-1"></i>
                <i className="fa-solid fa-star me-1"></i>
                <i className="fa-solid fa-star me-1"></i>
                <i className="fa-solid fa-star me-1"></i>
                <i className="fa-regular fa-star me-1"></i>
              </div>
              <div className="text-center my-3">
                <span>
                  Pickup From:<span className="fw-bold">Genena Mall</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

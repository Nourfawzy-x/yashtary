import SimilarPrducts from "../../Compontents/SimilarProducts/SimilarProducts";
import OneProduct from "../../Compontents/OneProduct/OneProduct";
import adidasLogo from "/Images/urn_aaid_sc_US_2186e175-b022-45db-a2f4-c9ba6e4bde30 (3).png";
import style from "./ProductDetails.module.scss";
import Filteration from "../../Compontents/Filtertion/Filteration";

export default function ProductDetails() {
  return (
    <>
      <header className="product-header py-0 pb-0">
        <nav className={`navbar navbar-expand-lg ${style.navbarId}`}>
          <div className="container">
            <div
              className={`input-group w-25 rounded-5 border-1 border-secondary ${style.search_border}`}
            >
              <span className="input-group-text rounded-pill border-0">
                <i className="fa-solid fa-magnifying-glass"></i>
              </span>

              <input
                type="text"
                aria-label="Last name"
                className="form-control rounded-pill border-0"
                placeholder="search"
              />
            </div>
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <div
                className={`navbar-nav mx-auto d-flex justify-content-center align-items-center  text-center w-50  ${style.span}`}
              >
                <img
                  src={adidasLogo}
                  alt="addidas logo"
                  className="text-center"
                />
              </div>
              <ul
                className={`navbar-nav ms-auto mb-2 mb-lg-0 ${style.icon_nav}`}
              >
                <li className={`nav-item ${style.navbar_item} mx-2`}>
                  <a className="nav-link">
                    <i className="fa-solid fa-cart-shopping  text-black me-2"></i>
                    <span className="fw-semibold"> Cart</span>
                  </a>
                </li>
                <li className={`nav-item ${style.navbar_item} mx-2`}>
                  <a className="nav-link">
                    <i className="fa-regular fa-heart text-black me-2"></i>

                    <span className="fw-semibold">wishlist</span>
                  </a>
                </li>
                <li className={`nav-item ${style.navbar_item} mx-2`}>
                  <a className="nav-link ">
                    <i className="fa-regular fa-user text-black me-2"></i>
                    <span className="fw-semibold">Login</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <Filteration />

      {/* <OneProduct />
      <SimilarPrducts /> */}
    </>
  );
}

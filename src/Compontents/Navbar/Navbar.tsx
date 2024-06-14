import React from "react";
import style from "./Navbar.module.scss";
import yeshteryLogo from "../../../public/Images/urn_aaid_sc_US_2186e175-b022-45db-a2f4-c9ba6e4bde30 (5).png";
import burgerIcon from "../../../public/Images/urn_aaid_sc_US_2186e175-b022-45db-a2f4-c9ba6e4bde30 (1).png";

export default function Navbar() {
  return (
    <>
      <nav className={`navbar navbar-expand-lg mb-0 ${style.navbarId}`}>
        <div className="container">
          <a className="navbar-brand " href="#">
            <img src={burgerIcon} alt="burgerIcon" className="me-4" />
            <img src={yeshteryLogo} alt="yeshtery logo" />
          </a>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div
              className={`navbar-nav mx-auto d-flex justify-content-center align-items-center  text-center w-50  ${style.span}`}
            >
              <i className="fa-solid fa-chevron-left me-2 mt-1"></i>
              <span>
                Valentine's day offers! Buy to get One free{" "}
                <span className="fw-bold text-decoration-underline">
                  Shop Now
                </span>
              </span>
              <i className="fa-solid fa-chevron-right ms-2 mt-1"></i>
            </div>

            <ul className={`navbar-nav ms-auto mb-2 mb-lg-0 ${style.icon_nav}`}>
              <li className={`nav-item ${style.navbar_item} mx-2`}>
                <a className="nav-link" href="#">
                  <i className="fa-solid fa-phone text-black me-2"></i>
                  <span className="fw-semibold"> Contact Us</span>
                </a>
              </li>
              <li className={`nav-item ${style.navbar_item} mx-2`}>
                <a className="nav-link" href="#">
                  <i className="fa-regular fa-heart text-black me-2"></i>
                  <span className="fw-semibold"> Track Order</span>
                </a>
              </li>
              <li className={`nav-item ${style.navbar_item} mx-2`}>
                <a className="nav-link " href="#">
                  <i className="fa-solid fa-location-dot text-black me-2"></i>
                  <span className="fw-semibold">Find A Store</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

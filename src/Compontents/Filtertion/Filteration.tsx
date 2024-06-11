import React from "react";
import style from "./Filteration.module.scss";

export default function Filteration() {
  return (
    <>
      <div className={` py-0 ${style.filteration}`}>
        <div className="container py-3">
          <div className="row">
            <div className="col text-center fw-semibold">Men</div>
            <div className="col text-center fw-semibold">Women</div>
            <div className="col text-center fw-semibold">Unisex</div>
            <div className="col text-center fw-semibold">Kids</div>
            <div className="col text-center fw-semibold">Best seller</div>
            <div className="col text-center fw-semibold">New Arrivals</div>
            <div className="col text-center fw-semibold">Offers</div>
          </div>
        </div>
      </div>

      <div className="mobile-filteration mt-3 container  end-0">
        <div
          className="modal fade"
          id="exampleModalToggle"
          aria-hidden="true"
          aria-labelledby="exampleModalToggleLabel"
          tabindex="-1"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalToggleLabel">
                  filter
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body d-flex flex-column justify-content-center align-items-center">
                <div className="btn-group w-100 my-4">
                  <button
                    type="button"
                    className="btn dropdown-toggle px-5 bg-white"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Men
                  </button>
                </div>
                <div className="btn-group w-100 mb-4">
                  <button
                    type="button"
                    className="btn dropdown-toggle px-5 bg-white"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Women
                  </button>
                </div>
                <div className="btn-group w-100 mb-4">
                  <button
                    type="button"
                    className="btn dropdown-toggle px-5 bg-white"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Unisex
                  </button>
                </div>
                <div className="btn-group w-100 mb-4">
                  <button
                    type="button"
                    className="btn dropdown-toggle px-5 bg-white"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Kids
                  </button>
                </div>
                <div className="btn-group w-100 mb-4">
                  <button
                    type="button"
                    className="btn dropdown-toggle px-5 bg-white"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Best Sellers
                  </button>
                </div>
                <div className="btn-group w-100 mb-4">
                  <button
                    type="button"
                    className="btn dropdown-toggle px-5 bg-white"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    New Arrivals
                  </button>
                </div>
                <div className="btn-group w-100 mb-4">
                  <button
                    type="button"
                    className="btn dropdown-toggle px-5 bg-white"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Offers
                  </button>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  className="btn bg-black text-white border-2"
                  data-bs-target="#exampleModalToggle2"
                  data-bs-toggle="modal"
                >
                  save
                </button>
              </div>
            </div>
          </div>
        </div>

        <button
          className="filter-btn bg-transparent text-black rounded-2 py-1 px-5 "
          data-bs-target="#exampleModalToggle"
          data-bs-toggle="modal"
        >
          filtertion
        </button>
      </div>
    </>
  );
}
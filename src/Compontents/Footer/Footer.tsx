import React from "react";
import yeshteryLogo from "../../../public/Images/urn_aaid_sc_US_2186e175-b022-45db-a2f4-c9ba6e4bde30 (2).png";

export default function Footer() {
  return (
    <>
      <footer className="mt-5 py-3">
        .
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div>
                <img src={yeshteryLogo} alt="yeshtery logo" />
              </div>
              <div className="content">
                <p className="my-4">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat.
                  <p className="my-4">
                    {" "}
                    Ut wisi enim ad minim veniam, quis nostrud exerci tation
                    ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                    consequat. Duis autem vel eum iriure dolor in hendrerit in
                    vulputate velit esse molestie consequat, vel illum dolore eu
                    feugiat nulla. Lorem ipsum dolor sit amet, consectetuer
                    adipiscing elit, sed dia
                  </p>
                  <p className="my-4">
                    {" "}
                    m nonummy nibh euismod tincidunt ut laoreet dolore magna
                    aliquam erat volutpat. Ut wisi enim ad minim veniam, quis{" "}
                  </p>
                </p>
              </div>
            </div>
            <div className="col-md-8">
              <div className="subscribe">
                <p className="my-3">Subscribe to our newsletter</p>
                <div className="input-group mb-3  bg-white rounded-5 ">
                  <input
                    type="text"
                    className="form-control rounded-5 border-0"
                    placeholder="Enter your Email"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <button
                    className="input-group-text rounded-5 px-5 py-2 fw-bold"
                    id="basic-addon2"
                  >
                    subscribe
                  </button>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <ul>
                      <li className="my-3">About Us</li>
                      <li className="my-3">Contact Us</li>
                      <li className="my-3">Track Order</li>
                      <li className="my-3">Terms & Conditions</li>
                      <li className="my-3">Privacy Policy</li>
                      <li className="my-3">Sell With Us</li>
                      <li className="my-3">Sell With Us</li>
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <ul>
                      <li className="my-3">
                        <i className="fa-brands fa-square-facebook me-2 text-primary fa-xl"></i>
                        /YESHTERY
                      </li>
                      <li className="my-4">
                        <i className="fa-brands fa-linkedin me-2 text-primary fa-xl"></i>
                        /YESHTERY
                      </li>
                      <li className="my-4">
                        <i
                          className="fa-brands fa-instagram me-2 fa-xl"
                          style={{ color: "#e1379a" }}
                        ></i>
                        /YESHTERY
                      </li>
                      <li className="my-4">
                        {" "}
                        <i
                          className="fa-brands fa-square-twitter me-2  fa-xl"
                          style={{ color: "#419fe6" }}
                        />
                        /YESHTERY
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

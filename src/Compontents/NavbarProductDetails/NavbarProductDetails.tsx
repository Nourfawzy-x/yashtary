import { useState } from "react";
import style from "./NavbarProductDetails.module.scss";
import adidasLogo from "/Images/urn_aaid_sc_US_2186e175-b022-45db-a2f4-c9ba6e4bde30 (3).png";

interface Product {
  id: number;
  name: string;
  photos: any;
  description: string;
  category: string;
  price: number;
  qty: number;
  Rate: number;
  PeopleRated: number;
  photosDetails: any;
  photoArray: [];
}

interface NavbarProductDetailsProps {
  cartItems: Product[];
}

export default function NavbarProductDetails({
  cartItems,
}: NavbarProductDetailsProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
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
                aria-label="Search"
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
                className={`navbar-nav mx-auto d-flex justify-content-center align-items-center text-center w-50 ${style.span}`}
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
                  <a className="nav-link" onClick={toggleDropdown}>
                    <button
                      type="button"
                      className="btn position-relative btn-light"
                    >
                      <i className="fa-solid fa-cart-shopping text-black me-2 position-relative fs-5"></i>

                      <span
                        className={`position-absolute top-0 start-100 translate-middle text-black ${style.countCartItems}`}
                      >
                        <span>{cartItems.length}</span>
                      </span>
                    </button>
                  </a>
                  {isDropdownOpen && (
                    <div
                      className="dropdown-menu show p-3"
                      style={{ width: "300px" }}
                    >
                      {cartItems.length === 0 ? (
                        <div>Cart is empty</div>
                      ) : (
                        cartItems.map((item) => (
                          <div
                            key={item.id}
                            className="d-flex  align-items-center"
                          >
                            <img
                              src={item.photosDetails}
                              alt={item.name}
                              width="130"
                            />
                            <div>
                              <p
                                className={`fw-semibold  text-lowercase ps-4 fs-6 ${style.name}`}
                              >
                                {item.name}
                              </p>
                              <p className="text-muted fw-semibold ps-4">
                                Qty: {item.qty}
                              </p>
                              <p className={`fw-semibold ${style.price} ps-4`}>
                                {item.qty} X {item.price} LE
                              </p>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  )}
                </li>
                <li className={`nav-item ${style.navbar_item} mx-2`}>
                  <a className="nav-link">
                    <i className="fa-regular fa-heart text-black me-2"></i>
                    <span className="fw-semibold">Wishlist</span>
                  </a>
                </li>
                <li className={`nav-item ${style.navbar_item} mx-2`}>
                  <a className="nav-link">
                    <i className="fa-regular fa-user text-black me-2"></i>
                    <span className="fw-semibold">Login</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

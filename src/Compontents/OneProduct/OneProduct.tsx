import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import adidas from "/Images/urn_aaid_sc_US_2186e175-b022-45db-a2f4-c9ba6e4bde30 (3).png";
import style from "./OneProduct.module.scss";
import { getOneProduct } from "../../services/ProductsService";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import firstImg from "../../../public/Images/urn_aaid_sc_US_2186e175-b022-45db-a2f4-c9ba6e4bde30 (4).png";
import seccondImg from "../../../public/Images/urn_aaid_sc_US_2186e175-b022-45db-a2f4-c9ba6e4bde30.png";
import Slider from "react-slick";
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

interface OneProductProps {
  cartItems: Product[];
  onAddToCart: (product: Product) => void;
  onRemoveFromCart: (product: Product) => void;
}

export default function OneProduct({
  cartItems,
  onAddToCart,
  onRemoveFromCart,
}: OneProductProps) {
  let { id } = useParams<{ id: string }>();
  const itemPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const totalPrice = itemPrice;
  const { data, isLoading, error } = useQuery(
    ["oneProduct", id],
    () => getOneProduct(id!),
    {
      enabled: !!id,
    }
  );
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  const renderQuantityControls = (item: Product) => (
    <div
      className={`${style.inline_flex_container} rounded-5 p-1 my-3`}
      key={item.id}
    >
      <button
        id="decrement"
        onClick={() => onRemoveFromCart(item)}
        className={`rounded-circle px-3 py-2 fw-semibold border-0 ${style.button}`}
      >
        -
      </button>
      <input
        type="number"
        id="input"
        value={item.qty}
        className={`text-center border-0 ${style.input}`}
        readOnly
      />
      <button
        id="increment"
        onClick={() => onAddToCart(item)}
        className={`rounded-circle px-3 py-2 fw-semibold border-0 ${style.button}`}
      >
        +
      </button>
    </div>
  );

  const defaultProduct: Product = {
    id: data?.id || 0,
    name: data?.name || "",
    photos: data?.photos || "",
    description: data?.description || "",
    category: data?.category || "",
    price: data?.price || 0,
    qty: 0,
    Rate: data?.Rate || 0,
    PeopleRated: data?.PeopleRated || 0,
    photosDetails: data?.photosDetails || "",
    photoArray: data?.photoArray || [],
  };
  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-content-center mt-5">
        <i className="fa-solid fa-spinner fa-flip-both fa-spin text-black fa-2xl"></i>
      </div>
    );
  }
  if (error) {
    return <div>Error loading product</div>;
  }
  return (
    <>
      {data ? (
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="image-product">
                <img src={data.photosDetails} className="w-100" />
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <div className="w-75 py-2">
                  {
                    <Slider {...settings}>
                      {data?.photosArray.map((photos: any, index: number) => (
                        <img
                          src={photos}
                          className="px-1"
                          key={index}
                          alt={`Photo ${index}`}
                        />
                      ))}
                    </Slider>
                  }
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="product-info mt-3">
                <img src={adidas} alt="logo" className="my-3" />
                <p className={`fw-semibold  fs-5  ${style.name}`}>
                  {data.name}
                </p>
                <p className="text-muted fw-semibold">{data.category}</p>
                <div className="d-flex">
                  <div className="text-center my-2 pe-3">
                    <i className="fa-solid fa-star me-1"></i>
                    <i className="fa-solid fa-star me-1"></i>
                    <i className="fa-solid fa-star me-1"></i>
                    <i className="fa-solid fa-star me-1"></i>
                    <i className="fa-regular fa-star me-1"></i>
                  </div>
                  <div className="fw-semibold my-2 pe-3">{data.Rate} of 5</div>
                  <div
                    className={`fw-semibold text-muted my-2 ${style.peopleRated}`}
                  >
                    {data.PeopleRated} Rated
                  </div>
                </div>
                <div className="d-flex my-1">
                  <div className={`text-center my-1 pe-3 ${style.price}`}>
                    {data.price} LE
                  </div>
                  <div
                    className={`fw-semibold my-2 pe-4 text-decoration-line-through ${style.priceBeforeSale}`}
                  >
                    {data.priceBeforeSale} LE
                  </div>
                  <div className={` my-1 `}>
                    <button className={`btn  fw-semibold ${style.button}`}>
                      30% off
                    </button>
                  </div>
                </div>
                <div className="fw-bold fs-3">size</div>
                <div className="d-flex mt-3 mb-4">
                  <div className={`${style.sizes} me-2`}>S</div>
                  <div className={`${style.sizes} mx-2`}>M</div>
                  <div className={`${style.sizes} mx-2`}>L</div>
                  <div className={`${style.sizes} mx-2`}>XL</div>
                  <div className={`${style.sizes} mx-2`}>XXL</div>
                </div>
                <div className="fw-bold fs-3">color</div>
                <div className="d-flex mt-3 mb-4">
                  <div className={`${style.sizes} me-2`}>
                    <img src={firstImg} />
                  </div>
                  <div className={`${style.sizes} ${style.img} mx-2`}>
                    <img src={seccondImg} />
                  </div>
                </div>
                <div className="fw-bold fs-3">Quantity</div>
                {cartItems && cartItems.length > 0
                  ? cartItems.map((item) => renderQuantityControls(item))
                  : renderQuantityControls(defaultProduct)}
                <div className="my-2">
                  <button
                    className="btn btn1 me-4 text-white rounded-pill px-5 fw-semibold "
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasWithBothOptions"
                    aria-controls="offcanvasWithBothOptions"
                    onClick={() => onAddToCart({ ...data, qty: 1 })}
                  >
                    add to cart
                  </button>

                  <div
                    className="offcanvas offcanvas-end pe-5 ps-0 ms-0 "
                    data-bs-scroll="true"
                    id="offcanvasWithBothOptions"
                    aria-labelledby="offcanvasWithBothOptionsLabel"
                  >
                    <div className="offcanvas-header">
                      <button
                        type="button"
                        className="btn-close me-0 pe-0"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      ></button>
                    </div>
                    <h3
                      className={`text-center fw-bold ${style.canvas_header}`}
                    >
                      My Cart
                    </h3>
                    <div className="offcanvas-body">
                      <p className="fw-bold py-1">Cart Summary</p>
                      <div>
                        {cartItems.length === 0 && (
                          <div className="text-center fw-semibold bg-primary  text-white py-2 rounded-2 d-flex justify-content-center align-content-center">
                            cart is empty
                          </div>
                        )}
                        {cartItems.map((item) => (
                          <div key={item.id} className=" w-100">
                            <div className="d-flex align-items-center">
                              <img
                                src={item.photosDetails}
                                alt={item.name}
                                width="140"
                              />
                              <div>
                                <p
                                  className={`ps-2  fw-semibold  fs-5 pt-2 ${style.name}`}
                                >
                                  {item.name}
                                </p>
                                <p className=" ps-2 text-muted fs-6 fw-semibold">
                                  Quaninty:
                                  <span className="text-black ps-1">
                                    {item.qty}
                                  </span>
                                </p>
                                <div className="d-flex justify-content-between">
                                  <p
                                    className={` ps-2 fs-5 fw-semibold ${style.price}`}
                                  >
                                    {item.price}
                                    <span className="text-muted fs-6"> LE</span>
                                  </p>

                                  <button
                                    onClick={() => onRemoveFromCart(item)}
                                    className="rounded-pill btn2 border-0 mb-3 ms-2 "
                                  >
                                    Remove
                                  </button>
                                </div>
                              </div>
                            </div>

                            <button onClick={() => onAddToCart(item)}>+</button>
                          </div>
                        ))}
                        {cartItems.length !== 0 && (
                          <>
                            <div className="row ">
                              <div className="fs-5 fw-bold text-center ">
                                {" "}
                                Total:{totalPrice} EGP
                              </div>
                            </div>
                            <div className="d-flex justify-content-center my-4 align-items-center text-center">
                              <button className="btn2 rounded-pill pointer-event border-0 px-4 fw-medium me-3 py-2">
                                Review Cart
                              </button>
                              <button className="btn1 rounded-pill text-white border-0 pointer-event fw-medium px-4 py-2">
                                Complete Check
                              </button>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  <button className="btn px-4 btn2 text-black rounded-pill px-4 fw-semibold my-3">
                    pick from store
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

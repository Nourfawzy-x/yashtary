import axios from "axios";
import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import adidas from "/Images/urn_aaid_sc_US_2186e175-b022-45db-a2f4-c9ba6e4bde30 (3).png";
import style from "./OneProduct.module.scss";
interface Photo {
  url: string;
}
interface Product {
  id: number;
  name: string;
  photos: Photo[];
  description: string;
  category: string;
  price: number;
  qty: number;
  Rate: number;
  PeopleRated: number;
}
export default function OneProduct() {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [counter, setCounter] = useState(0);
  let { id } = useParams<{ id: string }>();

  const increment = () => {
    setCounter((counter) => counter + 1);
  };
  const decrement = () => {
    setCounter((counter) => counter - 1);
  };
  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  // const parsePrice = (price: string): number => {
  //   const numericPrice = parseFloat(price.replace(/[^\d.-]/g, ""));
  //   return isNaN(numericPrice) ? 0 : numericPrice;
  // };

  // const itemsPrice = cartItems.reduce((a, c) => {
  //   const parsedPrice = parsePrice(c.price);
  //   console.log(`Price: ${parsedPrice}, Qty: ${c.qty}`);
  //   return a + parsedPrice * c.qty;
  // }, 0);
  // console.log(`Items Price: ${price}`);
  // const shippingPrice = 50;
  // const totalPrice = itemsPrice + shippingPrice;
  // console.log(`Total Price: ${totalPrice}`);

  const onAddToCart = (product: Product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemoveFromCart = (product: Product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist && exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  const getOneProduct = async (id: string) => {
    const response = await axios.get(`http://localhost:3000/products/${id}`);
    console.log(response.data.photos[0]);

    return response.data;
  };
  const { data, isLoading, error } = useQuery(["oneProduct", id], () =>
    getOneProduct(id)
  );

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
                <img src={data.photos[0]} className="w-100" />

                <p>{data.name}</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="product-info mt-3">
                <img src={adidas} alt="logo" className="my-3" />
                <p className={`fw-semibold ${style.description}`}>
                  {data.description}
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
                  <div className={`${style.sizes} me-2`}>small</div>
                  <div className={`${style.sizes} mx-2`}>medium</div>
                  <div className={`${style.sizes} mx-2`}>Large</div>
                  <div className={`${style.sizes} mx-2`}>X Large</div>
                  <div className={`${style.sizes} mx-2`}>XX Large</div>
                </div>
                <div className="fw-bold fs-3">color</div>
                <div className="d-flex mt-3 mb-4">
                  <div className={`${style.sizes} me-2`}>small</div>
                  <div className={`${style.sizes} mx-2`}>medium</div>
                </div>
                <div className="fw-bold fs-3">Quantity</div>
                <div
                  className={`${style.inline_flex_container}  rounded-5 p-1 my-3`}
                >
                  <button
                    id="decrement"
                    onClick={decrement}
                    className={` rounded-circle px-3 py-2 fw-semibold border-0 ${style.button}`}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    id="input"
                    value={counter}
                    className={`text-center border-0 ${style.input}`}
                  />
                  <button
                    id="increment"
                    onClick={increment}
                    className={` rounded-circle px-3 py-2 fw-semibold border-0 ${style.button}`}
                  >
                    +
                  </button>
                </div>
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
                    className="offcanvas offcanvas-end pe-5 ps-0 ms-0"
                    data-bs-scroll="true"
                    id="offcanvasWithBothOptions"
                    aria-labelledby="offcanvasWithBothOptionsLabel"
                  >
                    <div className="offcanvas-header">
                      <h3>my Cart</h3>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="offcanvas-body">
                      <p>Cart Summary</p>
                      <div>
                        {cartItems.length === 0 && <div>cart is empty</div>}
                        {cartItems.map((item) => (
                          <div key={item.id}>
                            <img
                              src={item.photos[0]}
                              alt={item.name}
                              width="50"
                            />
                            <p>{item.name}</p>
                            <p>
                              {item.qty} x {item.price} EGP
                            </p>
                            <button onClick={() => onAddToCart(item)}>+</button>
                            <button onClick={() => onRemoveFromCart(item)}>
                              -
                            </button>
                          </div>
                        ))}
                        {cartItems.length !== 0 && (
                          <div className="row">
                            <div>Total Price</div>
                            {/* <div>{totalPrice} EGP</div> */}
                          </div>
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

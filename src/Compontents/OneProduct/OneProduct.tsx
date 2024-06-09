import axios from "axios";
import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import adidas from "/Images/urn_aaid_sc_US_2186e175-b022-45db-a2f4-c9ba6e4bde30 (3).png";

interface Product {
  id: number;
  name: string;
  photos: string[];
  description: string;
  category: string;
  price: string; // Keep price as string initially to match API response
  qty: number;
}

export default function OneProduct() {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  let { id } = useParams<{ id: string }>();

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const parsePrice = (price: string): number => {
    const numericPrice = parseFloat(price.replace(/[^\d.-]/g, ""));
    return isNaN(numericPrice) ? 0 : numericPrice;
  };

  const itemsPrice = cartItems.reduce((a, c) => {
    const parsedPrice = parsePrice(c.price);
    console.log(`Price: ${parsedPrice}, Qty: ${c.qty}`);
    return a + parsedPrice * c.qty;
  }, 0);
  console.log(`Items Price: ${itemsPrice}`);
  const shippingPrice = 50;
  const totalPrice = itemsPrice + shippingPrice;
  console.log(`Total Price: ${totalPrice}`);

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
                <img src={data.photos[0]} alt={data.name} className="w-100" />
                <p>{data.name}</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="product-info">
                <img src={adidas} alt="logo" />
                <p>{data.description}</p>
                <p>{data.category}</p>
                <p>{data.price}</p>
                <p>size</p>
                <div className="d-flex">
                  <div className="p-3 border-1 bg-secondary rounded-circle border-black mx-2">
                    small
                  </div>
                  <div className="p-3 border-1 bg-secondary rounded-circle border-black mx-2">
                    medium
                  </div>
                  <div className="p-3 border-1 bg-secondary rounded-circle border-black mx-2">
                    Large
                  </div>
                  <div className="p-3 border-1 bg-secondary rounded-circle border-black mx-2">
                    X Large
                  </div>
                  <div className="p-3 border-1 bg-secondary rounded-circle border-black mx-2">
                    XX Large
                  </div>
                </div>
                <div className="my-2">
                  <button
                    className="btn btn1 mx-3 text-white"
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
                              {item.qty} x {parsePrice(item.price)} EGP
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
                            <div>{totalPrice} EGP</div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <button className="btn px-4 btn2 text-black">
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

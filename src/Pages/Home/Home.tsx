import React from "react";
import Product from "../../Compontents/Product/Product";

export default function Home() {
  return (
    <>
      {" "}
      <Product />
    </>
  );
}
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
/////////////////////////////
{
  /* {data ? (
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
                            {/* <div>{totalPrice} EGP</div> */
}
{
  /* </div>
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
      ) : null} */
}
/////////////////////////////////////////////
// {
//   "id": 2,
//   "name": "Smartphone",
//   "description": "Adidas black t-shirt lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
//   "price": 699.99,
//   "priceBeforeSale": 800,
//   "category": "Men",
//   "Rate": 4.3,
//   "PeopleRated": 22,
//   "stock": 150,
//   "photos": ["src/images/H18489_000_plp_model.avif"],
//   "detailPhotos": [
//     "src/images/H18489_000_plp_model.avif",
//     "https://example.com/images/smartphone_detail2.jpg"
//   ]
// },
// {
//   "id": 3,
//   "name": "Wireless Headphones",
//   "description": "Adidas black t-shirt lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
//   "price": 199.99,
//   "priceBeforeSale": 450,
//   "category": "Men",
//   "Rate": 3,
//   "PeopleRated": 19,
//   "stock": 200,
//   "photos": ["src/images/H39907_23_hover_model.avif"],
//   "detailPhotos": [
//     "https://example.com/images/headphones_detail1.jpg",
//     "https://example.com/images/headphones_detail2.jpg"
//   ]
// },
// {
//   "id": 4,
//   "name": "Coffee Maker",
//   "description": "Adidas black t-shirt lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
//   "price": "89.99 EGP",
//   "priceBeforeSale": 290,
//   "category": "Men",
//   "Rate": 4.9,
//   "PeopleRated": 12,
//   "stock": 75,
//   "photos": ["src/images/H58591_01_laydown.avif"],
//   "detailPhotos": [
//     "https://example.com/images/coffeemaker_detail1.jpg",
//     "https://example.com/images/coffeemaker_detail2.jpg"
//   ]
// },
// {
//   "id": 5,
//   "name": "Running Shoes",
//   "description": "Adidas black t-shirt lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
//   "price": 3500,
//   "priceBeforeSale": 5000,
//   "category": "Men",
//   "Rate": 4.1,
//   "PeopleRated": 30,
//   "stock": 120,
//   "photos": ["src/images/HM4045_23_hover_model.avif"],
//   "detailPhotos": [
//     "https://example.com/images/runningshoes_detail1.jpg",
//     "https://example.com/images/runningshoes_detail2.jpg"
//   ]
// },
// {
//   "id": 6,
//   "name": "Running Shoes",
//   "description": "Adidas black t-shirt lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
//   "price": 600,
//   "priceBeforeSale": 1200,
//   "category": "Men",
//   "Rate": 4.2,
//   "PeopleRated": 9,
//   "stock": 120,
//   "photos": ["src/images/IA4785_000_plp_model.avif"],
//   "detailPhotos": [
//     "https://example.com/images/runningshoes_detail1.jpg",
//     "https://example.com/images/runningshoes_detail2.jpg"
//   ]
// }

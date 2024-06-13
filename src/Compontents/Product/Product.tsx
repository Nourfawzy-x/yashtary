import React, { useState } from "react";
import { getProducts } from "../../services/ProductsService";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import ProductDetails from "../../Pages/ProductDetails/ProductDetails";

export default function Product() {
  let { isLoading, data } = useQuery("products", getProducts);

  return (
    <>
      {isLoading ? (
        <div className="d-flex justify-content-center align-content-center mt-5">
          <i className="fa-solid fa-spinner fa-flip-both fa-spin text-black fa-2xl"></i>
        </div>
      ) : (
        <div id="product">
          <div className="container mt-2 mb-4">
            <div className="row">
              {data?.data.map(
                (product: {
                  id: number;
                  photos: any;
                  name: string;
                  price: number | string;
                }) => (
                  <div key={product.id} className="col-md-4">
                    <Link to={`/productDetails/${product.id}`}>
                      <div className="p-3">
                        <img src={product.photos[0]} className="w-100" />
                        <span>man's fashion</span>
                        <p className="mt-2 mb-1">{product.name}</p>
                        <p className="text-danger">{product.price}</p>
                      </div>
                    </Link>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

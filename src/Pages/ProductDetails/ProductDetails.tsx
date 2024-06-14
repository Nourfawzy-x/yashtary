import React, { useState } from "react";
import SimilarProducts from "../../Compontents/SimilarProducts/SimilarProducts";
import OneProduct from "../../Compontents/OneProduct/OneProduct";
import Filteration from "../../Compontents/Filtertion/Filteration";
import NavbarProductDetails from "../../Compontents/NavbarProductDetails/NavbarProductDetails";

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

export default function ProductDetails() {
  const [cartItems, setCartItems] = useState<Product[]>([]);

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

  return (
    <>
      <NavbarProductDetails cartItems={cartItems} />
      <Filteration />
      <OneProduct
        cartItems={cartItems}
        onAddToCart={onAddToCart}
        onRemoveFromCart={onRemoveFromCart}
      />
      <SimilarProducts />
    </>
  );
}

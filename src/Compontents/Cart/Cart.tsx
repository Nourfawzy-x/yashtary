import React from "react";
import { useCart } from "../../Context/CartContext";

export default function Cart() {
  const { cart, dispatch } = useCart();

  const removeFromCart = (product: Product) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: product });
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.length > 0 ? (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              <img src={item.photos[0]} alt={item.name} width="50" />
              <p>{item.name}</p>
              <p>{item.price}</p>
              <button onClick={() => removeFromCart(item)}>Remove</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
}

// Ensure to define the Product interface if not already defined
interface Product {
  id: number;
  name: string;
  photos: string[];
  description: string;
  category: string;
  price: number;
}

import React, { createContext, useContext, useReducer, ReactNode } from "react";

interface Product {
  id: number;
  name: string;
  photos: string[];
  description: string;
  category: string;
  price: number;
}

interface CartState {
  cart: Product[];
  dispatch: React.Dispatch<Action>;
}

type Action =
  | { type: "ADD_TO_CART"; payload: Product }
  | { type: "REMOVE_FROM_CART"; payload: Product };

const CartContext = createContext<CartState | undefined>(undefined);

const cartReducer = (state: Product[], action: Action): Product[] => {
  switch (action.type) {
    case "ADD_TO_CART":
      return [...state, action.payload];
    case "REMOVE_FROM_CART":
      return state.filter((item) => item.id !== action.payload.id);
    default:
      return state;
  }
};

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartState => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

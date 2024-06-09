import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Compontents/Layout/Layout";
import Home from "./Pages/Home/Home";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import Notfound from "./Pages/Notfound/Notfound";
import Cart from "./Compontents/Cart/Cart";
import { CartProvider } from "./Context/CartContext";
let routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "productDetails/:id", element: <ProductDetails /> },
      { path: "cart", element: <Cart /> },
      { path: "*", element: <Notfound /> },
    ],
  },
]);

function App() {
  return (
    <CartProvider>
      <RouterProvider router={routes}></RouterProvider>
    </CartProvider>
  );
}

export default App;

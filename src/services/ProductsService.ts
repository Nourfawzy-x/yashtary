import axios from "axios";

export function getProducts() {
  return axios.get(`http://localhost:3000/products`);
}

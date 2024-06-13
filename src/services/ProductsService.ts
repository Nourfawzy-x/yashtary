import axios from "axios";

export function getProducts() {
  return axios.get(`http://localhost:3000/products`);
}

export async function getOneProduct(id: any) {
  const response = await axios.get(`http://localhost:3000/products/${id}`);
  return response.data;
}

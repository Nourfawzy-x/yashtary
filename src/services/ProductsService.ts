import axios from "axios";

export function getProducts() {
  return axios.get(`http://localhost:3000/products`);
}

export async function getOneProduct(id: any) {
  const response = await axios.get(`http://localhost:3000/products/${id}`);
  return response.data;
}
/*
{
  "products": [
    {
      "id": 1,
      "name": "AEROREADY DESIGNED FOR MOVEMENT TEE",
      "description": "Adidas black t-shirt lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      "price": 1686.75,
      "priceBeforeSale": 2000,
      "category": "Men",
      "Rate": 4.9,
      "PeopleRated": 8,
      "stock": 50,
      "photos": ["src/images/HF7215_01_laydown (1).avif"],
      "photosDetails": "https://assets.adidas.com/images/w_1880,f_auto,q_auto/8c0243db84954c97b1a0adbe00b577bb_9366/HF7215_01_laydown.jpg",
      "photosArray": [
        "https://assets.adidas.com/images/w_1880,f_auto,q_auto/8c0243db84954c97b1a0adbe00b577bb_9366/HF7215_01_laydown.jpg",
        "https://assets.adidas.com/images/w_1880,f_auto,q_auto/427013852d394253817daf4e00a1ba57_9366/IC7269_01_laydown.jpg",
        "https://assets.adidas.com/images/w_1880,f_auto,q_auto/df15123c7d8e48f6bd23ada1014020ac_9366/HF7214_01_laydown.jpg",
        "https://assets.adidas.com/images/w_1880,f_auto,q_auto/5dce03155f8443edb67daf6a00b524bc_9366/IC7274_21_model.jpg"
      ]
    },
    {
      "id": 2,
      "name": "VRCT SHORT SLEEVE TEE",
      "description": "Adidas black t-shirt lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      "price": 2699.0,
      "priceBeforeSale": 3479,
      "category": "Men",
      "Rate": 4.9,
      "PeopleRated": 8,
      "stock": 50,
      "photos": ["src/images/IS0186_21_model"],
      "photosDetails": "https://assets.adidas.com/images/w_1880,f_auto,q_auto/1857299772324d54938c2e6de238e598_9366/IS0186_21_model.jpg",
      "photosArray": [
        "https://assets.adidas.com/images/w_1880,f_auto,q_auto/1857299772324d54938c2e6de238e598_9366/IS0186_21_model.jpg",
        "https://assets.adidas.com/images/w_1880,f_auto,q_auto/ac36189b095d4a79956e4484dae9ff1d_9366/IS0186_23_hover_model.jpg",
        "https://assets.adidas.com/images/w_1880,f_auto,q_auto/810b3deb1e3141e3a979c07ad1e320b4_9366/IS0192_23_hover_model.jpg",
        "https://assets.adidas.com/images/w_1880,f_auto,q_auto/160104207e824523b9ca280730343abf_9366/IS0192_21_model.jpg"
      ]
    },
    {
      "id": 3,
      "name": "ESSENTIALS SINGLE JERSEY 3-STRIPES TEE",
      "description": "Adidas black t-shirt lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      "price": 999.99,
      "priceBeforeSale": 1200,
      "category": "Men",
      "Rate": 4.9,
      "PeopleRated": 8,
      "stock": 50,
      "photos": ["src/images/IC9335_21_model"],
      "photosDetails": "https://assets.adidas.com/images/w_1880,f_auto,q_auto/165b7b54b6084f6b9488af0400c05543_9366/IC9335_21_model.jpg",
      "photosArray": [
        "https://assets.adidas.com/images/w_1880,f_auto,q_auto/165b7b54b6084f6b9488af0400c05543_9366/IC9335_21_model.jpg",
        "https://assets.adidas.com/images/w_1880,f_auto,q_auto/9d977062583b437aa475af0400cee9c0_9366/IC9336_21_model.jpg",
        "https://assets.adidas.com/images/w_1880,f_auto,q_auto/b63566d96bff4dee8794af0400cf3d20_9366/IC9337_21_model.jpg",
        "https://assets.adidas.com/images/w_1880,f_auto,q_auto/2185f8434dd94361a313af1101224701_9366/IC9334_21_model.jpg"
      ]
    },
    {
      "id": 4,
      "name": "ADICOLOR CLASSICS 3-STRIPES TEE",
      "description": "Adidas black t-shirt lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      "price": 2249.0,
      "priceBeforeSale": 3200,
      "category": "Men",
      "Rate": 4.9,
      "PeopleRated": 8,
      "stock": 50,
      "photos": ["src/images/IA4852_21_model"],
      "photosDetails": "https://assets.adidas.com/images/w_1880,f_auto,q_auto/022ced4121f34050a4bcaefb00f8f095_9366/IA4852_21_model.jpg",
      "photosArray": [
        "https://assets.adidas.com/images/w_1880,f_auto,q_auto/022ced4121f34050a4bcaefb00f8f095_9366/IA4852_21_model.jpg",
        "https://assets.adidas.com/images/w_1880,f_auto,q_auto/bb3a72ad2c0c41f29f22af3b008def23_9366/IA4845_25_model.jpg",
        "https://assets.adidas.com/images/w_1880,f_auto,q_auto/7325ba04a0b04b5cbe2e55a0118f5ab3_9366/IM9387_25_model.jpg",
        "https://assets.adidas.com/images/w_1880,f_auto,q_auto/b76335c8e14d44c794c0af3a00caf7ca_9366/IA4846_25_model.jpg"
      ]
    },
    {
      "id": 5,
      "name": "ULTIMATEADIDAS ENGINEERED TEE",
      "description": "Adidas black t-shirt lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      "price": 4500,
      "priceBeforeSale": 5200,
      "category": "Men",
      "Rate": 4.9,
      "PeopleRated": 8,
      "stock": 50,
      "photos": ["src/images/IL7195_HM1"],
      "photosDetails": "https://assets.adidas.com/images/w_1880,f_auto,q_auto/b13a4f0f54964280ab075623a47ecd19_9366/IL7195_HM1.jpg",
      "photosArray": [
        "https://assets.adidas.com/images/w_1880,f_auto,q_auto/b13a4f0f54964280ab075623a47ecd19_9366/IL7195_HM1.jpg",
        "https://assets.adidas.com/images/w_1880,f_auto,q_auto/6c0dfc7a4b4d42beaaef7bd773b839f0_9366/IL7195_HM3_hover.jpg",
        "https://assets.adidas.com/images/w_1880,f_auto,q_auto/0988f168aea248c6863abf0969d8ed50_9366/IL7195_HM4.jpg",
        "https://assets.adidas.com/images/w_1880,f_auto,q_auto/2132f5f68ec944b58f99ba29bad10ad3_9366/IL7195_HM5.jpg"
      ]
    },
    {
      "id": 6,
      "name": "RIFTA CITY BOY TEE",
      "description": "Adidas black t-shirt lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      "price": 1999.99,
      "priceBeforeSale": 2200,
      "category": "Men",
      "Rate": 3.4,
      "PeopleRated": 11,
      "stock": 50,
      "photos": ["src/images/IC8424_21_model"],
      "photosDetails": "https://assets.adidas.com/images/w_1880,f_auto,q_auto/3d6e21ace1484075991caf3100fdb3eb_9366/IC8424_21_model.jpg",
      "photosArray": [
        "https://assets.adidas.com/images/w_1880,f_auto,q_auto/3d6e21ace1484075991caf3100fdb3eb_9366/IC8424_21_model.jpg",
        "https://assets.adidas.com/images/w_1880,f_auto,q_auto/4ef38979e75e4bcdad4daf3100fdbc54_9366/IC8424_22_model.jpg",
        "https://assets.adidas.com/images/w_1880,f_auto,q_auto/7424ae3be25d4b51a83eaf3100fdcae0_9366/IC8424_23_hover_model.jpg",
        "https://assets.adidas.com/images/w_1880,f_auto,q_auto/1ca56d3b5ce849dda558af3100fdd2fc_9366/IC8424_25_model.jpg"
      ]
    }
  ]
}
*/

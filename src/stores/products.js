import { defineStore } from "pinia";
import axios from "axios";

export const productsModule = defineStore("productsModule", {
  state: () => ({
    flashDeals: [],
    newProducts: [],
    foods: [],
    categoryProducts: [],
    categories: [
      {
        title: "Laptops",
        route: "laptops",
      },
      {
        title: "Furniture",
        route: "furniture",
      },
      {
        title: "Sports Accessories",
        route: "sports-accessories",
      },
      {
        title: "Motorcycle",
        route: "motorcycle",
      },
      {
        title: "Cars",
        route: "vehicle",
      },
      {
        title: "Mobile Accessories",
        route: "mobile-accessories",
      },
      {
        title: "Mens Watches",
        route: "mens-watches",
      },
      {
        title: "Smart Phones",
        route: "smartphones",
      },
    ],
  }),
  actions: {
    async getProducts() {
      try {
        const res = await axios.get("https://dummyjson.com/products");
        this.flashDeals = res.data.products;
        this.newProducts = res.data.products.filter(
          (el) => el.category === "beauty"
        );
        this.foods = res.data.products.filter(
          (el) => el.category === "groceries"
        );
      } catch (err) {
        console.log(err);
      }
    },
    async getProductsByCategory(category) {
      await axios
        .get(`https://dummyjson.com/products/category/${category}`)
        .then((res) => (this.categoryProducts = res.data));
    },
  },
});

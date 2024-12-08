import { defineStore } from "pinia";
import axios from "axios";

export const productsModule = defineStore("productsModule", {
  state: () => ({
    flashDeals: [],
    newProducts: [],
    foods: [],
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
  },
});

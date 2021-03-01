<template>
  <div class="container">
    <div class="product" :key="product._id" v-for="product in products">
      <h3>{{ product.name }}</h3>
      <img
        :src="
          `http://localhost:3000/assets/product_images/${product.category}/${product.img}`
        "
        :alt="product.name"
      />
      <button v-on:click="addToCart(product._id)">Add to Cart</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Catalog",
  props: {
    cart: Array,
    addToCart: Function,
  },
  data() {
    return {
      products: [],
    };
  },
  async mounted() {
    const res = await axios.get("http://localhost:3000/products/get-products");
    const sortedProducts = res.data.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (b.name > a.name) {
        return -1;
      }
      return 0;
    });

    this.products = sortedProducts;
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.product {
  display: flex;
  flex-direction: column;
  margin: 1rem;
}

img {
  max-width: 18.75rem;
  width: 100%;
  margin-bottom: 1rem;
}

button {
  align-self: center;
  max-width: 10rem;
  padding: 0.5rem 0.8rem;
  background-color: #447ee0;
  color: #fff;
  font-size: 1rem;
  border-radius: 5px;
}
</style>

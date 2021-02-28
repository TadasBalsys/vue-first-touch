<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div :key="product._id" v-for="product in products">
      <h2>{{ product.name }}</h2>
      <img :src="`http://localhost:3000/assets/product_images/${product.category}/${product.img}`" :alt="product.name">
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "About",
  data() {
    return {
      products: [],
    };
  },
  async mounted() {
    const res = await axios.get("http://localhost:3000/products/get-products");
    this.products = res.data;
  },
};
</script>

<style lang="scss" scoped>
  img {
    max-width: 18.75rem;
    width: 100%;
  }
</style>
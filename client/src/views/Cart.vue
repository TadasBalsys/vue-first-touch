<template>
  <div>
    <h2>Cart Page</h2>
    <h2>{{ this.cartTotal }}</h2>
    <!-- <div class="product" :key="product._id" v-for="product in cart">
      <h3>{{ product.name }}</h3>
      <img
        :src="
          `http://localhost:3000/assets/product_images/${product.category}/${product.img}`
        "
        :alt="product.name"
      />
      <button v-on:click="addToCart(product._id)">Add to Cart</button>
    </div> -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Cart",
  props: {
    cart: Array,
    cartTotal: String,
  },
  async mounted() {
    const uriParams = JSON.stringify(this.cart);
    console.log(uriParams);
    const res = await axios.get(
      "http://localhost:3000/cart/get-cart-items/" + uriParams
    );
    // TODO: Continue from here
  },
};
</script>

<style></style>

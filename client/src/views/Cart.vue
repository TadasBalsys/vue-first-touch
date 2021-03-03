<template>
  <div>
    <h2>Cart Page</h2>
    <div class="top-menu">
      <div class="total-price">Total: {{ totalPrice }} &euro;</div>
      <button class="wishlist__btn-save" @click="saveWishList">
        Save Cart to wishlist:
      </button>
      <div class="wishlist__link-box" v-if="wishListUrl.length">
        <span id="link-title">Share your wish list</span>
        <span>{{ wishListUrl }}</span>
      </div>
    </div>
    <div class="product-box" :key="product._id" v-for="product in cart">
      <CartItem :product="product" :removeFromCart="removeFromCart" />
    </div>
  </div>
</template>

<script>
import axios from "axios";

import CartItem from "../components/CartItem";

export default {
  name: "Cart",
  props: {
    cart: Array,
    removeFromCart: Function,
    totalPrice: Number,
  },
  components: {
    CartItem,
  },
  data() {
    return {
      wishListUrl: "",
    };
  },
  methods: {
    async saveWishList() {
      const reqBody = this.cart.map((item) => ({
        _id: item._id,
        quantity: item.quantity,
      }));

      const res = await axios.post(
        "http://localhost:3000/cart/save-wish-list",
        { products: reqBody }
      );
      const wishListId = res.data;

      this.wishListUrl = `http://localhost:8080/wish-list?id=${wishListId}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.top-menu {
  max-width: 60%;
  margin: 0 auto 1rem;
  text-align: end;
}

.total-price {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.wishlist__btn-save {
  align-self: center;
  padding: 0.5rem 0.8rem;
  color: rgb(0, 0, 0);
  font-size: 1rem;
  border-radius: 5px;
  background-color: #18d407a8;
  margin-bottom: 1rem;
}

.product-box {
  max-width: 60%;
  margin: 0 auto 2rem;
}

#link-title {
  margin-right: 0.8rem;
}
</style>

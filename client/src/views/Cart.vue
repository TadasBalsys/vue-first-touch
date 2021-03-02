<template>
  <div>
    <h2>Cart Page</h2>
    <div class="top-menu">
      <div class="total-price">Total: {{ totalPrice }} &euro;</div>
      <button class="wishlist__btn-save" @click="saveWishList">
        Save Cart to wishlist
      </button>
    </div>
    <div class="product-box" :key="product._id" v-for="product in cart">
      <img
        :src="
          `http://localhost:3000/assets/product_images/${product.category}/${product.img}`
        "
        :alt="product.name"
      />
      <div>
        <h3>{{ product.name }}</h3>
        <span>Price {{ product.price }} &euro;</span>
        <span>Quantity {{ product.quantity }} </span>
        <span
          >Total sum for {{ product.name }}
          {{ product.price * product.quantity }} &euro;</span
        >
      </div>
      <button @click="removeFromCart(product._id)">Remove</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Cart",
  props: {
    cart: Array,
    removeFromCart: Function,
    totalPrice: Number,
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

      // TODO: Save to state or let user to copy URL
      console.log("WishList on this click will be saved.");
      console.log(res.data);
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

.wishlist__btn-save,
button {
  align-self: center;
  padding: 0.5rem 0.8rem;
  color: rgb(0, 0, 0);
  font-size: 1rem;
  border-radius: 5px;
}

.wishlist__btn-save {
  background-color: #18d407a8;
}

button {
  background-color: #ec2943;
}

.product-box {
  display: flex;
  max-width: 60%;
  margin: 0 auto;
  justify-content: space-around;
  align-items: center;
}

img {
  max-width: 18.75rem;
  width: 100%;
  margin-bottom: 1rem;
}

span {
  display: block;
  margin-bottom: 0.5rem;
}
</style>

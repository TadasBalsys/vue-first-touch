<template>
  <div>
    <h2>Cart Page</h2>
    <div>
      <div class="total-price">Total: {{ totalPrice }} &euro;</div>
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
        <span>Quantity {{ product.qauntity }} </span>
        <span
          >Total sum for {{ product.name }}
          {{ product.price * product.qauntity }} &euro;</span
        >
      </div>
      <button @click="removeFromCart(product._id)">Remove</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cart",
  props: {
    cart: Array,
    removeFromCart: Function,
    totalPrice: Number,
  },
};
</script>

<style lang="scss" scoped>
.total-price {
  max-width: 60%;
  margin: 0 auto 1rem;
  text-align: end;
  font-size: 1.5rem;
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

button {
  align-self: center;
  max-width: 10rem;
  padding: 0.5rem 0.8rem;
  background-color: #ec2943;
  color: #fff;
  font-size: 1rem;
  border-radius: 5px;
}
</style>

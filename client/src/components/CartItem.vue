<template>
  <div class="cart-item">
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
</template>

<script>
export default {
  name: "CartItem",
  props: {
    product: {
      _id: String,
      name: String,
      price: Number,
      categery: String,
      img: String,
      quantity: Number,
    },
    removeFromCart: Function,
  },
};
</script>

<style lang="scss" scoped>
.cart-item {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

button {
  background-color: #ec2943;
  align-self: center;
  padding: 0.5rem 0.8rem;
  color: #fff;
  font-size: 1rem;
  border-radius: 5px;
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

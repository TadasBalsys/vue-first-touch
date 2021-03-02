<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/catalog">Catalog</router-link> |
    <router-link to="/cart"
      >Cart {{ this.cart.length ? `(${this.countTotal()})` : "" }}
    </router-link>
    <router-view
      :addToCart="addToCart"
      :cart="cart"
      :removeFromCart="removeFromCart"
      :totalPrice="countTotalPrice()"
    />
  </div>
</template>

<script>

export default {
  name: "App",
  data() {
    return {
      cart: [],
      totalPrice: 0,
    };
  },
  persist: ['cart'],
  methods: {
    addToCart(itemToAdd) {
      const indexOfFoundedItemInCart = this.cart.findIndex((item) => {
        return item._id === itemToAdd._id;
      });

      if (indexOfFoundedItemInCart > -1) {
        return this.cart[indexOfFoundedItemInCart].quantity++;
      }

      this.cart.push({ ...itemToAdd, quantity: 1 });
    },
    removeFromCart(id) {
      const index = this.cart.findIndex((item) => item._id === id);

      return this.cart[index].quantity > 1
        ? this.cart[index].quantity--
        : this.cart.splice(index, 1);
    },
    countTotal() {
      return this.cart.reduce((acc, val) => acc + val.quantity, 0);
    },
    countTotalPrice() {
      const cartItemsTotalPrice = this.cart.reduce(
        (acc, val) => acc + (val.price * val.quantity),
        0
      );
      return cartItemsTotalPrice;
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

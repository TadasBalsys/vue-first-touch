<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/catalog">Catalog</router-link> |
    <router-link to="/cart"
      >Cart {{ this.cart.length ? `(${this.countTotal()})` : "" }}</router-link
    >
  </div>
  <router-view
    :addToCart="addToCart"
    :cart="cart"
    :cartTotal="this.countTotal()"
  />
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      cart: [],
    };
  },
  methods: {
    addToCart(id) {
      const indexOfFoundedItemInCart = this.cart.findIndex(
        (item) => item.id === id
      );

      if (indexOfFoundedItemInCart > -1) {
        return this.cart[indexOfFoundedItemInCart].qauntity++;
      }

      this.cart.push({ id: id, qauntity: 1 });
    },
    countTotal() {
      return this.cart.reduce((acc, val) => acc + val.qauntity, 0);
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

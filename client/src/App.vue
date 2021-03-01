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
      :cartTotal="this.countTotal()"
      :removeFromCart="removeFromCart"
    />
  </div>
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
    addToCart(itemToAdd) {
      const indexOfFoundedItemInCart = this.cart.findIndex((item) => {
        return item._id === itemToAdd._id;
      });

      if (indexOfFoundedItemInCart > -1) {
        return this.cart[indexOfFoundedItemInCart].qauntity++;
      }

      this.cart.push({ ...itemToAdd, qauntity: 1 });
    },
    removeFromCart(id) {

      // TODO: Left here.
      // const updateCart = this.cart.filter((item) => {
      //   if (item._id === id) {
      //     if (item.qauntity > 1) {
      //       return { ...item, qauntity: item.qauntity - 1 };
      //     }
      //     if (item.qauntity === 1) {
      //       console.log("if statement when last ");
      //       return false;
      //     }
      //   }
      //   return true;
      // });

      console.log(updateCart);

      this.cart = updateCart;
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

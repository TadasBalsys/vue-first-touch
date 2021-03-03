<template>
  <div>
    <h2>Wish List</h2>

    <div class="product-box" :key="product._id" v-for="product in wishlist">
      <CartItem :product="product" :removeFromCart="removeFromCart" />
    </div>
  </div>
</template>

<script>
import axios from "axios";

import CartItem from "../components/CartItem";

export default {
  name: "WishList",
  props: {
    wishListId: String,
  },
  params: {
    id: String,
  },
  components: {
    CartItem,
  },
  data() {
    return {
      wishlist: [],
    };
  },
  async created() {
    const wishListId = this.$route.query.id;

    // TODO: Change /cart/ to wish-list after refactoring server routes structure
    const res = await axios.get(
      `http://localhost:3000/cart/get-wish-list/${wishListId}`
    );

    this.wishlist = res.data.products;
  },
};
</script>

<style lang="scss" scoped>
.product-box {
  max-width: 60%;
  margin: 0 auto 2rem;
}
</style>

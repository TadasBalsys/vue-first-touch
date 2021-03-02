<template>
  <div class="category">
    <label for="category">Filter by category</label>
    <select name="category" @change="onChange">
      <option value="all">All</option>
      <option value="laptop">Laptops</option>
      <option value="smart-phone">Smart Phones</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "CategorySelector",
  props: {
    handlerCategorySelector: Function
  },
  methods: {
    onChange(event) {
      this.handlerCategorySelector(event.target.value)
    }
  }
};
</script>

<style lang="scss" scoped>
  .category {
    margin-top: 1rem;

    label {
      margin-right: 0.5rem;
    }
  }

</style>

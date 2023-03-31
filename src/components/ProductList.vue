<template>
  <div class="product-list">
    <div class="product">
      <img :src="product.image" alt="Product Image">
      <h2>{{ product.title }}</h2>
      <p>Price: {{ product.price }}</p>
      <button @click="addToCart">Add to cart</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['product'],
  methods: {
    addToCart() {
      this.$store.commit('ADD_TO_CART', { id: this.product.id, quantity: 1 });
    }
  }
}
</script>

<style scope>
.product-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.product {
  border: 1px solid #ccc;
  padding: 1rem;
  flex: 1 1 300px;
}

.product img {
  max-width: 100%;
}
</style>

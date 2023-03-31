<template>
  <div id="app">
    <h1>Vue.js 2 + Vuex Example</h1>
    <section>
      <h2>Products</h2>
      <div class="products-list">
        <Product v-for="product in products" :key="product.id" :product="product" />
      </div>
    </section>
    <section>
      <h2>Cart</h2>
      <Cart />
    </section>
  </div>
</template>
<script>
import Product from './components/ProductList.vue';
import Cart from './components/ShoppingCart.vue';

export default {
  components: {
    Product,
    Cart
  },
  computed: {
    products() {
      return this.$store.state.products;
    }
  }
}
</script>
<style>
h1 {
  font-size: 2rem;
  margin-bottom: 2rem;
}

h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

section {
  margin-bottom: 3rem;
}

.products-list {
  display: flex;
  flex-wrap: wrap;
}

.products-list > * {
  flex-basis: calc(33.33% - 1rem);
  margin-right: 1rem;
  margin-bottom: 1rem;
}

.cart-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.cart-list > li {
  margin-bottom: 0.5rem;
}

.cart-total {
  margin-top: 1rem;
  font-weight: bold;
  font-size: 1.2rem;
}
</style>
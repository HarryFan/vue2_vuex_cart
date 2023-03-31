<template>
  <div>
    <h2>Cart</h2>
    <ul>
      <li v-for="product in cartProducts" :key="product.id">
        {{ product.title }} - {{ product.price }} x {{ product.quantity }} = {{ product.price * product.quantity }}
      </li>
    </ul>
    <p>Total: {{ cartTotalPrice }}</p>
  </div>
</template>
<script>
export default {
  computed: {
    cartProducts() {
      return this.$store.getters.cartProducts;
    },
    cartTotalPrice() {
      return this.$store.getters.cartTotalPrice.toFixed(2); // 顯示小數點後兩位
    }
  }
}
</script> 
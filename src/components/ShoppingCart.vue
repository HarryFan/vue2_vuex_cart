<template>
  <div>
    <h2>購物車</h2>
    <ul>
      <li v-for="product in cartProducts" :key="product.id">
        {{ product.title }} - {{ product.price }} x {{ product.quantity }} = {{ product.price * product.quantity }}
      </li>
    </ul>
    <p>總計：{{ cartTotalPrice }}</p>
  </div>
</template>
<script>
export default {
  computed: {
    cartProducts() {
      return this.$store.getters.cartProducts; // 取得購物車產品
    },
    cartTotalPrice() {
      return this.$store.getters.cartTotalPrice.toFixed(2); // 顯示小數點後兩位
    }
  }
}
</script> 
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
// 這段程式碼定義了一個顯示購物車內容的 Vue 組件。以下是各個部分的說明：
// <h2>購物車</h2>：標題，顯示在購物車區塊的頂部。
// <ul>：用來顯示購物車內容的無序列表。
// v-for="product in cartProducts" :key="product.id"：使用 v-for 指令迭代購物車中的產品，並為每個產品指定一個獨特的鍵。
// {{ product.title }} - {{ product.price }} x {{ product.quantity }} = {{ product.price * product.quantity }}：顯示產品的名稱、價格、數量和小計。
// <p>總計：{{ cartTotalPrice }}</p>：顯示購物車的總計金額。
// cartProducts()：從 Vuex store 的 cart state 中取得產品數組。
// cartTotalPrice()：從 Vuex store 的 cart state 中計算產品的總金額，並使用 toFixed(2) 方法將結果格式化為小數點後兩位的字串。

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
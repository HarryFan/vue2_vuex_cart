<template>
  <!-- 產品清單 -->
  <div class="product-list">
    <div class="product">
      <!-- 產品圖片 -->
      <img :src="product.image" alt="Product Image">
      <!-- 產品名稱 -->
      <h2>{{ product.title }}</h2>
      <!-- 產品價格 -->
      <p>Price: {{ product.price }}</p>
      <!-- 加入購物車按鈕 -->
      <button @click="addToCart">加入購物車</button>
    </div>
  </div>
</template>
<script>
export default {
  props: ['product'],
  methods: {
    addToCart() {
      // 呼叫 ADD_TO_CART mutation
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

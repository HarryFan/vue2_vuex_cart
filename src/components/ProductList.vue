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
  // 這是一個 Vue 組件，名為 ProductList，主要用於顯示產品清單，包括產品圖片、產品名稱、產品價格以及加入購物車按鈕。這個組件接收一個名為 product 的 prop，用於顯示一個產品的相關資訊。
  // 在這個組件中，我們使用了 Vue 的 props 和 methods 屬性。props 是用來接收父組件傳遞過來的資料，這裡的 product prop 是一個物件，包含了產品的相關資訊。methods 是用來定義一些方法，這裡定義了一個名為 addToCart 的方法，用於將產品加入購物車。
  // 在 addToCart 方法中，我們呼叫了 this.$store.commit 方法，並傳遞了一個名為 ADD_TO_CART 的 mutation 和一個包含產品 ID 和數量的物件。mutation 是用來修改 Vuex store 的狀態，這裡的 ADD_TO_CART mutation 是將一個產品加入購物車。
  // 在這個組件的模板中，我們使用了 Vue 的指令來顯示產品的相關資訊。v-bind 指令用於綁定產品圖片的 src 屬性，使其顯示產品圖片。{{ }} 雙括號語法用於顯示產品名稱和價格。v-on 指令用於監聽加入購物車按鈕的點擊事件，當按鈕被點擊時，會呼叫 addToCart 方法。
  export default {
    props: ['product'],
    methods: {
      addToCart() {
        // 呼叫 ADD_TO_CART mutation
        this.$store.commit('ADD_TO_CART', {
          id: this.product.id,
          quantity: 1
        });
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
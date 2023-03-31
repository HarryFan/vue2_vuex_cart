技術文件：Vue.js 2 + Vuex 範例
=======================

本文件提供了一個 Vue.js 2 和 Vuex 的簡單範例，用於展示如何使用 Vuex 管理 Vue.js 應用程序中的狀態。

環境設定
----

本專案使用 Vue CLI 進行初始化，並且使用了以下相關套件：

*   Vue.js 2：用於構建用戶界面和管理應用程序狀態。
    
*   Vuex：用於管理應用程序的狀態，包括存儲產品和購物車中的數據，以及通過 mutations 修改狀態。
    
*   vue-router：用於路由管理，實現頁面之間的切換。
    
*   ESLint：用於代碼風格檢查和語法檢查。
    

如何運行
----

在終端機中執行以下命令：

```
npm install
npm run serve
```

此命令會安裝所有必需的依賴項並啟動開發服務器，您可以在瀏覽器中查看應用程序。

目錄結構
----

```
├── public/                     # 靜態文件目錄│   ├── index.html              # 首頁文件├── src/                        # 應用程序源代碼目錄│   ├── components/             # Vue 組件目錄│   │   ├── Cart.vue            # 購物車組件│   │   ├── ProductList.vue     # 產品列表組件│   ├── store/                  # Vuex 相關代碼目錄│   │   ├── index.js            # Vuex store 實例│   ├── App.vue                 # Vue 根組件│   ├── main.js                 # 應用程序入口文件├── .eslintrc.js                # ESLint 配置文件├── babel.config.js             # Babel 配置文件├── package.json                # 應用程序依賴項及相關命令配置文件├── README.md                   # 本文件
```

說明
--

### Vuex Store

在 `src/store/index.js` 文件中，我們定義了一個 Vuex Store 實例。Store 實例中包含兩個屬性：

*   `state`：用於存儲應用程序的狀態，包括產品和購物車中的數據。
    
*   `mutations`：用於修改應用程序狀態的函數。
    

### Vue 組件

在 `src/components/` 目錄中，我們定義了兩個 Vue 組件：

*   `Cart.vue`：用於顯示購物車內的商品和總價。

*   `ProductList.vue`：用於顯示所有產品，並提供將產品加入購物車的按鈕。
    

這兩個組件都是基本的 Vue 組件，它們都使用了 Vuex 存儲。

在 `Cart.vue` 組件中，我們使用 `mapGetters` 來綁定 `cartProducts` 和 `cartTotalPrice` 屬性。這些 getters 是從 Vuex store 中取出的，它們會計算出購物車中的商品和總價。

在 `ProductList.vue` 組件中，我們使用 `mapMutations` 來綁定 `addToCart` 方法。這個方法會將所選產品添加到 Vuex store 的 `cart` 陣列中。

### Vuex store

在 `src/store.js` 文件中，我們定義了一個 Vuex store。這個 store 包含了所有的產品和購物車資訊，以及相關的 mutations 和 getters。

在這個 store 中，我們定義了 `products` 和 `cart` 兩個陣列。`products` 陣列包含所有的產品，`cart` 陣列包含了已經加入購物車的商品。

我們還定義了一個 `ADD_TO_CART` mutation，當一個產品被加入購物車時，它會被呼叫。這個 mutation 會將所選產品添加到 `cart` 陣列中。

我們還定義了兩個 getters：`cartProducts` 和 `cartTotalPrice`。`cartProducts` getter 會計算出購物車中的所有商品，包括數量和總價格。`cartTotalPrice` getter 則只會計算總價格。

### 組件樣式

在 `src/App.vue`、`src/components/Cart.vue` 和 `src/components/ProductList.vue` 中，我們定義了一些基本的 CSS 樣式，用於使組件顯示得更美觀。

在 `src/components/ProductList.vue` 中，我們定義了一些 CSS 樣式，用於將產品顯示為網格，每行三個。我們還定義了一個樣式來調整產品項目的大小和間距。

在 `src/components/Cart.vue` 中，我們定義了一些 CSS 樣式，用於調整購物車內容的大小和間距。我們還定義了一個樣式，用於將購物車中的每個商品顯示為清單項目。

### 總結
--

這個 Vue.js 2 和 Vuex 的示例展示了如何使用 Vuex 來管理狀態和實現購物車功能。我們通過創建一個包含產品數組和購物車數組的 Vuex store，並通過 getters 和 mutations 對它們進行管理。然後，我們在 Vue 組件中訪問 store 並使用它們的數據和方法來實現我們的功能。

在這個示例中，我們還演示了如何使用 Vue Router 來實現頁面路由，並通過使用 Webpack 打包我們的應用程序。

這個示例應該讓你了解如何使用 Vuex 在 Vue.js 中管理狀態。但是，實際的應用程序可能會更加複雜，需要更多的狀態管理和邏輯處理。因此，在實際的應用程序中，您可能需要使用其他工具和庫來實現更好的代碼結構和更高的可維護性。

不過，本篇文章也讓您了解了一些 Vue.js 2、Vuex、Vue Router、Webpack 等技術，這些都是當前 Web 開發中非常熱門的技術，掌握了這些技術可以幫助您更好地開發 Web 應用程序。
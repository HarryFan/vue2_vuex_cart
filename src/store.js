import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        products: [{
                id: 1,
                title: '產品1',
                price: 10,
                image: 'https://via.placeholder.com/300x200'
            },
            {
                id: 2,
                title: '產品2',
                price: 20,
                image: 'https://via.placeholder.com/300x200'
            },
            {
                id: 3,
                title: '產品3',
                price: 30,
                image: 'https://via.placeholder.com/300x200'
            },
            {
                id: 4,
                title: '產品4',
                price: 40,
                image: 'https://via.placeholder.com/300x200'
            },
            {
                id: 5,
                title: '產品5',
                price: 50,
                image: 'https://via.placeholder.com/300x200'
            }
        ],
        cart: []
    },
    // 提交mutations 是改變Vuex 中store 的唯一方式。
    // mutations 非常類似於組件中的事件（event），每個mutation 都有一個字串的事件類型(type) 和一個回調函數(handler)， handler 就是我們實際進行狀態更改的地方，並且他會接受state 作為第一個參數。
    // 1. 在 mutations 裡面，我們用 ADD_TO_CART 來宣告一個函式，該函式會接收兩個參數，第一個參數是 state，第二個參數是 product。
    // 2. 這個函式會將 product 推入到 cart 裡面。 */

    mutations: {
        // 將產品加入購物車
        ADD_TO_CART(state, product) {
            state.cart.push(product);
        }
    },
    // 1. 這裡的 getters 就是 Vue.js 提供的一個物件，可以把它當作一個中介者，方便我們在 components 裡面取得資料。
    // 2. 在 Vue.js 的 components 裡面我們可以透過 this.$store.state.products 取得 state 裡面的 products 資料。但是，這樣寫太麻煩了，所以我們在這裡使用 getters 來幫我們把它取出來。
    // 3. 在 Vue.js 的 components 裡面我們可以透過 this.$store.getters.cartProducts 來取得購物車中的所有產品。這裡的 cartProducts 是我們自己定義的 getters。
    // 4. 在 Vue.js 的 components 裡面我們可以透過 this.$store.getters.cartTotalPrice 來取得購物車中的所有產品的總價格。這裡的 cartTotalPrice 是我們自己定義的 getters。
    getters: {
        // 取得購物車內所有產品
        // 這個程式是一個函式，名稱為 getCartProducts，它接收一個 
        // state參數，代表應用程式的狀態。這個函式的目的是從購物車中取得所有產品，並回傳一個包含產品資訊的陣列。

        // 在函式內部，我們使用 
        // map方法來遍歷購物車中的每個項目，並將其轉換為一個新的物件，其中包含產品的 id、標題、價格和數量。為了取得產品的資訊，我們使用 
        // find方法來在產品列表中尋找與購物車項目相符的產品。最後，我們回傳一個包含所有產品資訊的陣列。
        cartProducts: state => {
            return state.cart.map(cartItem => {
                const product = state.products.find(product => product.id === cartItem.id);
                return {
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    quantity: cartItem.quantity
                };
            });
        },
        // 取得購物車內產品總價格
        // 這段程式碼是一個計算購物車總價格的函式，它接受兩個參數：state 和 getters。state 是 Vuex store 中的狀態，getters 是一個用於從 store 中獲取數據的函式。
        // 在函式中，它使用 getters 中的 cartProducts 屬性來獲取購物車中的所有產品，然後使用 reduce() 方法將每個產品的價格乘以其數量，並將結果加總起來，最後返回總價格。
        // 簡單來說，這段程式碼的邏輯是計算購物車中所有產品的價格總和。
        cartTotalPrice: (state, getters) => {
            return getters.cartProducts.reduce((total, product) => total + product.price * product.quantity, 0);
        }
    }
});

export default store;
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        products: [
            {id: 1,title: '產品1',price: 10,image: 'https://via.placeholder.com/300x200'},
            {id: 2,title: '產品2',price: 20,image: 'https://via.placeholder.com/300x200'},
            {id: 3,title: '產品3',price: 30,image: 'https://via.placeholder.com/300x200'},
            {id: 4,title: '產品4',price: 40,image: 'https://via.placeholder.com/300x200'},
            {id: 5,title: '產品5',price: 50,image: 'https://via.placeholder.com/300x200'}
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
        cartTotalPrice: (state, getters) => {
            return getters.cartProducts.reduce((total, product) => total + product.price * product.quantity, 0);
        }
    }
});

export default store;
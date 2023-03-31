import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    products: [
        { id: 1, title: 'Product 1', price: 10, image: 'https://via.placeholder.com/300x200' },
        { id: 2, title: 'Product 2', price: 20, image: 'https://via.placeholder.com/300x200' },
        { id: 3, title: 'Product 3', price: 30, image: 'https://via.placeholder.com/300x200' },
        { id: 4, title: 'Product 4', price: 40, image: 'https://via.placeholder.com/300x200' },
        { id: 5, title: 'Product 5', price: 50, image: 'https://via.placeholder.com/300x200' }
      ],
    cart: []
  },
  mutations: {
    ADD_TO_CART(state, product) {
      state.cart.push(product);
    }
  },
  getters: {
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
    cartTotalPrice: (state, getters) => {
      return getters.cartProducts.reduce((total, product) => total + product.price * product.quantity, 0);
    }
  }
});

export default store;

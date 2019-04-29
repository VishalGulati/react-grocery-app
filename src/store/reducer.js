import * as actionTypes from './actions';

const initialState = {
  cart: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART: {
      const { item } = action.payload;
      const { productId } = item;
      return {
        ...state,
        cart: state.cart[productId]
          ? {
              ...state.cart,
              [productId]: {
                ...item,
                count: ++state.cart[productId].count
              }
            }
          : {
              ...state.cart,
              [productId]: {
                ...item,
                count: 1
              }
            }
      };
    }
    case actionTypes.INCREMENT_QUANTITY: {
      const { productId } = action.payload;
      return {
        ...state,
        cart: {
          ...state.cart,
          [productId]: {
            ...state.cart[productId],
            count: ++state.cart[productId].count
          }
        }
      };
    }
    case actionTypes.DECREMENT_QUANTITY: {
      const { productId } = action.payload;
      if (state.cart[productId].count === 1) {
        const { [productId]: val, ...remItemsInCart } = state.cart;
        return {
          ...state,
          cart: {
            ...remItemsInCart
          }
        };
      }
      return {
        ...state,
        cart: {
          ...state.cart,
          [productId]: {
            ...state.cart[productId],
            count: --state.cart[productId].count
          }
        }
      };
    }
    default:
      return state;
  }
};

export default reducer;

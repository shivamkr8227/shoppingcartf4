import * as actions from "../actions/actiontype";

const cart = [];

function cartreducer(state = cart, action) {
  switch (action.type) {
    case actions.ADD_TO_CART:
      return [...state, action.payload];

    case actions.REMOVE_FORM_CART: {
      let arr = state.filter((item) => {
        return item.id !== action.payload;
      });
      return [...arr];
    }

    case actions.CHECKOUT:
      return [];

    default:
      return state;
  }
}

export default cartreducer;

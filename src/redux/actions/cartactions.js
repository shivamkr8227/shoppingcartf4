import * as actions from "./actiontype";

export function addToCart(product) {
  return {
    type: actions.ADD_TO_CART,
    payload: product,
  };
}

export function removeFromCart(productId) {
  return {
    type: actions.REMOVE_FORM_CART,
    payload: productId,
  };
}

export function checkout() {
  return {
    type: actions.CHECKOUT,
  };
}

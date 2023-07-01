import * as actions from "./actiontype";

export function productFetchRequest() {
  return {
    type: actions.PRODUCT_FETCH_REQUEST,
  };
}

export function productFetchSuccess(products) {
  return {
    type: actions.PRODUCT_FETCH_SUCCESS,
    payload: products,
  };
}

export function productFetchFailure(error) {
  return {
    type: actions.PRODUCT_FETCH_FAILURE,
    payload: error,
  };
}

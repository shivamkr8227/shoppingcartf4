import { createStore, applyMiddleware, combineReducers } from "redux";
import productreducer from "./reducers/productreducer";
import thunk from "redux-thunk";
import cartreducer from "./reducers/cartreducer";

const rootReducer = combineReducers({
  products: productreducer,
  cart: cartreducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

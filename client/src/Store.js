//import data from "./data";
import { applyMiddleware, createStore, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import {
  productDetailsReducer,
  productListReducer,
} from "./reducers/ProductReducers";

const initialState = {};
/*const reducer = (state, action) => {
  return { products: data.products };
};*/
const reducer = combineReducers({
  productDetails: productDetailsReducer,
  productList: productListReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;

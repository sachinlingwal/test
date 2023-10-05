import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./store/slice/cartSlice";
import productSlice from "./store/slice/productSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    products: productSlice.reducer,
  },
});
export default store;

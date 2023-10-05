import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      state.cart.push(action.payload);
    },
    remove(state, action) {
      const filteredItem = state.cart.filter(
        (item) => item.id !== action.payload
      );
      console.log(filteredItem);
      state.cart = filteredItem;
    },
  },
});

export const cartSliceOptions = cartSlice.actions;
export default cartSlice;

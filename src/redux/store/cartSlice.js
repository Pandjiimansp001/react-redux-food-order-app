import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalCart: 0,
    changed: false,
  },
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const findItem = state.items.find((item) => item.id === newItem.id);
      state.totalCart++;
      state.changed = true;
      if (!findItem) {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          quantity: 1,
          price: newItem.price,
          totalPrice: newItem.price,
        });
      } else {
        findItem.quantity++;
        findItem.totalPrice = findItem.totalPrice + newItem.price;
      }
    },
    removeItem(state, action) {
      const id = action.payload;
      const findItem = state.items.find((item) => item.id === id);
      state.totalCart--;
      state.changed = true;
      if (findItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        findItem.quantity--;
        findItem.totalPrice = findItem.totalPrice - findItem.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;

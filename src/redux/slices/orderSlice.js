import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const orderSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addOrder(state, { payload }) {
      const existingItem = state.data.find(
        (item) =>
          item.id === payload.id &&
          item.size_id === payload.size_id &&
          item.toping === payload.toping,
      );

      if (existingItem) {
        existingItem.qty += payload.qty;
      } else {
        state.data.push(payload);
      }
    },
    editProduct(state, { payload }) {
      state.data = state.data.filter((item) => item.id !== payload);
    },
    deleteOrder(state) {
      state.data = [];
    },
    setQty(state, { payload }) {
      if (state.data[payload.idx].qty > 1 || payload.qty === 1) {
          state.data[payload.idx].qty += payload.qty;
      }
    },
    setInputQty(state, {payload}) {
      if (payload.qty === 0) {
        state.data[payload.idx].qty = 1;
        return
      }
      if (state.data[payload.idx].qty > 1 || payload.qty > 0) {
        state.data[payload.idx].qty = payload.qty;
      }
    }
  },
});

export const { addOrder, editProduct, deleteOrder, setQty, setInputQty } = orderSlice.actions;
export default orderSlice.reducer;

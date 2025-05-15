import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  data: [],
}

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addOrder: (state, { payload }) => {
      state.data.push(payload)
    },
    editOrder: (state, { payload }) => {
      const index = state.data.findIndex((item) => item.id === payload.id)
      if (index !== -1) {
        state.data.splice(index, 1)
      }
    },
    deleteOrder: (state, _) => {
      state.data = []
    },
  },
})

export const { addOrder, editOrder, deleteOrder } = orderSlice.actions
export default orderSlice.reducer

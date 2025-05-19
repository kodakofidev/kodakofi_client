import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    addProduct: false,
    editProduct: false,
}

const modalSlice = createSlice({
    "name": "modals",
    initialState,
    reducers: {
        toggleModalAddProduct: (state) => {
            state.addProduct = !state.addProduct;
        },
        toggleModalEditProduct: (state) => {
            state.editProduct = !state.editProduct;
        }
    }
});

export const modalAction = {
    ...modalSlice.actions,
}

export default modalSlice.reducer;
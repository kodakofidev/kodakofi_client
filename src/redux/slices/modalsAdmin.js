import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    addProduct: false,
    editProduct: false,
    detailOrder: false,
}

const modalSlice = createSlice({
    "name": "modals",
    initialState,
    reducers: {
        toggleModalAddProduct: (state) => {
            state.addProduct = !state.addProduct;
            // Close other modals when opening this one
            if (state.addProduct) {
                state.editProduct = false;
                state.detailOrder = false;
            }
        },
        openAddProduct: (state) => {
            state.addProduct = true;
            state.editProduct = false;
            state.detailOrder = false;
        },
        closeAddProduct: (state) => {
            state.addProduct = false;
        },
        toggleModalEditProduct: (state) => {
            state.editProduct = !state.editProduct;
        },
        closeAllModal: (state) => {
            state.addProduct = false;
            state.editProduct = false;
            state.detailOrder = false;
        },
        toggleModalDetailOrder: (state) => {
            state.detailOrder = !state.detailOrder;
        }
    }
});

export const modalAction = {
    ...modalSlice.actions,
}

export default modalSlice.reducer;
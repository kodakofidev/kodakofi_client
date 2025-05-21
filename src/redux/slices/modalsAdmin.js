import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    addProduct: false,
    editProduct: false,
    detailOrder: false,
    addUser: false,
    editUser: false,
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
        },
        closeAllModal: (state) => {
            state.addProduct = false;
            state.editProduct = false;
            state.detailOrder = false;
            state.addUser = false;
            state.editUser = false;
        },
        toggleModalDetailOrder: (state) => {
            state.detailOrder = !state.detailOrder;
        },
        toggleAddUser: (state) => {
            state.addUser = !state.addUser;
        },
        toggleEditUser: (state) => {
            state.editUser = !state.editUser;
        }
    }
});

export const modalAction = {
    ...modalSlice.actions,
}

export default modalSlice.reducer;
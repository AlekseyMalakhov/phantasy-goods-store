import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "userStore",
    initialState: {
        accessToken: "",
        user: null,
        cart: [],
    },
    reducers: {
        changeAccessToken: (state, action) => {
            state.accessToken = action.payload;
        },
        changeUser: (state, action) => {
            state.user = action.payload;
        },
        addItemToCart: (state, action) => {
            const newCart = [...state.cart];
            newCart.push(action.payload);
            state.cart = newCart;
        },
        removeItemFromCart: (state, action) => {
            const newCart = state.cart.filter((item) => item.id !== action.payload.id);
            state.cart = newCart;
        },
    },
});

export const { changeAccessToken, changeUser, addItemToCart, removeItemFromCart } = userSlice.actions;
export default userSlice.reducer;

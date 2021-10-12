import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "userStore",
    initialState: {
        accessToken: "",
        user: null,
        cart: [],
        messages: null,
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
            const item = { ...action.payload };

            const dublicate = newCart.findIndex((existingItem) => existingItem.id === item.id);
            if (dublicate === -1) {
                item.number = 1;
                newCart.push(item);
            } else {
                newCart[dublicate].number++;
            }
            state.cart = newCart;
        },
        removeItemFromCart: (state, action) => {
            const newCart = state.cart.filter((item) => item.id !== action.payload.id);
            state.cart = newCart;
        },
        changeMessages: (state, action) => {
            state.messages = action.payload;
        },
    },
});

export const { changeAccessToken, changeUser, addItemToCart, removeItemFromCart, changeMessages } = userSlice.actions;
export default userSlice.reducer;

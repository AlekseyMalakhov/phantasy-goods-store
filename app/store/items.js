import { createSlice } from "@reduxjs/toolkit";

export const itemsSlice = createSlice({
    name: "itemsStore",
    initialState: {
        items: [],
        loadingAnimation: false,
        error: "",
    },
    reducers: {
        changeItems: (state, action) => {
            state.items = action.payload;
        },
        changeLoadingAnimation: (state, action) => {
            state.loadingAnimation = action.payload;
        },
        changeError: (state, action) => {
            state.error = action.payload;
        },
    },
});

export const { changeItems, changeLoadingAnimation, changeError } = itemsSlice.actions;
export default itemsSlice.reducer;

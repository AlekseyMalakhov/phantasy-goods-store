import { createSlice } from "@reduxjs/toolkit";

export const itemsSlice = createSlice({
    name: "itemsStore",
    initialState: {
        items: [],
    },
    reducers: {
        changeItems: (state, action) => {
            state.items = action.payload;
        },
    },
});

export const { changeItems } = itemsSlice.actions;
export default itemsSlice.reducer;

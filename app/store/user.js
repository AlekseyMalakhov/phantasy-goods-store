import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "userStore",
    initialState: {
        accessToken: "",
        user: {},
    },
    reducers: {
        changeAccessToken: (state, action) => {
            state.accessToken = action.payload;
        },
        changeUser: (state, action) => {
            state.user = action.payload;
        },
    },
});

export const { changeAccessToken, changeUser } = userSlice.actions;
export default userSlice.reducer;

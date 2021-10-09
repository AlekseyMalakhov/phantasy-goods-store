import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user";
import itemsReduser from "./items";

export const store = configureStore({
    reducer: {
        user: userReducer,
        items: itemsReduser,
    },
});

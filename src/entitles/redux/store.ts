import { configureStore } from "@reduxjs/toolkit"
import userSlice from "./userSlice"
import blogSlice from "./blogSlice";

export const store = configureStore({
    reducer: {
        user: userSlice,
        blog: blogSlice
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch
import { configureStore } from "@reduxjs/toolkit"
import userSlice from "./userSlice"
import boardsSlice from "./boardsSlice";

export const store = configureStore({
    reducer: {
        user:userSlice,
        boards:boardsSlice
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch
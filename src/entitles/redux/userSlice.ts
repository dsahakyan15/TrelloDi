import { createSlice } from "@reduxjs/toolkit"
import { loginWithGoogle } from "./thunks/loginWithGoogle.thunk";
import { loginWithGithub } from "./thunks/loginWithGithub.thunk";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        loading: false,
        error: null,
        profile: null,
    },
    reducers: {},
    extraReducers: {
        [loginWithGoogle.pending as any]:(state)=>{
             state.loading = true;
        },
        [loginWithGoogle.fulfilled as any]:(state,action)=>{
             state.loading = false;
             state.profile = action.payload
        },
        [loginWithGoogle.rejected as any]:(state,error)=>{
            state.loading = false
             state.error = error;
        },
        [loginWithGithub.pending as any]: (state) => {
            state.loading = true;
        },
        [loginWithGithub.fulfilled as any]: (state, action) => {
            state.loading = false;
            state.profile = action.payload
        },
        [loginWithGithub.rejected as any]: (state, error) => {
            state.loading = false
            state.error = error;
        },

    }
}) 

export default userSlice.reducer
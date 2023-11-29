import {
    getDocs,
    collection
} from 'firebase/firestore'
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { boardsInitialStateProps } from "./interfaces";
import { db } from 'shared/api/firebase';

const initialState: boardsInitialStateProps = {
    boards: [] as any,
    loading: false,
    error: null
}


export const fetchBoards = createAsyncThunk(
    'boards/fetchBoards',
    async () => {
        const querySnapshot = await getDocs(collection(db, "boards"))

        return querySnapshot.docs.map((doc) => ({
            id: doc.id, ...doc.data()
        }));
    }
)




const boardsSlice = createSlice({
    name: 'boards',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchBoards.pending as any]: (state) => {
            state.loading = true;
        },
        [fetchBoards.fulfilled as any]: (state, action) => {
            state.loading = false;
            state.boards = action.payload;
        },
        [fetchBoards.rejected as any]: (state, action) => {
            state.loading = false;
            state.error = action.error.message
        }
    }
})


export default boardsSlice.reducer
import {
    collection,
    getDocs,
    getDoc,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
} from "@firebase/firestore";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { boardsInitialStateProps, board, column } from "./interfaces";
import { db } from 'shared/api/firebase';

export const fetchBoards = createAsyncThunk(
    'blog/fetchBoards', async () => {
        const querySnapshot = await getDocs(collection(db, "boards"))


        return querySnapshot.docs.map((doc: any) => ({
            id: doc.id,
            ...doc.data()
        }))
    }
)
export const fetchBoard = createAsyncThunk(
    "blog/fetchBoard",
    async (id: string) => {
        const postRef = doc(db, "boards", id);
        const postSnapshot = await getDoc(postRef);
        if (postSnapshot.exists()) {
            return { id: postSnapshot.id, ...postSnapshot.data() };
        } else {
            throw new Error("Board not found");
        }
    }
);
export const createBoard = createAsyncThunk(
    'blog/createBoard', async ({ title, columns = null }: board) => {

        const docRef = await addDoc(collection(db, 'boards'), {
            title,
            columns
        })
        return { id: docRef.id, title, columns }
    }
)
export const deleteBoard = createAsyncThunk(
    'blog/deleteBoard', async (boardId:string) => {
        const boardRef = doc(db,'boards',boardId)
        await deleteDoc(boardRef);
        return boardId
    }
)
export const createColumn = createAsyncThunk(
    'blog/createColumn', async ({ title,tasks ,id}: column) => {

        const docRef = await addDoc(collection(db, 'boards',id), {
            title,tasks
        })
        return { id: docRef.id, title ,tasks}
    }
)


const initialState: boardsInitialStateProps = {
    boards: [] as any,
    loading: false,
    error: null
}



const blogSlice = createSlice({
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
        },
        [fetchBoard.pending as any]: (state) => {
            state.loading = true;
        },
        [fetchBoard.fulfilled as any]: (state, action) => {
            state.loading = false;
            const existsBoard = state.boards.find(
                (post: any) => post.id === action.payload.id
            );

            if (!existsBoard) {
                state.boards.push(action.payload);
            }
        },
        [fetchBoard.rejected as any]: (state, action) => {
            state.loading = false;
            const existsBoard = state.boards.find(
                (board: any) => board.id === action.payload.id
            );

            if (!existsBoard) {
                state.boards.push(action.payload);
            }
        },
        [createBoard.pending as any]: (state) => {
            state.loading = true;
        },
        [createBoard.fulfilled as any]: (state, action) => {
            state.loading = false;
            state.boards.push(action.payload as any)
        },
        [createBoard.rejected as any]: (state, action) => {
            state.loading = false;
            state.error = action.error.message
        },
        [deleteBoard.pending as any]: (state) => {
            state.loading = true;
        },
        [deleteBoard.fulfilled as any]: (state, action) => {
            state.loading = false;
            state.boards = state.boards.filter(
                (board: any)=> board.id !== action.payload
            );
        },
        [deleteBoard.rejected as any]: (state, action) => {
            state.loading = false;
            state.error = action.error.message
        },
    }
})


export default blogSlice.reducer
import {
    collection,
    getDocs,
    getDoc,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
    setDoc,
    arrayUnion,
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
    async (id: { boardId: string }) => {
        // const postRef = doc(db, "boards", id.boardId);
        // const postSnapshot = await getDoc(postRef);

        // console.log(postSnapshot.doc.map((doc: any) => ({ id: doc.id, ...doc.data() })));

        const querySnapshot = await getDocs(collection(db, 'boards'))



        const inSnapshot = querySnapshot.docs.map((doc: any) => ({ id: doc.id, ...doc.data() }))

        let boardTemp

        for (let i in inSnapshot) {
            if (inSnapshot[i].id === id.boardId) {
                boardTemp = {...inSnapshot[i]}
            }
        }
        return {...boardTemp}

        // if (postSnapshot.exists()) {
        //     return { id: postSnapshot.id, ...postSnapshot.data() };
        // } else {
        //     throw new Error("Board not found");
        // }
    }
);
export const createBoard = createAsyncThunk(
    'blog/createBoard', async ({ title, columns = [] }: board) => {

        const docRef = await addDoc(collection(db, 'boards'), {
            title,
            columns
        })
        return { id: docRef.id, title, columns }
    }
)
export const deleteBoard = createAsyncThunk(
    'blog/deleteBoard', async (boardId: string) => {
        const boardRef = doc(db, 'boards', boardId)
        await deleteDoc(boardRef);
        return boardId
    }
)
export const createColumn = createAsyncThunk(
    'blog/createColumn', async (items: { title: any, tasks: any, boardId: any }) => {
        let collectionRef = await getDocs(collection(db, 'boards'))
        let data: any = collectionRef.docs.map((doc: any) => ({ id: doc.id, ...doc.data() }))
        const boardRef = doc(db, 'boards', items.boardId)

        let dataTemp
        for (let i in data) {
            if (data[i].id === items.boardId) {
                dataTemp = data[i]
            }
        }
        dataTemp.columns.push({
            tasks: items.tasks,
            title: items.title
        })

        await updateDoc(boardRef, {
            columns: dataTemp.columns,
        });

        return { ...items }



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
            debugger
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
            debugger
            state.boards = action.payload.columns
            debugger
            // const existsBoard = state.boards.find(
            //     (post: any) => post?.id === action.payload?.id
            // );

            // if (!existsBoard) {
            //     state.boards.push(action.payload);
            // }
        },
        [fetchBoard.rejected as any]: (state, action) => {
            state.loading = false;
            const existsBoard = state.boards.find(
                (board: any) => board?.id === action.payload?.id
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
                (board: any) => board.id !== action.payload
            );
        },
        [deleteBoard.rejected as any]: (state, action) => {
            state.loading = false;
            state.error = action.error.message
        },
        [createColumn.pending as any]: (state) => {
            state.loading = true;
        },
        [createColumn.fulfilled as any]: (state, action) => {
            state.loading = false;



            // const targetBoard = state.boards.find((board: any) => board.id === action.payload.id);
            // if (targetBoard) {
            //     targetBoard.columns = action.payload.columns;
            // }
        },
        [createColumn.rejected as any]: (state, action) => {
            state.loading = false;
            state.error = action.error.message
            console.log(action.error)
        },
    }
})


export default blogSlice.reducer
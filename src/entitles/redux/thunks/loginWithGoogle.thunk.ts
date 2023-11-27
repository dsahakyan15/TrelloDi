import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { auth } from 'shared/api/firebase'

interface User {
    uid: string;
    displayName: string | null;
    email: string | null;
    photoURL: string | null;
}




export const loginWithGoogle = createAsyncThunk(
    'user/loginWithGoogle',
    async (_, { rejectWithValue }) => {
        try {

            const provider = new GoogleAuthProvider()

            const result = await signInWithPopup(auth, provider)

            const userData: User = {
                uid: result.user.uid,
                displayName: result.user.displayName,
                email: result.user.email,
                photoURL: result.user.photoURL
            }
            return userData
        } catch (error) {
            if (error instanceof Error) {
                return rejectWithValue(error.message)
            } else {
                rejectWithValue("My Error message")
            }

        }


    }
)
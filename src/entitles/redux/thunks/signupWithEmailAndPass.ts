import { signInWithEmailAndPassword } from "firebase/auth";
import { createAsyncThunk } from '@reduxjs/toolkit';
import { User } from '../interfaces';


export const signupWithEmailAndPass = createAsyncThunk(
    "user/signupWithEmailAndPass",
    async (data: { email: any, pass: any, auth: any }, { rejectWithValue }) => {
        try {
            const { email, pass, auth } = data
            console.log(data);

            const result = await signInWithEmailAndPassword(auth, email, pass)

            const userData: User = {
                uid: result.user.uid,
                displayName: result.user.displayName,
                email: result.user.email,
                photoURL: result.user.photoURL
            }
            console.log(userData)
            return userData
        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message, '----')
                return rejectWithValue(error.message)
            } else {
                return rejectWithValue("My Error message")
            }

        }
    })
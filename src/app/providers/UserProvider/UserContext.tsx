import { createContext, useState, useContext, ReactNode } from "react";
import { User } from "firebase/auth";
import { auth } from "shared/api/firebase";

//TODO stex petqa lini sovorakan email,username autnetifikaciai hamar interface 
// export interface UserContextProps {
//     user?: User | null;
//     setUser?: (user: User) => void
// }

export const UserContext = createContext({})



export const LOCAL_STORAGE_USER_KEY = 'user'
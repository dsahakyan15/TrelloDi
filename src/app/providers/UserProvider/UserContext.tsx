import { createContext, useState, useContext, ReactNode } from "react";
import { User } from "firebase/auth";
import { auth } from "shared/api/firebase";

//TODO stex petqa lini sovorakan email,username autnetifikaciai hamar interface 
// export interface UserContextProps {
//     user?: User | null;
//     setUser?: (user: User) => void
// }

export const UserContext = createContext({})


// export const UserProvider = ({ children }: any) => {
//     const [user, setUser] = useState(null);

//     const login = (userData: any) => {
//         setUser(userData);
//     };

//     const logout = () => {
//         auth.signOut();
//         setUser(null);
//     };

//     const updateUserProfile = (newData: any) => {
//         setUser((prevUser: any) => ({
//             ...prevUser,
//             ...newData,
//         }));
//     };

//     return (
//         <UserContext.Provider value={{ user, login, logout, updateUserProfile} }>
//         { children }
//         </UserContext.Provider>
        
//   )
// };

// export const useUser = () => {
//     return useContext(UserContext);
// };



export const LOCAL_STORAGE_USER_KEY = 'user'
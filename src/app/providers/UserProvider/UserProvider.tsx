import {useState} from 'react'
import { auth } from 'shared/api/firebase';
import {UserContext} from './UserContext'



export const UserProvider = ({ children }: any) => {
    const [user, setUser] = useState(null);

    const login = (userData: any) => {
        setUser(userData);
        console.log(userData)
    };

    const logout = () => {
        auth.signOut();
        setUser(null);
    };

    const updateUserProfile = (newData: any) => {
        setUser((prevUser: any) => ({
            ...prevUser,
            ...newData,
        }));
    };

    return (
        <UserContext.Provider value={{ user, login, logout, updateUserProfile }}>
            {children}
        </UserContext.Provider>

    )
};

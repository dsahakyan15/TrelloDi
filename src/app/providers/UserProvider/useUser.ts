import { UserContext } from './UserContext';
import { useContext } from 'react'


 const useUser = () => {
    return useContext(UserContext);
};


export default useUser

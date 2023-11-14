import { UserContext } from './UserContext';
import { useContext } from 'react'


 const useUser = () => {
    return useContext(UserContext);
};


export default useUser





























































// import {useContext} from 'react';
// import { LOCAL_STORAGE_USER_KEY , UserContext } from './UserContext';
// import { User } from 'firebase/auth';


// const useUser = ()=>{
//     const {user,setUser} = useContext(UserContext);

//     //helnelu hamar profilic
//     const outUser = () =>{
//         if(setUser){
//             // setUser({})
//             console.log('jamanakavor chi ashxatum')
//         }
//     }

//     return {
//         user,
//         outUser
//     }
// }

// export default useUser
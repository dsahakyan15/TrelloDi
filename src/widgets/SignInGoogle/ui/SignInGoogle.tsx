import { FC } from 'react'
import { FaGoogle } from 'react-icons/fa6'
import styles from './SignInGoogle.module.css'
import { auth } from 'shared/api/firebase'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import useUser from 'app/providers/UserProvider/useUser'

const SignInGoogle: FC = () => {
    const { user, login, updateUserProfile }: any = useUser()


    const signIn = async () => {
        const provider = new GoogleAuthProvider()

        try {
            const result = await signInWithPopup(auth, provider)

            const user = result.user;
            console.log(user);


            login({
                uid: user.uid,
                displayName: user.displayName,
                email: user.email
                // eli baner useri
            })



            // updateUserProfile();


        } catch (err) {
            console.log('error with Google auth ', err)
        }
    }
    return (
        <div onClick={signIn} className={styles.google}>
            <FaGoogle />
        </div>
    )
}
export default SignInGoogle
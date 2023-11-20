import { FC } from 'react'
import { FaGithub } from 'react-icons/fa6'
import styles from './SignInGithub.module.css'
import { auth } from 'shared/api/firebase'
import { GithubAuthProvider, signInWithPopup } from 'firebase/auth'
import useUser from 'app/providers/UserProvider/useUser'

const SignInGithub: FC = () => {
    const { login }: any = useUser()


    const signIn = async () => {
        const provider = new GithubAuthProvider()

        try {
            const result = await signInWithPopup(auth, provider)
            //  TODO chi gali displayName@

            const user = await result.user;

            console.log(user);

            login({
                uid: user.uid,
                displayName: user.displayName,
                email: user.email
                // eli baner useri
            })

        } catch (err) {
            console.log('error with Github auth ', err)
        }
    }
    return (
        <div onClick={signIn} className={styles.github}>
            <FaGithub />
        </div>
    )
}
export default SignInGithub
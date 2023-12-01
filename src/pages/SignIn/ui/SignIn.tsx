import { FC, useState } from "react";
import { auth } from "shared/api/firebase";


import styles from './SignIn.module.css'
import { useAppDispatch } from "entitles/hooks/useAppDispatch";
import { useNavigate } from "react-router-dom";
import { signinWithEmailAndPass } from "entitles/redux/thunks/signinWithEmailAndPass";

const SignIn: FC = () => {

    const [email, setEmail] = useState<string>('')
    const [pass, setPass] = useState<string>('')
    const [error, setError] = useState<string>('')

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const signInMethod = async () => {
        try {
            await (dispatch(signinWithEmailAndPass({ email, pass, auth })))
        } catch (err) {
            setError(err as string)
            return
        }
            navigate('/')
    }



    return (
        <div className={styles.signIn}>
            <div className={styles.backRound}></div>
            <div className={styles.window}>
                <div className={styles.title}>TrelloDi</div>
                <div className={styles.form}>
                    <div className={styles.formEmail}>
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            id="email" />
                    </div>
                    <div className={styles.formPassword}>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            value={pass}
                            onChange={e => setPass(e.target.value)}
                            id="password" />
                    </div>
                    <button
                        onClick={signInMethod}
                        className={styles.formBtn}>
                        Le`go
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SignIn
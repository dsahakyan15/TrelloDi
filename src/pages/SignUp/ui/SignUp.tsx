import { FC, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from 'shared/api/firebase'
import SignInGoogle from "widgets/SignInGoogle";
import SignInGithub from "widgets/SignInGithub";


import styles from './SignUp.module.css'
import { useAppDispatch } from "entitles/hooks/useAppDispatch";
import { signupWithEmailAndPass } from "entitles/redux/thunks/signupWithEmailAndPass";

const SignUp: FC = () => {
    const [email, setEmail] = useState<string>('')
    const [pass, setPass] = useState<string>('')
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const signup = async () => {
        await dispatch(signupWithEmailAndPass({  email, pass, auth}))
        // navigate('/desktop')
    }

    const signInMethod = () => {
        signup()
    }

    return (
        <div className={styles.signUp}>
            <div className={styles.backRound}></div>
            <div className={styles.window}>
                <div className={styles.title}>TrelloDi</div>
                <div className={styles.form}>
                    <div className={styles.formEmail}>
                        <label htmlFor="email">Email</label>
                        <input
                            value={email}
                            onChange={(event) => { setEmail(event.target.value) }}
                            type="text"
                            id="email" />
                    </div>
                    <div className={styles.formPassword}>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            value={pass}
                            onChange={(event) => { setPass(event.target.value) }}
                            id="password" />
                    </div>
                    <button
                        onClick={signInMethod}
                        className={styles.formBtn}>Le`go</button>
                    <Link to="signin">
                        <span className={styles.signIn}>
                            Create Account
                        </span>
                    </Link>
                </div>
                <div className={styles.apiReg}>
                    <div className={styles.walker}></div>
                    <div className={styles.icons}>
                        <SignInGoogle />
                        <SignInGithub />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp
import { FC } from "react";
import SignInGoogle from "widgets/SignInGoogle";
import SignInGithub from "widgets/SignInGithub";


import styles from './SignUp.module.css'

const SignUp: FC = () => {
    return (
        <div className={styles.signUp}>
            <div className={styles.backRound}></div>
            <div className={styles.window}>
                <div className={styles.title}>TrelloDi</div>
                <div className={styles.form}>
                    <div className={styles.formEmail}>
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" />
                    </div>
                    <div className={styles.formUsername}>
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" />
                    </div>
                    <button className={styles.formBtn}>Le`go</button>
                </div>
                <div className={styles.apiReg}>
                    <div className={styles.walker}></div>
                    <div className={styles.icons}>
                        <SignInGoogle/>
                        <SignInGithub/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp
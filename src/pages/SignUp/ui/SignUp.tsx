import { FC } from "react";
import { FaGithub } from 'react-icons/fa6'
import styles from './SignUp.module.css'
import SignInGoogle from "widgets/SignInGoogle";

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
                        <div className={styles.github}>
                            <FaGithub/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp
import { FC } from "react";


import styles from './SignIn.module.css'

const SignIn: FC = () => {
    
    return (
        <div className={styles.signIn}>
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
            </div>
        </div>
    )
}

export default SignIn
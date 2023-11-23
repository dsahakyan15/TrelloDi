import { FC } from 'react'
import { FaPlus, FaUser } from 'react-icons/fa6'
import styles from './Boards.module.css'
import Header from 'widgets/Header'
import { Link } from 'react-router-dom'

const Boards: FC = () => {
    return (
        <div>
            <Header />
            <div className={styles.main}>
                <div className={styles.mainHead}>
                    <div className={styles.headAvatar}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png" alt="Avatar" />
                    </div>
                    <div className={styles.head}>
                        <h2>davitsahakyan373</h2>
                    </div>
                </div>
                <div className={styles.table}>
                    <div className={styles.yourBoards}>
                        <div
                            className={styles.yourBoardsTitle}>
                            <FaUser />
                            <span>Your Boards</span>
                        </div>
                        <div className={styles.boards}>

                            <Link to="/desktop">
                                <div
                                    className={styles.board}>
                                    <span>React.Js</span>
                                </div>
                            </Link>

                            <div
                                className={styles.addNew}>
                                <span className={styles.plus}>
                                    <FaPlus />
                                </span>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Boards
import { FC } from 'react'

import { AiOutlineSetting } from 'react-icons/ai'
import { FaRegComment, FaPlus } from 'react-icons/fa6'
import { CardProps } from './Card.interface'



import styles from './Card.module.css'

const Card: FC<CardProps> = ({ col , ref }) => {
    return (
        <div className={styles.card}>
            <div className={styles.cardHead}>
                <span className={styles.cardTitle}>Backlog</span>
                <div className={styles.cardActions}><AiOutlineSetting /></div>
            </div>
            <div className={styles.cardBody}>
                <ul className={styles.cardTasks}>
                    <li className={styles.cardTask}>
                        <span className={styles.cardTaskContent}>1.Task Desktop</span>
                        <div className={styles.inter}>
                            <FaRegComment /><p className={styles.interNotific}>1</p>
                        </div>
                    </li>
                    <li className={styles.cardTask}>
                        <span className="cardTaskContent">test</span>
                    </li>
                </ul>
                <div className={styles.cardAdd}>
                    <FaPlus /> <span className={styles.addACard}>Add a card</span>
                </div>
            </div>
        </div>
    )
}
export default Card
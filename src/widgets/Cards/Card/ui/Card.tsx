import { FC } from 'react'

import { AiOutlineSetting } from 'react-icons/ai'
import { FaRegComment, FaPlus } from 'react-icons/fa6'
import { CardProps } from './Card.interface'



import styles from './Card.module.css'
import { Draggable } from 'react-beautiful-dnd'
import { Link } from 'react-router-dom'

const Card: FC<CardProps> = ({ col, provided }) => {

    // TODO stex saxi height@ irar heta poxvum

    return (
        <div className={styles.card} {...provided.droppableProps} ref={provided.innerRef}>
            <div className={styles.cardHead}>
                <span className={styles.cardTitle}>{col.title}</span>
                <div className={styles.cardActions}><AiOutlineSetting /></div>
            </div>
            <div className={styles.cardBody}>
                <ul className={styles.cardTasks}>
                    {/* <li className={styles.cardTask}>
                        <span className={styles.cardTaskContent}>1.Task Desktop</span>
                        <div className={styles.inter}>
                            <FaRegComment /><p className={styles.interNotific}>1</p>
                        </div>
                    </li> */}
                    <>
                        {
                            col.cards.map((card, index) => {
                                return (
                                    <Draggable
                                        key={card.id}
                                        draggableId={card.id}
                                        index={index}>
                                        {
                                            (provided) => {
                                                return (
                                                    <Link to={'/desktop/taskmodal/'+card.id} >
                                                    <li ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                        className={styles.cardTask}>
                                                        <span className={styles.cardTaskContent}>
                                                            {card.content}</span>
                                                        <div className={styles.inter}>
                                                            <FaRegComment /><p className={styles.interNotific}>1</p>
                                                        </div>
                                                    </li>
                                                    </Link>

                                )
                            }
                                        }
                    </Draggable>
                    )

                            })
                        }
                </>
            </ul>
            <div className={styles.cardAdd}>
                <FaPlus /> <span className={styles.addACard}>Add a card</span>
            </div>
        </div>
        </div >
    )
}
export default Card
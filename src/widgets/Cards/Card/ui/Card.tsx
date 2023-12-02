import { FC } from 'react'

import { AiOutlineSetting } from 'react-icons/ai'
import { FaRegComment, FaPlus } from 'react-icons/fa6'
import { CardProps } from './Card.interface'



import styles from './Card.module.css'
import { Draggable } from 'react-beautiful-dnd'
import { Link } from 'react-router-dom'

const Card: FC<CardProps> = ({ col, provided, boardId }) => {

    // TODO stex saxi height@ irar heta poxvum

    return (
        <div className={styles.card} {...provided.droppableProps} ref={provided.innerRef}>
            <div className={styles.cardHead}>
                <span className={styles.cardTitle}>{col.title}</span>
                <div className={styles.cardActions}><AiOutlineSetting /></div>
            </div>
            <div className={styles.cardBody}>
                <ul className={styles.cardTasks}>
                    {
                       
                        col.tasks?.map((card, index) => {

                            return (
                                <Draggable
                                    key={`${index}`}
                                    draggableId={`${index}`}
                                    index={index}>
                                    {
                                        (provided) => {
                                            return (
                                                <Link to={`/desktop/taskmodal?boardId=${boardId}&taskId=${index}`} >
                                                    <li ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                        className={styles.cardTask}>
                                                        <span className={styles.cardTaskContent}>
                                                            {card.content}
                                                        </span>
                                                        {card.comments?.length ?
                                                            <div className={styles.inter}>
                                                                <FaRegComment /><p className={styles.interNotific}>{card.comments.length}</p>
                                                            </div> : null
                                                        }

                                                    </li>
                                                </Link>

                                            )
                                        }
                                    }
                                </Draggable>
                            )

                        })
                    }
                </ul>
                <div className={styles.cardAdd}>
                    <FaPlus /> <span className={styles.addACard}>Add a card</span>
                </div>
            </div>
        </div >
    )
}
export default Card
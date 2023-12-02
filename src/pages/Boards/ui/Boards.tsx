import React, { FC, useEffect, useRef, useState } from 'react'
import { FaPlus, FaUser, FaRegTrashCan } from 'react-icons/fa6'
import styles from './Boards.module.css'
import Header from 'widgets/Header'
import { Link } from 'react-router-dom'


import { fetchBoards, createBoard, deleteBoard } from "entitles/redux/blogSlice"
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'entitles/hooks/useAppDispatch';
import { RootState } from 'entitles/redux/store'


const Boards: FC = () => {
    const user = useSelector((state: RootState) => {
        return state.user.profile
    })

    const [addWidget, setAddWidget] = useState<Boolean>(false)
    const [addInputValue, setAddInputValue] = useState<string>('')

    const dispatch = useAppDispatch();
    const boards = useSelector((state: RootState) => {
        return state.blog.boards
    })
    const boardsRef = useRef<HTMLDivElement>(null)
    const loading = useSelector((state: RootState) => {
        return state.blog.loading
    })

    const error = useSelector((state: RootState) => {
        return state.blog.error
    })
    useEffect(() => {
        dispatch(fetchBoards())
    }, [dispatch])

    const handleAddWidget = {
        openAddWidget: (event: React.MouseEvent<HTMLDivElement>) => {
            setAddWidget(true)
        },
        closeAddWidget: (event: any) => {
            if (boardsRef.current && !boardsRef.current.contains(event.target as Node)) {
                setAddWidget(false)
            }
        }
    }
    const handleAddInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAddInputValue(event.target.value)
    }

    const handleCreateBoard = (event: React.MouseEvent<HTMLButtonElement>) => {

        if (addInputValue.trim()) {

            dispatch(
                createBoard({
                    title: addInputValue,
                    columns: []
                })
            );
            setAddInputValue('')
            setAddWidget((prev) => !addWidget)
        }

    }

    const handleDeleteBoard = (event: any) => {
        dispatch(deleteBoard(event.target.id))
        debugger
    }

    useEffect(() => {
        document.addEventListener('click', handleAddWidget.closeAddWidget)

        return () => {
            document.removeEventListener('click', handleAddWidget.closeAddWidget)
        }
    }, [])

    return (
        <div className={styles.Boards}>
            <Header />
            <div className={styles.main}>
                <div className={styles.mainHead}>
                    <div className={styles.headAvatar}>
                        <img src={user?.photoURL ? user.photoURL :
                            "https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg"
                        } alt="avatar" />
                    </div>
                    <div className={styles.head}>
                        <h2>{user?.displayName ? user?.displayName : user?.email}</h2>
                    </div>
                </div>
                <div className={styles.table}>
                    <div className={styles.yourBoards}>
                        <div
                            className={styles.yourBoardsTitle}>
                            <FaUser />
                            <span>Your Boards</span>
                        </div>

                        {
                            loading ? <p>Loading...</p> :
                                <div ref={boardsRef} className={styles.boards}>

                                    {
                                        !addWidget ?
                                            <div
                                                className={styles.addNew}
                                                onClick={handleAddWidget.openAddWidget}>
                                                <span className={styles.plus}>
                                                    <FaPlus />
                                                </span>
                                            </div>
                                            :
                                            <div className={styles.addNewWidget}>
                                                <input maxLength={16} type="text" onChange={handleAddInput} value={addInputValue} placeholder='New board title' />
                                                <button onClick={handleCreateBoard}>Create</button>
                                            </div>
                                    }


                                    <>{
                                        boards.map((board) => (
                                            <div>
                                                <Link key={board.id} to={`/desktop?boardId=${board.id}`}>
                                                    <div
                                                        className={styles.board}>
                                                        <span>{board.title}</span>
                                                    </div>
                                                </Link>
                                                <div
                                                    onClick={(e) => handleDeleteBoard(e)}
                                                    id={board.id}
                                                    className={styles.deleteBoard}>
                                                    <FaRegTrashCan />
                                                </div>
                                            </div>

                                        ))
                                    }
                                    </>
                                </div>
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Boards
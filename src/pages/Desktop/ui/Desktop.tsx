import { FC, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useAppDispatch } from 'entitles/hooks/useAppDispatch';
import { RootState } from 'entitles/redux/store';
import { fetchBoard } from "entitles/redux/blogSlice"
import { useSelector } from 'react-redux';

import Header from "widgets/Header"
import Cards from "widgets/Cards"

import { AiOutlineStar } from 'react-icons/ai'
import { BsFilter } from 'react-icons/bs'
import styles from './Desktop.module.css'





const Desktop: FC = () => {

  const [searchParams] = useSearchParams()

  const boardId = searchParams.get("boardId")

  const dispatch = useAppDispatch();

  const board = useSelector((state: any) => {
    return state.blog.boards.find((board: any) => board.id === boardId)
  })
  const loading = useSelector((state: RootState) => {
    return state.blog.loading
  })

  const error = useSelector((state: RootState) => {
    return state.blog.error
  })
  useEffect(() => {
    if (boardId && !board) {
      dispatch(fetchBoard(boardId))
    }
  }, [dispatch, board, boardId])


  return (
    <div className={styles.desktop}>
      <Header />
      <div className={styles.desktopBody}>
        <div className={styles.desktopHead}>
          <h3 className={styles.desktopTitle}>
            {board?.title}
          </h3>

          <div className={styles.toStar}>
            <AiOutlineStar />
          </div>
          <div className={styles.cardsFilter}>
            <BsFilter /> 
            <span>Filters</span>
          </div>
        </div>
        <Cards />
      </div>
    </div>
  )
}
export default Desktop
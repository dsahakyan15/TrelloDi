import { FC } from 'react'

import Header from "widgets/Header"
import Cards from "widgets/Cards"
import TaskModal from "pages/TaskModal"

import { AiOutlineStar } from 'react-icons/ai'
import { BsFilter } from 'react-icons/bs'
import styles from './Desktop.module.css'
import { DesktopProps } from './Desktop.interface'





const Desktop: FC<DesktopProps> = ({ initialColumns }) => {
  console.log(initialColumns);

  return (
    <div className={styles.desktop}>
      <Header />
      <div className={styles.desktopBody}>
        <div className={styles.desktopHead}>
          <h3 className={styles.desktopTitle}>
            React.Js
          </h3>

          <div className={styles.toStar}>
            <AiOutlineStar />
          </div>
          <div className={styles.cardsFilter}>
            <BsFilter /> <span>Filters</span>
          </div>
        </div>
        <Cards initialColumns={initialColumns} />
      </div>
    </div>
  )
}
export default Desktop
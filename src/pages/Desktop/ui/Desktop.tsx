import Header from "widgets/Header"
import Card from "widgets/Card"
import TaskModal from "pages/TaskModal"

import { AiOutlineStar } from 'react-icons/ai'
import { BsFilter } from 'react-icons/bs'
import styles from './Desktop.module.css'

const Desktop = ({ handleSignOut }: any) => {
  return (
    <div className={styles.desktop}>
      <Header />
      <TaskModal />
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
        <div className={styles.cards}>
          <Card />

        </div>
      </div>
    </div>
  )
}
export default Desktop
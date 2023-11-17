import { FC } from 'react'
import { FaPager, FaXmark, FaListUl } from "react-icons/fa6";

import styles from './TaskModal.module.css'

const TaskModal: FC = () => {
  return (
    <div className={styles.overlay}>
      <div className={styles.window}>
        <div className={styles.windowHeader}>
          <div className={styles.headerIcon}>
            <FaPager />
          </div>
          <div className={styles.headerTitle}>
            <h2>Project Planning</h2>
            <span className={styles.titleInline}>in list <span className={styles.inline}>Backlist</span></span>
          </div>
          <div className={styles.headerClose}>
            <FaXmark />
          </div>
        </div>
        <div className={styles.windowMain}>
          <div className={styles.mainDesription}></div>
          <div className={styles.mainActivity}>
            <div className={styles.activityHeader}>
              <div className={styles.activityIcon}>
                <FaListUl />
              </div>
              <div className={styles.activityTitle}>
                <h3>Activity</h3>
              </div>
            </div>
            <div className={styles.activityMain}>
              <div className={styles.newComment}>
                <div className={styles.member}>
                  <div className={styles.memberAvatar}>
                    <img src="https://www.svgrepo.com/show/384674/account-avatar-profile-user-11.svg" alt="your Avatar" />
                  </div>
                  <div className={styles.memberWrite}>
                    <input type="text" placeholder='Write a comment' />
                  </div>
                </div>
              </div>
              <div className={styles.comments}>
                <div className={styles.commentsComm}>
                  <div className={styles.commAvatar}>
                    <img src="https://www.svgrepo.com/show/384674/account-avatar-profile-user-11.svg" alt="your Avatar" />
                  </div>
                  <div className={styles.commMain}>
                    <div className={styles.commHeader}>
                      <span className={styles.commTitle}>davitsahakyan373</span>
                      <span className={styles.commDate}>
                        6 minutes ago
                      </span>
                    </div>
                    <div className={styles.commContent}>
                      <p>test</p>
                    </div>
                    <div className={styles.commReactions}>
                      <span className={styles.reply}>Reply</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default TaskModal
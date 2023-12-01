import { FC, useState } from 'react'
import Header from 'widgets/Header'
import { useSelector } from 'react-redux'

import styles from './UserPage.module.css'
import { RootState } from 'entitles/redux/store'

const UserPage: FC = () => {
  const user = useSelector((state: RootState) => {
    return state.user.profile
  })



  const handleUsname = (event: React.ChangeEvent<HTMLInputElement>) => {

  }

  return (
    <div className={styles.userPage}>
      <Header />
      <div className={styles.main}>
        <div className={styles.userInfo}>
          <div className={styles.userAvatar}>
            <img src={user?.photoURL ? user.photoURL :
              "https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg"
            } alt="avatar" />
          </div>
          <div className={styles.userText}>
            <span className={styles.userName}>
              {user?.displayName ? user?.displayName : user?.email}
            </span>
            <div className={styles.userTag}>
              {user?.email}
            </div>
          </div>
        </div>
        <div className={styles.about}>
          <div className={styles.aboutHead}>
            <h3>About</h3>
          </div>
          <div className={styles.aboutBody}>

            <div className={styles.bodyUsername}>
              <label htmlFor="username">Username</label>
              <input type="text" id='username' onChange={handleUsname} />
            </div>
            <div className={styles.bodyBio}>
              <label htmlFor="imaage">Image</label>
              <input id='image' type="file" />
            </div>
            <button className={styles.bodyPrimary}>
              Save
            </button>

          </div>
        </div>
      </div>
    </div>
  )
}
export default UserPage
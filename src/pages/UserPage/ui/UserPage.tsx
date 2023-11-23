import { FC, useState } from 'react'
import Header from 'widgets/Header'
import useUser from 'app/providers/UserProvider/useUser'

import styles from './UserPage.module.css'

const UserPage: FC = () => {

  const { user }: any = useUser()
  const [usname,setUsname] = useState<string>(user?.displayName)


  const handleUsname = (event:React.ChangeEvent<HTMLInputElement>) => {
    if(event.target.value){
      setUsname(event.target.value)
    }

  }

  return (
    <div>
      <Header />
      <div className={styles.main}>
        <div className={styles.userInfo}>
          <div className={styles.userAvatar}>
            <img src="https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg" alt="avatar" />
          </div>
          <div className={styles.userText}>
            <span className={styles.userName}>
              {user?.displayName}
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
              <input type="text" id='username' onChange={handleUsname} value={usname} />
            </div>
            <div className={styles.bodyBio}>
              <label htmlFor="bio">Bio</label>
              <textarea id='bio' />
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
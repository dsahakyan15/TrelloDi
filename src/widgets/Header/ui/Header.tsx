import { Link } from 'react-router-dom'
import styles from './Header.module.css'


import useUser from 'app/providers/UserProvider/useUser'


const Header = () => {

  const { user, logout }: any = useUser()


  return (
    <div className={styles.header}>
      <div className={styles.brand}>
        <h4>TrelloDi</h4>
      </div>
      <div className={styles.menu}>
        <ul className={styles.list}>
          <li>
            <Link to="/boards">
              <span className={styles.listItem}>
                Boards
              </span>
            </Link>

          </li>
          <li onClick={logout}>
            <Link to="/">
              <span className={styles.listItem}>
                Sign Out
              </span>
            </Link>

          </li>
          <li>
            <Link to="/user">
              <span className={styles.listItem}>
                User Page , {user?.displayName}
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default Header
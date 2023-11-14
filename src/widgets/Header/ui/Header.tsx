import styles from './Header.module.css'


import useUser from 'app/providers/UserProvider/useUser'


const Header = () => {

const {user,logout}:any = useUser()
setTimeout(()=>{
  console.log(user);
  
},1000)

  return (
    <div className={styles.header}>
      <div className={styles.brand}>
        <h4>TrelloDi</h4>
      </div>
      <div className={styles.menu}>
        <ul className={styles.list}>
          <li>Desktop</li>
          <li onClick={logout}>Sign Out</li>
          <li>User Page , {user}</li>
        </ul>
      </div>
    </div>
  )
}
export default Header
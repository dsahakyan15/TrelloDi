import { FC } from 'react'
import { FaGoogle } from 'react-icons/fa6'
import styles from './SignInGoogle.module.css'
import { loginWithGoogle } from 'entitles/redux/thunks/loginWithGoogle.thunk'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from 'entitles/hooks/useAppDispatch'

const SignInGoogle: FC = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const signIn = async () => {
        await dispatch(loginWithGoogle())
        navigate('/desktop')
    }
    return (
        <div onClick={signIn} className={styles.google}>
            <FaGoogle />
        </div>
    )
}
export default SignInGoogle
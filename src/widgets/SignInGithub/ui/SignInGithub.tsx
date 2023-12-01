import { FC } from 'react'
import { FaGithub } from 'react-icons/fa6'
import styles from './SignInGithub.module.css'
import { loginWithGithub } from 'entitles/redux/thunks/loginWithGithub.thunk'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from 'entitles/hooks/useAppDispatch'

const SignInGithub: FC = () => {

const dispatch = useAppDispatch()
const navigate = useNavigate()
    const signIn = async () => {
        await dispatch(loginWithGithub())
        navigate('/boards')
    }
    return (
        <div onClick={signIn} className={styles.github}>
            <FaGithub />
        </div>
    )
}
export default SignInGithub
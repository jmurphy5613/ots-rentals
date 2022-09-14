import styles from '../styles/Login.module.css'
import { useState } from 'react'
import { useRouter } from 'next/router'

const Login = () => {

    const [password, setPassword] = useState<String>()

    const router = useRouter()

    const onSubmit = () => {
        if(password === 'password') {
            router.push('/dashboard')
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles["login-card"]}>
                <h1 className={styles["login-title"]}>Login</h1>
                <input onChange={(e) => {
                    setPassword(e.target.value)
                }} className={styles.password} type="text" placeholder="Password" />
                <button onClick={() => {
                    onSubmit()
                }} className={styles["login-button"]}>Login</button>
            </div>
        </div>
    )
}

export default Login;
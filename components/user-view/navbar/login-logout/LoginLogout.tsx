import styles from './LoginLogout.module.css'

import { useUser } from '@auth0/nextjs-auth0'
import { useRouter } from 'next/router'

const LoginLogout = () => {

    const { user } = useUser()
    const router = useRouter()

    return (
        <div>
            {user 
                ? 
                    <div>
                        <h2 className={styles.username}>{user.name}</h2>
                        <button onClick={() => {
                            router.push('/api/auth/logout')
                        }}>Logout</button> 
                    </div>
                : 
                    <button onClick={() => {
                        router.push('/api/auth/login')
                    }}>Login</button>
            }            
        </div>
    )
}

export default LoginLogout
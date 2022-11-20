import { useState } from 'react'
import styles from './UserManager.module.css'


const UserManagement = () => {

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')

    

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <input className={styles["user-input"]} placeholder='Email' onChange={(e) => {
                    setEmail(e.target.value)
                }} />
                <input className={styles["user-input"]} placeholder='Name' onChange={(e) => {
                    setName(e.target.value)
                }} />
                <div className={styles.add} onClick={() => {

                }}>+</div>
            </div>

        </div>
    )
}

export default UserManagement
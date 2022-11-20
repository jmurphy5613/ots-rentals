import { useState } from 'react'
import styles from './UserGrid.module.css'
import { User } from '../../../utils/types'

type UserGridProps = {
    users: Array<User>
}

const UserGrid:React.FC<UserGridProps> = ({ users }) => {
    return (
        <div className={styles.grid}>
            {users.map((element:User, index) => {
                return (
                    <div className={styles.user}>
                        <h1 className={styles.name}>{element.name}</h1>
                        <h2 className={styles.email}>{element.email}</h2>
                    </div>
                )
            })}
        </div>
    )
}

export default UserGrid
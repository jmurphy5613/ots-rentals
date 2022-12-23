import { useState } from 'react'
import styles from './UserGrid.module.css'
import { User } from '../../../utils/types'

type UserGridProps = {
    users: Array<User>
}

const UserGrid:React.FC<UserGridProps> = ({ users }) => {

    const deleteUserById = (index:number) => {
        
    }

    return (
        <div className={styles.grid}>
            {users.map((element:User, index) => {
                return (
                    <div key={index} className={styles.user}>
                        <div className={styles["remove-background"]}>
                            <h4 className={styles.remove}>x</h4>
                        </div>
                        <h1 className={styles.name}>{element.name}</h1>
                        <h2 className={styles.email}>{element.email}</h2>
                    </div>
                )
            })}
        </div>
    )
}

export default UserGrid
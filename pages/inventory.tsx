import styles from '../styles/Inventory.module.css'
import { useUser } from '@auth0/nextjs-auth0'
import { useEffect } from 'react'
import axios from 'axios'

const Inventory = () => {

    const { user, isLoading } = useUser()

    useEffect(() => {
    }, [isLoading])

    if(isLoading) return <div></div>

    return (
        <div className={styles.container}>

        </div>
    )
}

export default Inventory
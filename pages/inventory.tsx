import styles from '../styles/Inventory.module.css'
import { useUser } from '@auth0/nextjs-auth0'
import { useEffect, useState } from 'react'
import axios from 'axios'
import GearGrid from '../components/user-view/gear-grid/gear-grid'
import { Gear } from '../utils/types'

const Inventory = () => {

    const { user, isLoading } = useUser()

    const [checkoutGear, setCheckedoutGear] = useState<Array<Gear>>([])

    useEffect(() => {
        if(!user) return
        axios.get(`http://localhost:3002/gear/get-by-email/${user?.email}`).then(res => {
            setCheckedoutGear(res.data)
        })
    }, [isLoading])

    if(isLoading) return <div></div>

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Your gear ({checkoutGear.length})</h1>
            <GearGrid gear={checkoutGear} />
        </div>
    )
}

export default Inventory
import styles from '../styles/Search.module.css'
import GearGrid from '../components/user-view/gear-grid/gear-grid'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Gear } from '../utils/types'


const Search = () => {

    const [gear, setGear] = useState([])

    const fetchData = () => {
        axios.get('http://localhost:3002/gear/get-all').then(e => {
            setGear(e.data)
            console.log(e.data)
        })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <div className={styles.container}>
                <input className={styles.search} placeholder='Search all camera gear rentals' />
                <h2 className={styles["result-count"]}>All (2)</h2>
                <GearGrid gear={gear} />
            </div>
        </>

    )
}

export default Search
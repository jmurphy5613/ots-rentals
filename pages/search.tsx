import styles from '../styles/Search.module.css'
import GearGrid from '../components/gear-grid/gear-grid'


const Search = () => {
    return (
        <>
            <div className={styles.container}>
                <input className={styles.search} placeholder='Search all camera gear rentals' />
                <h2 className={styles["result-count"]}>All (2)</h2>
                <GearGrid />
            </div>
        </>

    )
}

export default Search
import styles from '../styles/Search.module.css'
import Navbar from '../components/navbar/Navbar'
import Filters from '../components/filters/filters'
import GearGrid from '../components/gear-grid/gear-grid'

const Search = () => {
    return (
        <>
            <Navbar numberOfItems={1} />
            <div className={styles.container}>
                <input className={styles.search} placeholder='Search all camera gear rentals' />
                {/* <div style={{ display: 'flex', width: '100%' }}>
                    <h2 className={styles["result-count"]}>All (1)</h2>
                </div> */}
                <h2 className={styles["result-count"]}>All (2)</h2>
                <GearGrid />
            </div>
        </>

    )
}

export default Search
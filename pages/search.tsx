import styles from '../styles/Search.module.css'
import Navbar from '../components/navbar/Navbar'

const Search = () => {
    return (
        <>
            <Navbar />
            <div className={styles.container}>
                <input className={styles.search} placeholder='Search all camera gear rentals' />


            </div>
        </>

    )
}

export default Search
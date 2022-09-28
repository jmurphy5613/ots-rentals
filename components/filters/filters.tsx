import styles from './filters.module.css';
import { GiSettingsKnobs } from 'react-icons/gi';


const Filters = () => {
    return (
        <div className={styles["container"]}>
            <h2 className={styles["filter-title"]}>Filters <GiSettingsKnobs className={styles["filter-icon"]} /></h2>
        </div>
    )
}

export default Filters
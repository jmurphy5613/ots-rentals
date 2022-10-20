import { useEffect } from "react"
import axios from 'axios'
import styles from './GearGrid.module.css'


type GearGridProps = {
    gear: Array<Object>
}

const GearGrid:React.FC<GearGridProps> = ({ gear }) => {

    return (
        <div className={styles.grid}>
            {gear.map((element, index) => {
                return (
                    <div className={styles["grid-item"]}>
                        
                    </div>
                )
            })}
        </div>
    )
}

export default GearGrid
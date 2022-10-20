import { useEffect } from "react"
import styles from './GearGrid.module.css'
import { BsFillPencilFill } from 'react-icons/bs'

type GearGridProps = {
    gear: Array<Gear>
}

type Gear = {
    id: string,
    picture: string,
    company: string,
    description: string,
    currentUserEmail: string,
    checkoutDate: number,
    returnDate: string,
    name: string
}

const GearGrid:React.FC<GearGridProps> = ({ gear }) => {

    return (
        <div className={styles.grid}>
            {gear.map((element:Gear, index) => {
                return (
                    <div className={styles["grid-item"]}>
                        <div className={styles.edit}>
                            <BsFillPencilFill  />
                        </div>
                        <img className={styles.image} src={element.picture} />
                        <h3 className={styles.name}>{element.name}</h3>
                    </div>
                )
            })}
        </div>
    )
}

export default GearGrid
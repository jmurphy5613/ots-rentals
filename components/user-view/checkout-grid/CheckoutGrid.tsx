import styles from './CheckoutGrid.module.css'
import { Gear } from '../../../utils/types'


type CheckoutGrid = {
    gear: Array<Gear>,
}

const CheckoutGrid:React.FC<CheckoutGrid> = ({ gear }) => {
    return (
        <div className={styles.grid}>
            {gear.map((element:Gear, index:number) => {
                return (
                    <div className={styles["grid-item"]}>
                        <img className={styles.image} src={element.picture} />
                        <h3 className={styles.name}>{element.name}</h3>
                    </div>
                )
            })}
        </div>
    )
}

export default CheckoutGrid
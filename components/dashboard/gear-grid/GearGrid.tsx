import styles from './GearGrid.module.css'
import { BsFillPencilFill } from 'react-icons/bs'
import { Gear } from '../../../utils/types'

type GearGridProps = {
    gear: Array<Gear>,
    setGearSelected: React.Dispatch<React.SetStateAction<number>>,
    showPopup: React.Dispatch<React.SetStateAction<boolean>>
}

const GearGrid:React.FC<GearGridProps> = ({ gear, setGearSelected, showPopup }) => {

    return (
        <div className={styles.grid}>
            {gear.map((element:Gear, index) => {
                return (
                    <div className={styles["grid-item"]}>
                        <div className={styles.edit} onClick={() => {
                            setGearSelected(index)
                            showPopup(true)
                        }}>
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
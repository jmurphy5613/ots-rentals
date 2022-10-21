import styles from './EditGearPopup.module.css'
import { Gear } from '../../../utils/types'
import { useState } from 'react'


type EditGearPopupProps = {
    currentGear: Gear
} 

const EditGearPopup:React.FC<EditGearPopupProps> = ({ currentGear }) => {


    const [name, setName] = useState(currentGear.name)
    const [picture, setPicture] = useState(currentGear.picture)
    const [price, setPrice] = useState(currentGear.price)
    const [description, setDescription] = useState(currentGear.description)
    const [company, setCompany] = useState(currentGear.company)

    return (
        <div className={styles["popup-container"]}>
            <div className={styles.form}>
                <input className={styles.input} value={name} placeholder='Name' onChange={e => setName(e.target.value)} />
                <input className={styles.input} value={picture} placeholder='Picture' onChange={e => setPicture(e.target.value)} />
                <input className={styles.input} value={price} placeholder='Price/week' onChange={e => setPrice(e.target.value)} />
                <input className={styles.input} value={description} placeholder='Description' onChange={e => setDescription(e.target.value)} />
                <input className={styles.input} value={company} placeholder='Company' onChange={e => setCompany(e.target.value)} />
                <h2 className={styles.exit}>X</h2>
            </div>
        </div>
    )
}

export default EditGearPopup
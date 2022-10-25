import styles from './EditGearPopup.module.css'
import { Gear } from '../../../utils/types'
import { useState } from 'react'
import axios from 'axios'


type EditGearPopupProps = {
    currentGear: Gear,
    showPopup: React.Dispatch<React.SetStateAction<boolean>>
} 

const EditGearPopup:React.FC<EditGearPopupProps> = ({ currentGear, showPopup }) => {


    const updateIndex = async (newValue:Gear) => {
        axios.post(`http://localhost:3002/gear/update/${currentGear.id}`, {
            name: newValue.name,
            picture: newValue.picture,
            price: newValue.price,
            description: newValue.description,
            currentUserEmail: newValue.currentUserEmail,
            returnDate: newValue.returnDate,
            checkoutData: newValue.checkoutDate,
            company: newValue.company
        })
    }


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
                <button className={styles.update} onClick={() => {
                    updateIndex({
                        name: name,
                        id: currentGear.id,
                        picture: picture,
                        company: company,
                        description: description,
                        currentUserEmail: currentGear.currentUserEmail,
                        checkoutDate: currentGear.checkoutDate,
                        returnDate: currentGear.returnDate,
                        price: price
                    })
                    showPopup(false)
                }}>Update</button>

                <h2 onClick={() => {
                    showPopup(false)
                }} className={styles.exit}>X</h2>
            </div>
        </div>
    )
}

export default EditGearPopup
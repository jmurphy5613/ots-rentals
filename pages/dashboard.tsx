import { useEffect, useState } from 'react'
import styles from '../styles/Dashboard.module.css'
import axios from 'axios'
import GearGrid from '../components/dashboard/gear-grid/GearGrid'
import EditGearPopup from '../components/dashboard/edit-gear-popup/EditGearPopup'
import { IoMdRefreshCircle } from 'react-icons/io/index'
import UserManagement from '../components/dashboard/user-manager/UserManager'

const Dashboard = () => {

    const fetchGear = () => {
        axios.get('http://localhost:3002/gear/get-all').then(e => {
            setGear(e.data)
        })
    }

    useEffect(() => {
        fetchGear()
    }, [])


    //fields
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [company, setCompany] = useState('')
    const [picture, setPicture] = useState('')

    //data
    const [gear, setGear] = useState([])

    //popup state
    const [showPopup, setShowPopup] = useState(false)
    const [gearSelected, setGearSelected] = useState<number>(-1)

    useEffect(() => {
        if(showPopup === false) {
            fetchGear()
        }
    }, [showPopup])

    return (
        <div className={styles.container}>
            <div className={styles['add-gear-form']}>
                <input className={styles.input} value={name} placeholder='Name' onChange={e => setName(e.target.value)} />
                <input className={styles.input} value={picture} placeholder='Picture' onChange={e => setPicture(e.target.value)} />
                <input className={styles.input} value={price} placeholder='Price/week' onChange={e => setPrice(e.target.value)} />
                <input className={styles.input} value={description} placeholder='Description' onChange={e => setDescription(e.target.value)} />
                <input className={styles.input} value={company} placeholder='Company' onChange={e => setCompany(e.target.value)} />
                <div className={styles.add} onClick={() => {
                    axios.post('http://localhost:3002/gear/add', {
                        price: price,
                        name: name,
                        description: description,
                        company: company,
                        picture: picture
                    })
                    setPrice('')
                    setPicture('')
                    setCompany('')
                    setDescription('')
                    setName('')
                }}>+</div>
            </div>
            <div className={styles.title}>
                <h1 className={styles["gear-label"]}>All Gear  ({gear.length})</h1>
                <div className={styles.refresh}>
                    <IoMdRefreshCircle onClick={() => {
                        fetchGear()
                    }} />
                </div>
            </div>
            <GearGrid showPopup={setShowPopup} setGearSelected={setGearSelected} gear={gear} />
            {showPopup && <EditGearPopup currentGear={gear[gearSelected]} showPopup={setShowPopup} />}

            <UserManagement />
        </div>
    )
}

export default Dashboard
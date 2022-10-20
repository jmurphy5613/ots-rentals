import { useEffect, useState } from 'react'
import styles from '../styles/Dashboard.module.css'
import axios from 'axios'
import GearGrid from '../components/dashboard/gear-grid/GearGrid'

const fakeData = [
    {
        id: 0,
        title: 'Sony a6000',
        company: 'Sony',
        price: 100,
        image: 'https://www.dpreview.com/files/p/E~products/sony_a6000/shots/068c499f89b049b5a3d26be9510f7c27.png',
        desciption: 'Test the limits of your creativity with the premium mirrorless DSLR that’s focused on speed. Every artistic shot you take—from fast-action to candid—benefits from 24.3MP detail and the world’s fastest auto focus6. '
    },
    {
        id: 1,
        title: 'Canon 5D Mark IV',
        company: 'Canon',
        price: 100,
        image: 'https://asia.canon/media/migration/shared/live/products/EN/eos-5d-mk-iv-ef24-70mm-b1.png',
        desciption: 'The EOS 5D Mark IV camera’s iSA (Intelligent Scene Analysis) system has a dedicated RGB+IR light sensor with an approximately 150,000-pixel resolution to determine and maintain proper exposure, especially in varying light sources with moving subjects.'
    }
]

const Dashboard = () => {

    const fetchGear = () => {
        axios.get('http://localhost:3002/gear/get-all').then(e => {
            setGear(e.data)
            console.log(e.data)
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
            <h1 className={styles["gear-label"]}>All Gear ({gear.length})</h1>
            <GearGrid gear={gear} />
        </div>
    )
}

export default Dashboard
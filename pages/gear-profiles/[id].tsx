import Navbar from "../../components/navbar/Navbar"
import styles from '../../styles/GearProfiles.module.css'
import { useRouter } from "next/router"
import { useState } from "react"


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

const GearProfiles = () => {

    const router = useRouter()
    const { id } = router.query

    const [numberOfWeeks, setNumberOfWeeks] = useState(0)

    return (
        <>
            <Navbar />
            <div className={styles.container}>
                <div className={styles.images}>
                    <div className={styles["image-container"]}>
                        <img className={styles["current-image"]} src={fakeData[id].image} />
                    </div>
                </div>
                <div className={styles.description}>
                    <h3 className={styles.company}>{fakeData[id].company}</h3>
                    <h1 className={styles.title}>{fakeData[id].title}</h1>
                    <h4 className={styles["item-description"]}>{fakeData[id].desciption}</h4>
                    <h2 className={styles.price}>${fakeData[id].price}/week</h2>
                    <div style={{ display: 'flex' }}>
                        <div className={styles["quantity-select"]}>
                            <button className={styles.subtract} onClick={() => {if(numberOfWeeks != 0) { setNumberOfWeeks(numberOfWeeks-1)}}}>-</button>
                            <h4 className={styles.number}>{numberOfWeeks}</h4>
                            <button className={styles.add} onClick={() => setNumberOfWeeks(numberOfWeeks+1)}>+</button>
                        </div>
                        <button className={styles["add-to-cart"]}>Add To Cart</button>  
                    </div>

                </div>
            </div>
        </>
    )
}

export default GearProfiles
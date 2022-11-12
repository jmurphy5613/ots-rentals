// @ts-nocheck

import styles from '../../styles/GearProfiles.module.css'
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { setCartItems } from '../../redux/features/cart'
import axios from 'axios'


const GearProfiles = () => {

    const router = useRouter()
    const cart = useSelector((state: any) => state.cart.value)
    const dispatch = useDispatch()


    const [numberOfWeeks, setNumberOfWeeks] = useState(0)

    const [currentCamera, setCurrentCamera] = useState({
        id: 0,
        name: '',
        company: '',
        price: 0,
        image: '',
        descirption: '',
        picture: ''
    })

    useEffect(() => {
        const { id } = router.query
        if(!id) return;

        axios.get(`http://localhost:3002/gear/get-by-id/${id}`).then(e => {
            setCurrentCamera(e.data)
        })

    }, [router.isReady])

    if(!currentCamera) return <div></div>

    return (
        <>
            <h2 className={styles.back} onClick={() => {
                router.push('/search')
            }}>{`<- Search`}</h2>
            <div className={styles.container}>
                <div className={styles.images}>
                    <div className={styles["image-container"]}>
                        <img className={styles["current-image"]} src={currentCamera.picture} /> 
                    </div>
                </div>
                <div className={styles.description}>
                    <h3 className={styles.company}>{currentCamera.company}</h3>
                    <h1 className={styles.title}>{currentCamera.name}</h1>
                    <h4 className={styles["item-description"]}>{currentCamera.description}</h4>
                    <h2 className={styles.price}>${currentCamera.price}/week</h2>
                    <div style={{ display: 'flex' }}>
                        <div className={styles["quantity-select"]}>
                            <button className={styles.subtract} onClick={() => {if(numberOfWeeks != 0) { setNumberOfWeeks(numberOfWeeks-1)}}}>-</button>
                            <h4 className={styles.number}>{numberOfWeeks}</h4>
                            <button className={styles.add} onClick={() => setNumberOfWeeks(numberOfWeeks+1)}>+</button>
                        </div>
                        <button className={styles["add-to-cart"]} onClick={() => {

                            if(numberOfWeeks === 0) return;

                            /* 
                            Cart items will follow this format:
                            {
                                id:
                                name:
                                number of weeks:
                            }
                            */
                            const currentItems:Array<Object> = cart.items
                            const currentItem = {
                                gear: currentCamera,
                                numberOfWeeks: numberOfWeeks
                            }
                            dispatch(setCartItems({ items: [...currentItems, currentItem] }))

                        }}>Add To Cart</button>  
                    </div>

                </div>
            </div>
        </>
    )
}

export default GearProfiles
import styles from '../styles/Checkout.module.css'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { Gear, User } from '../utils/types'
import CheckoutGrid from '../components/user-view/checkout-grid/CheckoutGrid'
import { useUser } from '@auth0/nextjs-auth0'
import axios from 'axios'
import { useEffect, useState } from 'react'


const Checkout = () => {

    const { user, isLoading } = useUser()

    const [isAuthorized, setIsAuthorized] = useState(false)

    const router = useRouter()

    const cart = useSelector((state: any) => state.cart.value)

    const createGearArray = () => {
        const gear:Array<Gear> = []
        for(const items of cart.items) {
            gear.push(items.gear)
        }
        return gear
    }

    const handleOrders = () => {
        const gear = createGearArray()

        for(const item of gear) {
            console.log(item)
        }
    }

    useEffect(() => {
        if(!user) return
        axios.get(`http://localhost:3002/user/get-by-email/${user.email}`).then(res => {
            if(res.data) {
                console.log("hey")
                setIsAuthorized(true)
            }
        })
    }, [user]) 

    if(isLoading) return <div></div>

    return (
        <div className={styles.container}>
            <h2 className={styles.back} onClick={() => {
                router.push('/search')
            }}>{`<- Other Gear`}</h2>
            <h1 className={styles["items-label"]}>Items ({cart.items.length})</h1>
            <CheckoutGrid gear={createGearArray()} />

            
            {
            isAuthorized 
                ? 
                    <div className={styles["code-container"]}>
                        <button onClick={() => {
                            handleOrders()
                        }} className={styles.redeem}>Checkout</button>
                    </div> 
                :
                    <h2 className={styles.warning}>You are not permited to checkout these items.</h2>
            }
        </div>
    )
}

export default Checkout
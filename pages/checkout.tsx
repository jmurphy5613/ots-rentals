import styles from '../styles/Checkout.module.css'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { Gear } from '../utils/types'
import CheckoutGrid from '../components/user-view/checkout-grid/CheckoutGrid'


const Checkout = () => {

    const router = useRouter()

    const cart = useSelector((state: any) => state.cart.value)

    const createGearArray = () => {
        const gear:Array<Gear> = []
        for(const items of cart.items) {
            gear.push(items.gear)
        }
        return gear
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.back} onClick={() => {
                router.push('/search')
            }}>{`<- Other Gear`}</h2>
            <h1 className={styles["items-label"]}>Items ({cart.items.length})</h1>
            <CheckoutGrid gear={createGearArray()} />
            <div className={styles["code-container"]}>
                <input className={styles.code} placeholder="Enter Code" />
                <button className={styles.redeem}>Redeem</button>
            </div>
        </div>
    )
}

export default Checkout
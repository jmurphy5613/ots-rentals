import styles from './shopping-cart.module.css'
import { useSelector } from 'react-redux'
import { CartGear } from '../../../utils/types'

type shoppingCartProps = {
    setShowCart: (value: boolean) => void
}

const ShoppingCart:React.FC<shoppingCartProps> = ({setShowCart}) => {

    const cart = useSelector((state: any) => state.cart.value)
    console.log(cart)


    return (
        <div className={styles.cart}>
            <div className={styles.content}>
                <div className={styles.header}>
                    <h4 className={styles["cart-quantity"]}>Cart ({cart.items.length})</h4>
                    <h4 className={styles.exit} onClick={() => {
                        setShowCart(false)
                    }}>x</h4>
                </div>

                {cart.items.map((element:CartGear, index:number) => {
                    return (
                        <div className={styles["gear-item"]}>
                            <img className={styles.preview} src={element.gear.picture} />
                            <h3 className={styles.name}>{element.gear.name}</h3>
                            <h4 className={styles.remove}>x</h4>
                        </div>
                    )
                })}

                <div className={styles.bottom}>
                    <button className={styles.checkout}>Go To Checkout</button>
                </div>
            </div>
        </div>
    )
}

export default ShoppingCart
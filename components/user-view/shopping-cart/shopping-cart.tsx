import styles from './shopping-cart.module.css'
import { useSelector } from 'react-redux'
import { CartGear } from '../../../utils/types'
import { useDispatch } from 'react-redux'
import { setCartItems } from '../../../redux/features/cart'
import { useRouter } from 'next/router'

type shoppingCartProps = {
    setShowCart: (value: boolean) => void
}

const ShoppingCart:React.FC<shoppingCartProps> = ({setShowCart}) => {

    const router = useRouter()

    const cart = useSelector((state: any) => state.cart.value)
    const dispatch = useDispatch()

    const removeCartItemById = (index:number) => {
        const currentCartItems = cart.items
        const copy = [...currentCartItems]
        copy.splice(index, 1)
        dispatch(setCartItems({items: copy }))
    }   

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
                            <h3 className={styles.name}>{element.gear.name} ({element.numberOfWeeks} weeks)</h3>
                            <h4 className={styles.remove} onClick={() => {
                                removeCartItemById(index)
                            }}>x</h4>
                        </div>
                    )
                })}

                <div className={styles.bottom}>
                    <button className={styles.checkout} onClick={() => {
                        router.push('/checkout')
                        setShowCart(false)
                    }}>Go To Checkout</button>
                </div>
            </div>
        </div>
    )
}

export default ShoppingCart
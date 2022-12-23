import styles from './CheckoutGrid.module.css'
import { CartGear } from '../../../utils/types'
import { useDispatch, useSelector } from 'react-redux'
import { setCartItems } from '../../../redux/features/cart'


type CheckoutGrid = {
    gear: Array<CartGear>,
}

const CheckoutGrid:React.FC<CheckoutGrid> = ({ gear }) => {

    const cart = useSelector((state: any) => state.cart.value)

    const dispatch = useDispatch()

    const deleteCartIndex = (index:number) => {
        const currentCartItems = cart.items
        const copy = [...currentCartItems]
        copy.splice(index, 1)
        dispatch(setCartItems({items: copy }))

    }

    return (
        <div className={styles.grid}>
            {gear.map((element:CartGear, index:number) => {
                return (
                    <div key={index} className={styles["grid-item"]}>
                        <div onClick={() => {
                            deleteCartIndex(index)
                        }} className={styles["red-circle"]}>
                            <h2 className={styles.x}>x</h2>
                        </div>
                        <img className={styles.image} src={element.gear.picture} />
                        <h3 className={styles.name}>{element.gear.name}</h3>
                        <h4 className={styles.weeks}>{element.numberOfWeeks} week</h4>
                        {/* <div className={styles["quantity-select"]}>
                            <button className={styles.subtract}>-</button>
                            <h4 className={styles.number}>1</h4>
                            <button className={styles.add}>+</button>
                        </div> */}
                    </div>
                )
            })}
        </div>
    )
}

export default CheckoutGrid
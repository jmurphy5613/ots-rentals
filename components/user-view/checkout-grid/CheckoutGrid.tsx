import styles from './CheckoutGrid.module.css'
import { Gear } from '../../../utils/types'
import { useDispatch, useSelector } from 'react-redux'
import { setCartItems } from '../../../redux/features/cart'


type CheckoutGrid = {
    gear: Array<Gear>,
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
            {gear.map((element:Gear, index:number) => {
                return (
                    <div className={styles["grid-item"]}>
                        <div onClick={() => {
                            deleteCartIndex(index)
                        }} className={styles["red-circle"]}>
                            <h2 className={styles.x}>x</h2>
                        </div>
                        <img className={styles.image} src={element.picture} />
                        <h3 className={styles.name}>{element.name}</h3>
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
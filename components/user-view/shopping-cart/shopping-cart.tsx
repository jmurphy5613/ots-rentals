import styles from './shopping-cart.module.css'

type shoppingCartProps = {
    setShowCart: (value: boolean) => void
}

const ShoppingCart:React.FC<shoppingCartProps> = ({setShowCart}) => {

    return (
        <div className={styles.cart}>
            <div className={styles.header}>
                <h4 className={styles["cart-quantity"]}>Cart (1)</h4>
                <h4 className={styles.exit} onClick={() => {
                    setShowCart(false)
                }}>x</h4>
            </div>
        </div>
    )
}

export default ShoppingCart
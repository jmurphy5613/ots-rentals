import styles from './Navbar.module.css'
import { BsCartFill } from 'react-icons/bs'
import { useState } from 'react'
import ShoppingCart from '../shopping-cart/shopping-cart'

type NavbarProps = {
    numberOfItems: number
}

const Navbar:React.FC<NavbarProps> = ({ numberOfItems }) => {

    const [showCart, setShowCart] = useState(false)

    return (
        <div className={styles.container}>
            <div className={styles["main-content-left"]}>
                <img src='/logo.png' className={styles.logo} />
                <div style={{ position: 'relative' }}>
                    <BsCartFill className={styles.cart} onClick={() => {
                        setShowCart(true)
                    }} />
                    {numberOfItems > 0 && <h1 className={styles.number}>{numberOfItems}</h1>}
                    {showCart && <ShoppingCart setShowCart={setShowCart} />}
                </div>

            </div>

        </div>
    )
}

export default Navbar;

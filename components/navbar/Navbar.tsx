import styles from './Navbar.module.css'
import { BsCartFill } from 'react-icons/bs'
import { useState } from 'react'
import ShoppingCart from '../shopping-cart/shopping-cart'


const Navbar = () => {

    const [showCart, setShowCart] = useState(false)

    console.log(showCart)

    return (
        <div className={styles.container}>
            <div className={styles["main-content-left"]}>
                <img src='/logo.png' className={styles.logo} />
                <div style={{ position: 'relative' }}>
                    <BsCartFill className={styles.cart} onClick={() => {
                        setShowCart(true)
                    }} />
                    <h1 className={styles.number}>1</h1>
                    {showCart && <ShoppingCart setShowCart={setShowCart} />}
                </div>

            </div>

        </div>
    )
}

export default Navbar;

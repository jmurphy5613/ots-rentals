import styles from './Navbar.module.css'
import { BsCartFill } from 'react-icons/bs'
import { useEffect, useState } from 'react'
import ShoppingCart from '../shopping-cart/shopping-cart'
import { useRouter } from 'next/router'

import { useSelector } from 'react-redux'

const Navbar = () => {

    const [showCart, setShowCart] = useState(false)

    const router = useRouter()

    useEffect(() => {
        const cartItems = localStorage.getItem('items')
        console.log(cartItems)
    }, [router.isReady])

    const cart = useSelector((state:any) => state.cart.value)

    return (
        <div className={styles.container}>
            <div className={styles["main-content-left"]}>
                <img src='/logo.png' className={styles.logo} />
                <div style={{ position: 'relative' }}>
                    <BsCartFill className={styles.cart} onClick={() => {
                        setShowCart(true)
                    }} />
                    {cart.items.length > 0 && <h1 className={styles.number}>{cart.items.length}</h1>}
                    {showCart && <ShoppingCart setShowCart={setShowCart} />}
                </div>

            </div>

        </div>
    )
}

export default Navbar;

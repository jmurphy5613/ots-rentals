import styles from './Navbar.module.css'
import { BsCartFill } from 'react-icons/bs'
import { useEffect, useState } from 'react'
import ShoppingCart from '../shopping-cart/shopping-cart'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { useUser } from '@auth0/nextjs-auth0'

const Navbar = () => {

    const { user } = useUser()

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
                <div className={styles["right-container"]}>
                    
                    {user 
                    ? 
                        <div>
                            <h2 className={styles.username}>{user.name}</h2>
                            <button onClick={() => {
                                router.push('/api/auth/logout')
                            }}>Logout</button> 
                        </div>
                    : 
                        <button onClick={() => {
                            router.push('/api/auth/login')
                        }}>Login</button>
                    }


                    <div className={styles["cart-container"]}>
                        <BsCartFill className={styles.cart} onClick={() => {
                            setShowCart(true)
                        }} />
                        {cart.items.length > 0 && <h1 className={styles.number}>{cart.items.length}</h1>}
                        {showCart && <ShoppingCart setShowCart={setShowCart} />}
                    </div>
                </div>

                
            </div>

        </div>
    )
}

export default Navbar;

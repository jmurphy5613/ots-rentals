import styles from './Navbar.module.css'
import { BsCartFill } from 'react-icons/bs'


const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles["main-content-left"]}>
                <img src='/logo.png' className={styles.logo} />
                <div style={{ position: 'relative' }}>
                    <BsCartFill className={styles.cart} />
                    <h1 className={styles.number}>1</h1>
                </div>

            </div>

        </div>
    )
}

export default Navbar;

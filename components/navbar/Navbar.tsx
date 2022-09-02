import styles from './Navbar.module.css'


const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles["main-content"]}>
                <img src='/logo.png' className={styles.logo} />
            </div>
        </div>
    )
}

export default Navbar;

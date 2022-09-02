import styles from './DetailBoxes.module.css'


const DetailBoxes = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles["reason-title"]}>Renting gear made easy</h1>
            <div style={{ display: 'flex' }}>
                <div className={styles.reason}>
                    <span style={{ display: 'flex' }}>
                        <h2 className={styles.number}>1</h2>
                        <h3>Select Dates</h3>
                    </span>
                    <h5>Real-time inventory</h5>
                    <h5>Real-time inventory</h5>
                </div>
                <div className={styles.reason}>
                    <span style={{ display: 'flex' }}>
                        <h2 className={styles.number}>2</h2>
                        <h3>Gear Arrives</h3>
                    </span>
                    <h5>Real-time inventory</h5>
                    <h5>Real-time inventory</h5>
                </div>
                <div className={styles.reason}>
                    <span style={{ display: 'flex' }}>
                        <h2 className={styles.number}>3</h2>
                        <h3>Shoot</h3>
                    </span>
                    <h5>Real-time inventory</h5>
                    <h5>Real-time inventory</h5>
                </div>
                <div className={styles.reason}>
                    <span style={{ display: 'flex' }}>
                        <h2 className={styles.number}>4</h2>
                        <h3>Easy Returns</h3>
                    </span>
                    <h5>Real-time inventory</h5>
                    <h5>Real-time inventory</h5>
                </div>
            </div>

        </div>
    )
}

export default DetailBoxes;
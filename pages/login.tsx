

const Login = () => {
    return (
        <div className={styles.container}>
            <div className={styles["login-card"]}>
                <h1 className={styles["login-title"]}>Login</h1>
                <input className={styles.password} type="text" placeholder="Password" />
                <button className={styles["login-button"]}>Login</button>
            </div>
        </div>
    )
}

export default Login;
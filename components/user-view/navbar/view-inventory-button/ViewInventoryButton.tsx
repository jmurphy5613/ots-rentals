import { useRouter } from "next/router"
import styles from './ViewInventoryButton.module.css'

const ViewInvesntoryButton = () => {

    const router = useRouter()

    return (
        <button onClick={() => {
            router.push('/inventory')
        }} className={styles.button}>Your Gear</button>
    )
}

export default ViewInvesntoryButton
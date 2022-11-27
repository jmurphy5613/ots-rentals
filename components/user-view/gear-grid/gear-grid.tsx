import styles from './gear-grid.module.css';
import { useRouter } from 'next/router';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { Gear } from '../../../utils/types';

type GearGridProps = {
    gear: Array<Gear>
}

const GearGrid:React.FC<GearGridProps> = ({ gear }) => {

    const router = useRouter()

    const cart = useSelector((state: any) => state.cart.value)

    const inCart = (index:number) => {
        for(const item of cart.items) {
            if(item === index) return true
        }
        return false
    }

    return (
        <div className={styles["gear-grid"]}>
            {gear.map((item, index) => {
                return (
                    <div key={index} className={styles["gear-card"]} onClick={() => {
                        router.push(`/gear-profiles/${item.id}`)
                    }}>
                        <div className={styles["image-container"]}>
                            <img className={styles["gear-image"]} src={item.picture} />
                        </div>
                        <div className={styles["gear-titles"]}>
                            <h4 className={styles.company}>{item.company}</h4>
                            <h2 className={styles["gear-title-main"]}>{item.name}</h2>
                            {item.returnDate < Date.now()
                                ? 
                                    <button className={styles["add-to-cart"]}>In Stock</button> 
                                : 
                                    <button disabled className={styles["add-to-cart"]}>Out of Stock</button>
                            }
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default GearGrid
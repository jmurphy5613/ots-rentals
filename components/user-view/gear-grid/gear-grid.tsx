import styles from './gear-grid.module.css';
import { useRouter } from 'next/router';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setCartItems } from '../../../redux/features/cart';


const fakeData = [
    {
        title: 'Sony a6000',
        company: 'Sony',
        price: 100,
        image: 'https://www.dpreview.com/files/p/E~products/sony_a6000/shots/068c499f89b049b5a3d26be9510f7c27.png'
    },
    {
        title: 'Canon 5D Mark IV',
        company: 'Canon',
        price: 100,
        image: 'https://asia.canon/media/migration/shared/live/products/EN/eos-5d-mk-iv-ef24-70mm-b1.png'
    }
]

const GearGrid = () => {

    const router = useRouter()

    const cart = useSelector((state: any) => state.cart.value)
    const dispatch = useDispatch()



    const inCart = (index:number) => {
        for(const item of cart.items) {
            if(item === index) return true
        }
        return false
    }

    return (
        <div className={styles["gear-grid"]}>
            {fakeData.map((item, index) => {
                return (
                    <div key={index} className={styles["gear-card"]} onClick={() => {
                        router.push(`/gear-profiles/${index}`)
                    }}>
                        <div className={styles["image-container"]}>
                            <img className={styles["gear-image"]} src={item.image} />
                        </div>
                        <div className={styles["gear-titles"]}>
                            <h4 className={styles.company}>{item.company}</h4>
                            <h2 className={styles["gear-title-main"]}>{item.title}</h2>
                            {!inCart(index) 
                                ? 
                                    <button className={styles["add-to-cart"]} onClick={() => {
                                        dispatch(setCartItems({ items: cart.items.concat(index) }))
                                    }}>Add To Cart</button> 
                                : 
                                    <button disabled className={styles["add-to-cart"]}>Add To Cart</button>
                            }
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default GearGrid
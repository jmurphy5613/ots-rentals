import styles from "../styles/Checkout.module.css";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { CartGear } from "../utils/types";
import CheckoutGrid from "../components/user-view/checkout-grid/CheckoutGrid";
import { useUser } from "@auth0/nextjs-auth0";
import axios from "axios";
import { useEffect, useState } from "react";
import { setCartItems } from "../redux/features/cart";
import StripeContainer from "../components/stripe/stripe-container/StripeContainer";

const Checkout = () => {
    const { user, isLoading } = useUser();

    const [isAuthorized, setIsAuthorized] = useState(false);

    const router = useRouter();

    const dispatch = useDispatch();
    const cart = useSelector((state: any) => state.cart.value);

    const createGearArray = () => {
        const gear: Array<CartGear> = [];
        for (const items of cart.items) {
            gear.push(items);
        }
        return gear;
    };

    const clearGear = () => {
        dispatch(setCartItems({ items: [] }));
    };

    const pushToInventory = () => {
        router.push("/inventory");
    };

    const handleOrders = () => {
        const gear = createGearArray();

        for (const item of gear) {
            if (item.gear.returnDate < Date.now()) {
                axios.post(
                    `http://localhost:3002/gear/update/${item.gear.id}`,
                    {
                        price: item.gear.price,
                        picture: item.gear.picture,
                        company: item.gear.company,
                        name: item.gear.name,
                        description: item.gear.description,
                        currentUserEmail: user?.email,
                        checkoutDate: Date.now(),
                        returnDate: 604800000 * item.numberOfWeeks + Date.now(),
                    }
                );
            }
        }
        clearGear()
        setTimeout(() => pushToInventory(), 500);
    };

    useEffect(() => {
        if (!user) return;
        axios
            .get(`http://localhost:3002/user/get-by-email/${user.email}`)
            .then((res) => {
                if (res.data) {
                    setIsAuthorized(true);
                }
            });
    }, [user]);

    if (isLoading) return <div></div>;

    return (
        <div className={styles.container}>
            <h2
                className={styles.back}
                onClick={() => {
                    router.push("/search");
                }}
            >{`<- Other Gear`}</h2>
            <h1 className={styles["items-label"]}>
                Items ({cart.items.length})
            </h1>
            <CheckoutGrid gear={createGearArray()} />


            {isAuthorized ? (
                <StripeContainer handleOrders={handleOrders} />

                // <div className={styles["code-container"]}>
                //     <button
                //         onClick={() => {
                //             handleOrders();
                //             clearGear();
                //             
                //         }}
                //         className={styles.redeem}
                //     >
                //         Checkout
                //     </button>
                // </div>
            ) : (
                <h2 className={styles.warning}>
                    You are not permited to checkout these items.
                </h2>
            )}
        </div>
    );
};

export default Checkout;

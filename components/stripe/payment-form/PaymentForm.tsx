import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import { StripeCardElementOptions } from "@stripe/stripe-js";
import axios from "axios"
import { FormEvent, useState } from "react"
import styles from './PaymentForm.module.css'

const CARD_OPTIONS:StripeCardElementOptions = {
    iconStyle: "solid",
    style: {
        base: {
            iconColor: "#c4f0ff",
            color: "#fff",
            fontWeight: 500,
            fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
            fontSize: "16px",
            fontSmoothing: "antialiased",
            ":-webkit-autofill": { color: "#fce883" },
            "::placeholder": { color: "#87bbfd" },
        },
        invalid: {
            iconColor: "#ffc7ee",
            color: "#ffc7ee",
        },
    }
};

interface PaymentFormProps {
    handleOrders: () => void
}

const PaymentForm:React.FC<PaymentFormProps> = ({ handleOrders }) => {

    const [success, setSuccess] = useState(false)

    const stripe = useStripe()
    const elements = useElements()

    const handleSubmit = async (e:FormEvent) => {
        e.preventDefault()

        const card = elements?.getElement(CardElement);
        if(!card) return
        const payment = await stripe?.createPaymentMethod({
            type: "card",
            card: card,
        });




        if(!payment?.error) {
            try {
                const id = payment?.paymentMethod.id
                await axios.post("http://localhost:3002/payments/create-payment",  {
                    amount: 1000,
                    id
                }).then(e => {
                    if(e.data.success) {
                        setSuccess(true)
                        handleOrders()
                    }
                })
            } catch(err) {
                console.log(err)
            }

        } else {
            console.log(payment.error)
        }

    }

    if(success) {
        return (
            <div>
                <h2>Payment Complete!</h2>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit}>
            <fieldset className={styles.FormGroup}>
                <div className={styles.FormRow}>
                    <CardElement className={styles.StripeElement} options={CARD_OPTIONS} />
                </div>
            </fieldset>
            <button className={styles.button}>Pay</button>
        </form>
    )
}

export default PaymentForm
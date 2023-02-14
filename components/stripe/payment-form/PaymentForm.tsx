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


const PaymentForm = () => {

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
                await axios.post("http://localhost:3001/payment/create-payment",  {
                    amount: 1000,
                    id
                }).then(e => {
                    if(e.data.success) {
                        setSuccess(true)
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
            <fieldset className="FormGroup">
                <div className="FormRow">
                    <CardElement options={CARD_OPTIONS} />
                </div>
            </fieldset>
            <button>Pay</button>
        </form>
    )
}

export default PaymentForm
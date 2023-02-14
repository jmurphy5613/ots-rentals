import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import axios from "axios"
import { useState } from "react"

const PaymentForm = () => {

    const [success, setSuccess] = useState(false)

    const stripe = useStripe()
    const elements = useElements()

    const handleSubmit = async (e:Event) => {
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

    return (
        <form>
            <fieldset className="FormGroup">
                <div className="FormRow">
                    <CardElement options={} />
                </div>
            </fieldset>
            <button>Pay</button>
        </form>
    )
}

export default PaymentForm
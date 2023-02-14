import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import { stripePublicKey } from "../../../utils/constants"
import PaymentForm from "../payment-form/PaymentForm"

const stripeTestPromise = loadStripe(stripePublicKey)

const StripeContainer = () => {


    return (
        <Elements stripe={stripeTestPromise}>
            <PaymentForm />
        </Elements>
    )
}

export default StripeContainer
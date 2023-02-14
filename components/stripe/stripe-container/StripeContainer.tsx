import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import { stripePublicKey } from "../../../utils/constants"

const stripeTestPromise = loadStripe(stripePublicKey)

const StripeContainer = () => {


    return (
        <Elements stripe={stripeTestPromise}>

        </Elements>
    )
}

export default StripeContainer
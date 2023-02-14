import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import { stripePublicKey } from "../../../utils/constants"
import PaymentForm from "../payment-form/PaymentForm"

const stripeTestPromise = loadStripe(stripePublicKey)

interface StripeContainerProps {
    handleOrders: () => void
}

const StripeContainer:React.FC<StripeContainerProps> = ({ handleOrders }) => {


    return (
        <Elements stripe={stripeTestPromise}>
            <PaymentForm handleOrders={handleOrders} />
        </Elements>
    )
}

export default StripeContainer
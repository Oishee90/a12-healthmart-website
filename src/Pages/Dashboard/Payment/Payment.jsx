import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import ChekoutFrom from "./ChekoutFrom";
import SectionTitle from "../../SectionTitle";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)

const Payment = () => {
    return (
        <div>
        <SectionTitle subHeading="please process" heading="Payment"></SectionTitle>
        <h2 className="text-3xl"> Welcome to the Payment Page of HealthMart! </h2>
        <Elements stripe={stripePromise}>
           <ChekoutFrom></ChekoutFrom>
        </Elements>
    </div>
    );
};

export default Payment;
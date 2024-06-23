
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import './CheckoutForm.css'
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import useCart from "../../../hook/useCart";
import UseAthenticate from "../../../hook/UseAthenticate";
const ChekoutFrom = () => {
  const stripe = useStripe();
  const [localCart, setLocalCart] = useState([]);
  const [clientSecret, setClientSecret] = useState('')
  const [error,setError] = useState('')
  const elements = useElements();
  const axiosSecure = useAxiosSecure()
  const {user} = UseAthenticate()
  const [ cart ] =useCart()
  const totalPrice = localCart.reduce((total, item) => total + item.pricePerUnit * item.quantity, 0);
   
  useEffect(() => {
    // Initialize localCart with default quantity of 1 if not present
    const initializedCart = cart.map(item => ({
      ...item,
      quantity: item.quantity || 1,
    }));
    setLocalCart(initializedCart);
  }, [cart]);
  useEffect(() => {
    if (totalPrice > 0) {
        axiosSecure.post('/create-payment-intent', { price:totalPrice })
            .then(res => {
                console.log(res.data.clientSecret)
                setClientSecret(res.data.clientSecret);
            })
    }
}, [totalPrice, axiosSecure])
  
  const handleSubmit = async (event) => {
  
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card
    });

    if (error) {
      console.error("Payment error:", error);
      setError(error.message);
    } else {
      console.log("Payment method:", paymentMethod);
      setError('')
      // Handle successful payment here (e.g., show success message, navigate to invoice page)
    }
    const {paymentIntent, error: confirmError}  = await stripe.confirmCardPayment(clientSecret,{
        payment_method: {
            card: card,
            billing_details: {
                email: user.email || 'annonyomous',
                fullName: user.displayName || 'annonyomous'
            }

        }
    })
    if(confirmError){
        console.log('confirm error')
    }
    else{
        console.log('paymentIntent',paymentIntent)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button className="btn btn-sm btn-primary my-4" type="submit" disabled={!stripe || !clientSecret}>
        Pay
      </button>
      <p className="text-red-500">{error}</p>
    </form>
  );
};

export default ChekoutFrom;

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import './CheckoutForm.css'
import { useEffect, useState } from "react";

import useAxiosSecure from "../../../hook/useAxiosSecure";
import UseAthenticate from "../../../hook/UseAthenticate";
import useCart from "../../../hook/useCart";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
    // const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure() ;
  const { user } =UseAthenticate();
  const [cart] = useCart();
  const [localCart, setLocalCart] = useState([]);
  const [clientSecret, setClientSecret] = useState('');
  const [error, setError] = useState('');
  const [transactionId, setTransactionId] = useState('');

  useEffect(() => {
    const initializedCart = cart.map(item => ({
      ...item,
      quantity: item.quantity || 1,
    }));
    setLocalCart(initializedCart);
  }, [cart]);

  const totalPrice = localCart.reduce((total, item) => total + item.pricePerUnit * item.quantity, 0);

  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure.post('/create-payment-intent', { price: totalPrice })
        .then(res => {
          console.log('Client Secret:', res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        })
        .catch(error => {
          console.error('Error fetching client secret:', error);
          setError('Failed to initialize payment.');
        });
    }
  }, [totalPrice, axiosSecure]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) return;

    const card = elements.getElement(CardElement);
    if (card === null) return;

    const { error: paymentError, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (paymentError) {
      setError(paymentError.message);
      return;
    }
  else{
 console.log(paymentMethod)
  }
  
    const { error: confirmError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          email: user?.email || 'anonymous',
          name: user?.displayName || 'anonymous',
        },
      },
    });

    if (confirmError) {
      setError(confirmError.message);
      return;
    }

    if (paymentIntent.status === 'succeeded') {
      setTransactionId(paymentIntent.id);
      Swal.fire('Success', 'Payment successful!', 'success');
      console.log('Payment successful:', paymentIntent);
      const payment = {
        email:user.email,
        transactionId:paymentIntent.id,
        price: totalPrice,
        date: new Date(),
        cartIds:cart.map(item => item._id),
        medicineIds: cart.map(item => item.medicineId),
        status:"pending"

        
      }
      const res = await axiosSecure.post('/payments',payment);
      console.log("payment saved", res.data)
   
    //   navigate('/invoice', { state: { transactionId: paymentIntent.id } })
    } else {
      setError('Payment not successful');
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
      {error && <p className="text-red-500">{error}</p>}
      {transactionId && <p className="text-green-600">Your transaction ID: {transactionId}</p>}
    </form>
  );
};

export default CheckoutForm;

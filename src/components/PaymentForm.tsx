import { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom";
import Button from "./common/Button";

export default function PaymentForm() {
  const [error, setError] = useState<string | null>(null);
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState(false);
  const [cardComplete, setCardComplete] = useState(false);

  const [billingDetails, setBillingDetails] = useState({
    name: "",
    email: "",
    address: {
      line1: "",
      city: "",
      state: "",
      postal_code: "",
    },
  });

  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't loaded yet
      return;
    }

    if (!cardComplete) {
      setError("Please complete your card details.");
      return;
    }

    if (!billingDetails.name) {
      setError("Please provide your name.");
      return;
    }

    setProcessing(true);
    setError(null);

    try {
      // In a real app, you'd call your backend to create a PaymentIntent
      // const clientSecret = await createPaymentIntent(149);

      // For demo purposes, we're just simulating the payment process
      setTimeout(() => {
        setProcessing(false);
        setSuccess(true);

        // Redirect to success page after a short delay
        setTimeout(() => {
          navigate("/success");
        }, 2000);
      }, 1500);

      // In a real implementation, you'd use stripe.confirmCardPayment
      // const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      //   payment_method: {
      //     card: elements.getElement(CardElement)!,
      //     billing_details: billingDetails
      //   }
      // });

      // if (error) {
      //   setError(error.message || 'An error occurred with your payment.');
      //   setProcessing(false);
      // } else if (paymentIntent.status === 'succeeded') {
      //   setSuccess(true);
      //   setProcessing(false);
      //
      //   setTimeout(() => {
      //     navigate('/success');
      //   }, 2000);
      // }
    } catch (err) {
      console.error(err);
      setError("An error occurred while processing your payment.");
      setProcessing(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="mb-6 text-center">
        <h2 className="text-xl font-bold text-gray-800">Complete Your Order</h2>
        <p className="text-gray-600">
          Your honorary degree will be shipped after payment
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        {success ? (
          <div className="text-center py-8">
            <svg
              className="h-16 w-16 text-green-500 mx-auto mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Payment Successful!
            </h3>
            <p className="text-gray-600 mb-4">Your order has been placed.</p>
            <p className="text-gray-600">Redirecting to confirmation page...</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block mb-1 text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Jane Doe"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-black!"
                value={billingDetails.name}
                onChange={(e) =>
                  setBillingDetails({ ...billingDetails, name: e.target.value })
                }
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block mb-1 text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="jane.doe@example.com"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-black!"
                value={billingDetails.email}
                onChange={(e) =>
                  setBillingDetails({
                    ...billingDetails,
                    email: e.target.value,
                  })
                }
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="address"
                className="block mb-1 text-sm font-medium text-gray-700"
              >
                Address
              </label>
              <input
                id="address"
                type="text"
                placeholder="123 Main St"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-black!"
                value={billingDetails.address.line1}
                onChange={(e) =>
                  setBillingDetails({
                    ...billingDetails,
                    address: {
                      ...billingDetails.address,
                      line1: e.target.value,
                    },
                  })
                }
              />
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label
                  htmlFor="city"
                  className="block mb-1 text-sm font-medium text-gray-700"
                >
                  City
                </label>
                <input
                  id="city"
                  type="text"
                  placeholder="San Francisco"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-black!"
                  value={billingDetails.address.city}
                  onChange={(e) =>
                    setBillingDetails({
                      ...billingDetails,
                      address: {
                        ...billingDetails.address,
                        city: e.target.value,
                      },
                    })
                  }
                />
              </div>
              <div>
                <label
                  htmlFor="state"
                  className="block mb-1 text-sm font-medium text-gray-700"
                >
                  State
                </label>
                <input
                  id="state"
                  type="text"
                  placeholder="CA"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-black!"
                  value={billingDetails.address.state}
                  onChange={(e) =>
                    setBillingDetails({
                      ...billingDetails,
                      address: {
                        ...billingDetails.address,
                        state: e.target.value,
                      },
                    })
                  }
                />
              </div>
            </div>

            <div className="mb-6">
              <label
                htmlFor="zip"
                className="block mb-1 text-sm font-medium text-gray-700"
              >
                ZIP Code
              </label>
              <input
                id="zip"
                type="text"
                placeholder="94103"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-black!"
                value={billingDetails.address.postal_code}
                onChange={(e) =>
                  setBillingDetails({
                    ...billingDetails,
                    address: {
                      ...billingDetails.address,
                      postal_code: e.target.value,
                    },
                  })
                }
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="card"
                className="block mb-1 text-sm font-medium text-gray-700"
              >
                Card Information
              </label>
              <div className="border border-gray-300 rounded-md p-3 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:border-indigo-500">
                <CardElement
                  onChange={(e) => setCardComplete(e.complete)}
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
              </div>
            </div>

            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Diploma Cost</span>
                <span className="text-gray-800 font-medium">$129.00</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Shipping & Handling</span>
                <span className="text-gray-800 font-medium">$20.00</span>
              </div>
              <div className="h-px bg-gray-200 my-2"></div>
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>$149.00</span>
              </div>
            </div>

            {error && (
              <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-md">
                {error}
              </div>
            )}

            <Button
              type="submit"
              variant="primary"
              fullWidth
              disabled={!stripe || processing}
            >
              {processing ? "Processing..." : "Pay $149.00"}
            </Button>

            <div className="mt-4 text-center text-sm text-gray-500">
              <p>Your payment is secure and encrypted</p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

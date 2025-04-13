import { loadStripe } from "@stripe/stripe-js";

// In a real application, this would be fetched from an environment variable
// For demo purposes, we're using a placeholder that would be replaced in production
const STRIPE_PUBLIC_KEY =
  import.meta.env.VITE_STRIPE_PUBLIC_KEY || "your-publishable-key";

export const stripePromise = loadStripe(STRIPE_PUBLIC_KEY);

export const createPaymentIntent = async (_: number): Promise<string> => {
  // In a real app, this would call your backend to create a payment intent
  // For demo purposes, we'll simulate a successful response
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("pi_mock_" + Math.random().toString(36).substr(2, 9));
    }, 1000);
  });
};

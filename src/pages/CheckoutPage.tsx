import { useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { stripePromise } from "../lib/stripe";
import PaymentForm from "../components/PaymentForm";
import DiplomaPreview from "../components/DiplomaPreview";
import { useDegreeStore } from "../store/useDegreeStore";
import { Link } from "react-router-dom";
import Button from "../components/common/Button";

export default function CheckoutPage() {
  const [viewMode, setViewMode] = useState("split");
  const { name, title } = useDegreeStore();

  // Check if degree information is filled out
  const isInfoComplete = name && title;

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 text-gray-800">Checkout</h1>
          <p className="text-gray-600">
            Complete your order to receive your honorary degree
          </p>
        </div>

        {!isInfoComplete ? (
          <div className="bg-amber-50 border border-amber-300 p-4 rounded-md mb-8">
            <div className="flex items-start">
              <svg
                className="h-6 w-6 text-amber-500 mr-3 mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <div>
                <h3 className="font-medium text-amber-800">
                  Missing Information
                </h3>
                <p className="text-amber-700 text-sm mt-1">
                  Please complete your degree information before proceeding to
                  checkout.
                </p>
                <Link
                  to="/create"
                  className="inline-block mt-2 text-sm font-medium text-amber-800 hover:underline"
                >
                  Return to degree creation
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
                <div className="p-4 bg-gray-50 border-b flex justify-between items-center">
                  <h2 className="text-lg font-semibold text-gray-800">
                    Degree Preview
                  </h2>
                  <div className="flex space-x-2">
                    <Button
                      variant="text"
                      size="small"
                      className={`p-1 ${
                        viewMode === "split"
                          ? "bg-indigo-100 text-indigo-600"
                          : "text-gray-500 hover:text-gray-700"
                      }`}
                      onClick={() => setViewMode("split")}
                      title="Split View"
                      withAnimation={false}
                    >
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 6h16M4 12h16M4 18h7"
                        />
                      </svg>
                    </Button>
                    <Button
                      variant="text"
                      size="small"
                      className={`p-1 ${
                        viewMode === "full"
                          ? "bg-indigo-100 text-indigo-600"
                          : "text-gray-500 hover:text-gray-700"
                      }`}
                      onClick={() => setViewMode("full")}
                      title="Full Preview"
                      withAnimation={false}
                    >
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                        />
                      </svg>
                    </Button>
                  </div>
                </div>
                <div
                  className={
                    viewMode === "full" ? "p-4" : "max-h-96 overflow-auto p-4"
                  }
                >
                  <DiplomaPreview />
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-4 bg-gray-50 border-b">
                  <h2 className="text-lg font-semibold text-gray-800">
                    Order Summary
                  </h2>
                </div>
                <div className="p-4">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Honorary Degree</span>
                      <span className="font-medium">$129.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">
                        Premium Parchment Paper
                      </span>
                      <span className="font-medium">Included</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Gold Foil Embossing</span>
                      <span className="font-medium">Included</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Shipping & Handling</span>
                      <span className="font-medium">$20.00</span>
                    </div>
                    <div className="h-px bg-gray-200 my-2"></div>
                    <div className="flex justify-between font-bold">
                      <span>Total</span>
                      <span>$149.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-4 bg-gray-50 border-b">
                <h2 className="text-lg font-semibold text-gray-800">
                  Payment Information
                </h2>
              </div>
              <div className="p-4">
                <Elements stripe={stripePromise}>
                  <PaymentForm />
                </Elements>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

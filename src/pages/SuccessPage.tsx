import { Link } from "react-router-dom";
import { useDegreeStore } from "../store/useDegreeStore";
import DiplomaPreview from "../components/DiplomaPreview";

export default function SuccessPage() {
  const { name, reset } = useDegreeStore();

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto text-center">
        <div className="mb-8">
          <div className="inline-flex h-24 w-24 items-center justify-center rounded-full bg-green-100 mb-6">
            <svg
              className="h-12 w-12 text-green-600"
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
          </div>
          <h1 className="text-4xl font-bold mb-4 text-gray-800">
            Order Successful!
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Thank you, {name || "valued customer"}! Your honorary degree order
            has been confirmed.
          </p>
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h2 className="text-lg font-semibold mb-4 text-gray-800">
              What Happens Next?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div>
                <div className="bg-indigo-100 text-indigo-700 w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mb-3">
                  1
                </div>
                <h3 className="font-medium mb-2 text-gray-800">Production</h3>
                <p className="text-sm text-gray-600">
                  Your honorary degree is now in production. Our calligraphers
                  are carefully crafting your document.
                </p>
              </div>
              <div>
                <div className="bg-indigo-100 text-indigo-700 w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mb-3">
                  2
                </div>
                <h3 className="font-medium mb-2 text-gray-800">Shipping</h3>
                <p className="text-sm text-gray-600">
                  Your degree will be shipped within 5-7 business days. You'll
                  receive a tracking number by email.
                </p>
              </div>
              <div>
                <div className="bg-indigo-100 text-indigo-700 w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mb-3">
                  3
                </div>
                <h3 className="font-medium mb-2 text-gray-800">Delivery</h3>
                <p className="text-sm text-gray-600">
                  Your prestigious honorary degree will arrive in a protective
                  tube, ready for framing and display.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <div className="p-4 bg-gray-50 border-b">
            <h2 className="text-lg font-semibold text-gray-800">Your Order</h2>
          </div>
          <div className="p-4">
            <DiplomaPreview />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/"
            className="py-2 px-6 bg-indigo-600 text-white font-medium rounded-md shadow hover:bg-indigo-700 transition duration-150 ease-in-out"
            onClick={reset}
          >
            Return Home
          </Link>
          <Link
            to="/create"
            className="py-2 px-6 border border-indigo-600 text-indigo-600 font-medium rounded-md hover:bg-indigo-50 transition duration-150 ease-in-out"
            onClick={reset}
          >
            Create Another Degree
          </Link>
        </div>

        <div className="mt-8 text-sm text-gray-600">
          <p>
            Order number: #HD
            {Math.floor(Math.random() * 1000000)
              .toString()
              .padStart(6, "0")}
          </p>
          <p className="mt-1">
            Need assistance? Contact our customer support at
            support@prestigedegrees.com
          </p>
        </div>
      </div>
    </div>
  );
}

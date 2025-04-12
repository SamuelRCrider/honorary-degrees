import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <div className="max-w-xl mx-auto">
        <h1 className="text-6xl font-bold text-indigo-600 mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Page Not Found
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mb-8">
          <svg
            className="h-48 w-48 mx-auto text-indigo-200"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 3L4 7V8L12 12L20 8V7L12 3Z" />
            <path d="M4 9V17L6 16V10L12 14L18 10V16L20 17V9L12 13L4 9Z" />
            <path d="M7 19H17V21H7V19Z" />
          </svg>
        </div>
        <Link
          to="/"
          className="inline-block py-3 px-8 bg-indigo-600 text-white font-medium rounded-lg shadow-lg hover:bg-indigo-700 transition duration-200"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}

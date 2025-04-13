import { Link } from "react-router-dom";
import Button from "../components/common/Button";
import { GraduationCap } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <div className="max-w-xl mx-auto">
        <h1 className="text-6xl font-bold text-indigo-600 mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Page Not Found
        </h2>
        <p className="text-xl text-gray-600 mb-6">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mb-8">
          <GraduationCap className="h-48 w-48 mx-auto text-indigo-200" />
        </div>
        <Button
          variant="primary"
          size="large"
          className="shadow-lg"
          as={Link}
          to="/"
        >
          Return Home
        </Button>
      </div>
    </div>
  );
}

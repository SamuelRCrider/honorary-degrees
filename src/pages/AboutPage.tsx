import { Link } from "react-router-dom";
import Button from "../components/common/Button";

export default function AboutPage() {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 text-gray-800 leading-tight">
            About Margarita Tech
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            At Margarita Tech, we believe that achievement should be recognized.
            We've created a platform that allows individuals to celebrate their
            accomplishments with beautifully crafted honorary degrees.
          </p>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-16"></div>
        </div>

        {/* Our Story Section */}
        <div className="max-w-4xl mx-auto mb-24">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
              <div className="bg-indigo-100 p-1 rounded-lg inline-block mb-4">
                <span className="text-indigo-600 font-semibold px-3 py-1">
                  Est. 2023
                </span>
              </div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                Our Story
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Founded by a group of entrepreneurs who recognized that many
                accomplished individuals never receive formal recognition for
                their expertise and contributions, Margarita Tech was born from
                the idea that everyone deserves acknowledgment for their life's
                work.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Whether you're a self-taught expert, a professional with decades
                of experience, or someone who has made meaningful contributions
                to your field without formal academic credentials, we believe
                your achievements deserve recognition.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition duration-300">
                <svg
                  className="w-12 h-12 text-indigo-600 mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                  ></path>
                </svg>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Our Mission
                </h3>
                <p className="text-gray-600">
                  To democratize recognition by providing beautifully crafted
                  honorary degrees that celebrate real-world achievements and
                  expertise outside traditional academic pathways.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Products Section */}
        <div className="max-w-4xl mx-auto mb-24">
          <h2 className="text-3xl font-bold mb-12 text-gray-800 text-center">
            Exceptional Quality
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition duration-300">
              <svg
                className="w-10 h-10 text-indigo-600 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                ></path>
              </svg>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Premium Materials
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Each of our honorary degrees is crafted with attention to detail
                and quality. We use premium parchment paper, elegant
                calligraphy, and gold foil embossing to create documents that
                are indistinguishable from those awarded by prestigious
                institutions.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition duration-300">
              <svg
                className="w-10 h-10 text-indigo-600 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                AI-Powered Language
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our AI-powered description generator helps create impressive,
                formal language that highlights your accomplishments in the
                academic style typical of honorary degrees, making your
                achievement document truly special.
              </p>
            </div>
          </div>
        </div>

        {/* Disclaimer Section */}
        <div className="max-w-4xl mx-auto mb-24">
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-8 rounded-xl border border-indigo-100 shadow-sm">
            <div className="flex items-center mb-4">
              <svg
                className="w-6 h-6 text-indigo-600 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <h3 className="text-xl font-bold text-indigo-800">
                Important Disclaimer
              </h3>
            </div>
            <p className="text-indigo-700 leading-relaxed">
              Margarita Tech provides honorary degrees for novelty,
              commemorative, and personal satisfaction purposes only. Our
              degrees are not accredited academic credentials and should not be
              used to misrepresent one's educational background for academic,
              professional, or employment purposes.
            </p>
          </div>
        </div>

        {/* Commitment Section */}
        <div className="max-w-4xl mx-auto mb-24">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                Our Commitment
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We're committed to providing high-quality products that help our
                customers celebrate their achievements and expertise. We take
                pride in our craftsmanship and customer service.
              </p>
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-green-500 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-gray-700">Quality Guaranteed</span>
              </div>
              <div className="flex items-center mt-2">
                <svg
                  className="w-5 h-5 text-green-500 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-gray-700">Fast Production</span>
              </div>
              <div className="flex items-center mt-2">
                <svg
                  className="w-5 h-5 text-green-500 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-gray-700">Responsive Support</span>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-indigo-600 text-white rounded-xl shadow-xl p-8">
                <h3 className="text-2xl font-bold mb-4">
                  Join Thousands of Satisfied Customers
                </h3>
                <p className="text-indigo-100 mb-6 leading-relaxed">
                  Join the thousands of individuals who have chosen to recognize
                  their own accomplishments with a custom honorary degree from
                  Margarita Tech.
                </p>
                <Button
                  variant="secondary"
                  size="large"
                  className="w-full justify-center"
                  as={Link}
                  to="/create"
                >
                  Create Your Degree
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

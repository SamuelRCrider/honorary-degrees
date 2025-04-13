import { Link } from "react-router-dom";
import Button from "../components/common/Button";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          About Prestige Degrees
        </h1>

        <div className="prose prose-lg max-w-none">
          <p>
            At Prestige Degrees, we believe that achievement should be
            recognized. We've created a platform that allows individuals to
            celebrate their accomplishments with beautifully crafted honorary
            degrees.
          </p>

          <h2>Our Story</h2>
          <p>
            Founded in 2023 by a group of entrepreneurs who recognized that many
            accomplished individuals never receive formal recognition for their
            expertise and contributions, Prestige Degrees was born from the idea
            that everyone deserves acknowledgment for their life's work.
          </p>
          <p>
            Whether you're a self-taught expert, a professional with decades of
            experience, or someone who has made meaningful contributions to your
            field without formal academic credentials, we believe your
            achievements deserve recognition.
          </p>

          <h2>Our Products</h2>
          <p>
            Each of our honorary degrees is crafted with attention to detail and
            quality. We use premium parchment paper, elegant calligraphy, and
            gold foil embossing to create documents that are indistinguishable
            from those awarded by prestigious institutions.
          </p>
          <p>
            Our AI-powered description generator helps create impressive, formal
            language that highlights your accomplishments in the academic style
            typical of honorary degrees.
          </p>

          <div className="bg-indigo-50 p-6 rounded-lg my-8">
            <h3 className="text-xl font-bold mb-3 text-indigo-800">
              Important Disclaimer
            </h3>
            <p className="text-indigo-700">
              Prestige Degrees provides honorary degrees for novelty,
              commemorative, and personal satisfaction purposes only. Our
              degrees are not accredited academic credentials and should not be
              used to misrepresent one's educational background for academic,
              professional, or employment purposes.
            </p>
          </div>

          <h2>Our Commitment</h2>
          <p>
            We're committed to providing high-quality products that help our
            customers celebrate their achievements and expertise. We take pride
            in our craftsmanship and customer service.
          </p>

          <h2>Join Thousands of Satisfied Customers</h2>
          <p>
            Join the thousands of individuals who have chosen to recognize their
            own accomplishments with a custom honorary degree from Prestige
            Degrees.
          </p>

          <div className="mt-8 text-center">
            <Button
              variant="primary"
              size="medium"
              className="shadow-md"
              as={Link}
              to="/create"
            >
              Create Your Degree
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

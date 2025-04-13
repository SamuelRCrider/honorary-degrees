import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../components/common/Button";

export default function HomePage() {
  return (
    <>
      <section className="bg-gradient-to-r from-indigo-600 to-blue-500">
        <div className="max-w-5xl mx-auto px-4 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Your Academic Achievement, Made Official
              </h1>
              <p className="text-xl mb-8">
                Create your own honorary degree from the world's finest
                institution, Margarita Tech. Celebrate your expertise and
                accomplishments!
              </p>
              <Button
                variant="secondary"
                textColor="blue-500"
                size="large"
                className="font-black shadow-lg"
                as={Link}
                to="/create"
              >
                Create Your Degree
              </Button>
            </div>
            <div className="flex justify-center">
              <div className="relative max-w-full">
                <div className="absolute inset-0 bg-white rounded-lg opacity-10 transform rotate-3"></div>
                <div className="border-8 border-white bg-cream p-8 rounded-lg shadow-xl relative bg-[#fffbf0]">
                  <div className="border-4 border-double border-[#d4af37] p-6 text-center">
                    <div className="uppercase text-xs tracking-widest mb-3 text-[#8a7825]">
                      MARGARITA TECH
                    </div>
                    <div className="text-2xl font-bold mb-2 text-[#8a7825]">
                      HONORARY DEGREE
                    </div>
                    <div className="text-lg mb-4 italic text-[#8a7825]">
                      Doctor of Humane Letters
                    </div>
                    <div className="mb-1 text-[#594e18]">
                      This certifies that
                    </div>
                    <div className="text-xl font-bold mb-2 text-[#3a3112]">
                      Your Name Here
                    </div>
                    <div className="text-xs text-[#594e18] mb-3">
                      Having demonstrated exceptional achievement and
                      contribution to society...
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
              <div className="bg-indigo-100 text-indigo-700 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Design Your Degree
              </h3>
              <p className="text-gray-600">
                Choose your degree title and add a personalized description of
                your accomplishments.
              </p>
            </div>
            <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
              <div className="bg-indigo-100 text-indigo-700 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                AI-Enhanced Description
              </h3>
              <p className="text-gray-600">
                Our AI will help you craft the perfect description for your
                honorary degree, making it sound prestigious and official.
              </p>
            </div>
            <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
              <div className="bg-indigo-100 text-indigo-700 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Receive Your Diploma
              </h3>
              <p className="text-gray-600">
                We'll print your honorary degree on premium parchment paper and
                ship it to your address in a protective tube.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-3 text-gray-800">
            Premium Quality Diplomas
          </h2>
          <p className="text-center mb-12 text-gray-600 max-w-3xl mx-auto">
            Our honorary degrees are printed on premium parchment paper with
            gold foil accents, making them indistinguishable from those awarded
            by prestigious universities.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Features</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">
                    Premium 210gsm parchment paper
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">
                    Elegant gold foil embossing
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">
                    Official university seal
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">
                    Professional calligraphy
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-600">
                    Protective shipping tube included
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Testimonials
              </h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded shadow-sm">
                  <div className="flex items-center mb-2">
                    <div className="h-10 w-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-700 font-bold mr-3">
                      JD
                    </div>
                    <div>
                      <div className="font-medium text-gray-800">John D.</div>
                      <div className="text-sm text-gray-500">
                        Los Angeles, CA
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">
                    "My honorary doctorate in Quantum Physics looks amazing! My
                    friends can't believe it's not from a real university like
                    Margarita Tech."
                  </p>
                </div>
                <div className="bg-white p-4 rounded shadow-sm">
                  <div className="flex items-center mb-2">
                    <div className="h-10 w-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-700 font-bold mr-3">
                      SM
                    </div>
                    <div>
                      <div className="font-medium text-gray-800">Sarah M.</div>
                      <div className="text-sm text-gray-500">New York, NY</div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">
                    "The AI description generator created the perfect text for
                    my honorary degree in Environmental Sciences. It sounds so
                    authentic!"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-indigo-100">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-indigo-800">
            Ready to Create Your Honorary Degree?
          </h2>
          <p className="text-xl mb-8 text-indigo-700 max-w-3xl mx-auto">
            Join thousands of satisfied customers who have recognized their own
            accomplishments with our custom honorary degrees.
          </p>
          <Button
            variant="primary"
            size="large"
            className="font-bold shadow-lg"
            as={Link}
            to="/create"
          >
            Get Started Now
          </Button>
        </div>
      </section>
    </>
  );
}

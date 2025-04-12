import { Github, Mail, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-white mb-4 text-center">
              Prestige Degrees
            </h3>
            <p className="mb-4">
              Creating prestigious degrees for distinguished individuals since
              2023.
            </p>
            <div className="flex space-x-4 justify-center">
              <a
                href="https://x.com/samuelRcrider"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <span className="sr-only">X (Twitter)</span>
                <X />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Github</span>
                <Github />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Email</span>
                <Mail />
              </a>
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold text-white mb-4 text-center">
              Quick Links
            </h3>
            <ul className="space-y-2 grid grid-cols-2 px-20">
              <li className="col-span-1">
                <Link
                  to="/"
                  className="hover:text-white decoration-white decoration-1 underline!"
                >
                  Home
                </Link>
              </li>
              <li className="col-span-1">
                <Link
                  to="/create"
                  className="hover:text-white decoration-white decoration-1 underline!"
                >
                  Create Degree
                </Link>
              </li>
              <li className="col-span-1">
                <Link
                  to="/about"
                  className="hover:text-white decoration-white decoration-1 underline!"
                >
                  About Us
                </Link>
              </li>
              <li className="col-span-1">
                <Link
                  to="/faq"
                  className="hover:text-white decoration-white decoration-1 underline!"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>
            &copy; {new Date().getFullYear()} Prestige Degrees. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

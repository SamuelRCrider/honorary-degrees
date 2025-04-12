import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white shadow-lg">
      <div className="container mx-auto px-4 py-5 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3">
          <svg
            className="h-10 w-10"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 3L4 7V8L12 12L20 8V7L12 3Z" fill="currentColor" />
            <path
              d="M4 9V17L6 16V10L12 14L18 10V16L20 17V9L12 13L4 9Z"
              fill="currentColor"
            />
            <path d="M7 19H17V21H7V19Z" fill="currentColor" />
          </svg>
          <span className="font-serif text-xl font-bold">Prestige Degrees</span>
        </Link>
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="hover:text-blue-200 font-medium">
            Home
          </Link>
          <Link to="/create" className="hover:text-blue-200 font-medium">
            Create Degree
          </Link>
          <Link to="/about" className="hover:text-blue-200 font-medium">
            About
          </Link>
        </nav>
        <div className="md:hidden">
          <button className="text-white">
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

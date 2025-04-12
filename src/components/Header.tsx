import { GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-indigo-900 shadow-lg">
      <div className="max-w-5xl mx-auto px-4 py-2 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3">
          <GraduationCap className="h-10 w-10" />
          <span className="font-serif text-xl font-bold">Prestige Degrees</span>
        </Link>
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="hover:text-blue-100 font-medium">
            Home
          </Link>
          <Link to="/create" className="hover:text-blue-100 font-medium">
            Create Degree
          </Link>
          <Link to="/about" className="hover:text-blue-100 font-medium">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}

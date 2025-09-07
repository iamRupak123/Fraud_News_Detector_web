import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white px-4 sm:px-6 py-3 relative flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src="/logo.jpg" alt="Logo" className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-contain" />
        <span className="font-bold text-lg sm:text-xl">Fake News Detector</span>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center space-x-6">
        <Link to="/" className="relative group">
          Home
          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link to="/contact" className="relative group">
          Contact Us
          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link to="/about" className="relative group">
          About Us
          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <div className="flex items-center gap-3 bg-blue-400 px-4 py-1 rounded-2xl">
          <Link to="/register" className="relative group">
            Register
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/login" className="relative group">
            Login
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none z-50">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-blue-600 text-white flex flex-col items-center py-4 md:hidden shadow-lg">
          <Link to="/" className="py-2 w-full text-center border-b border-blue-500" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/contact" className="py-2 w-full text-center border-b border-blue-500" onClick={() => setIsOpen(false)}>Contact Us</Link>
          <Link to="/about" className="py-2 w-full text-center border-b border-blue-500" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link to="/register" className="py-2 w-full text-center border-b border-blue-500" onClick={() => setIsOpen(false)}>Register</Link>
          <Link to="/login" className="py-2 w-full text-center" onClick={() => setIsOpen(false)}>Login</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

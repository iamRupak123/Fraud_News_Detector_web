import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src="/logo.jpg" alt="Logo" className="h-12 w-12 rounded-full object-contain" />
        <span className="font-bold text-xl">Fake News Detector</span>
      </div>

      {/* Links */}
      <div className="space-x-6 flex">
  <Link to="/" className="relative group">
    Home
    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
  </Link>
  <Link to="/register" className="relative group">
    Register
    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
  </Link>
  <Link to="/login" className="relative group">
    Login
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
</div>

    </nav>
  );
}

export default Navbar;

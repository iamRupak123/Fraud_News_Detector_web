import { FaLinkedin, FaWhatsapp, FaInstagram, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        {/* Logo & copyright */}
        <div className="flex flex-col items-center md:items-start">
          {/* <img src="/logo.jpg" alt="Logo" className="w-12 h-12 mb-2 rounded-full" /> */}
          <p className="text-sm text-center md:text-left">
            © 2025 Fake News Detector. All rights reserved.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex space-x-4">
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
            <FaLinkedin size={20} />
          </a>
          <a href="https://wa.me/9002800162" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition">
            <FaWhatsapp size={20} />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">
            <FaInstagram size={20} />
          </a>
          <a href="mailto:example@gmail.com" className="hover:text-red-500 transition">
            <FaEnvelope size={20} />
          </a>
        </div>
      </div>

      {/* Optional small note */}
      <p className="text-xs text-gray-400 text-center mt-4">
        Designed & Developed with ❤️
      </p>
    </footer>
  );
}

export default Footer;

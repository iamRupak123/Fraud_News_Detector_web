import { FaLinkedin, FaWhatsapp, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";

function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-4 sm:p-6 md:p-8">
      <div className="bg-white shadow-2xl rounded-2xl p-6 sm:p-8 md:p-10 max-w-2xl w-full">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6 text-center">
          Contact Us 📬
        </h1>
        <p className="text-gray-600 mb-6 sm:mb-8 text-center text-sm sm:text-base">
          We’d love to hear from you! Connect with us through social links or send a direct message.
        </p>

        {/* Social Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
          <a
            href="https://www.linkedin.com/in/kamal-barman-75934530a/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-3 p-3 sm:p-4 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            <FaLinkedin size={20} className="sm:text-lg" />
            <span className="text-sm sm:text-base">LinkedIn</span>
          </a>

          <a
            href="https://wa.me/9002800162"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-3 p-3 sm:p-4 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition"
          >
            <FaWhatsapp size={20} className="sm:text-lg" />
            <span className="text-sm sm:text-base">WhatsApp</span>
          </a>

          <a
            href="https://www.instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-3 p-3 sm:p-4 bg-pink-500 text-white rounded-lg shadow hover:bg-pink-600 transition"
          >
            <FaInstagram size={20} className="sm:text-lg" />
            <span className="text-sm sm:text-base">Instagram</span>
          </a>

          <a
            href="mailto:bknknknk@gmail.com"
            className="flex items-center justify-center space-x-3 p-3 sm:p-4 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition"
          >
            <FaEnvelope size={20} className="sm:text-lg" />
            <span className="text-sm sm:text-base">Email</span>
          </a>

          <a
            href="tel:+919002800162"
            className="flex items-center justify-center space-x-3 p-3 sm:p-4 bg-gray-700 text-white rounded-lg shadow hover:bg-gray-800 transition col-span-1 sm:col-span-2"
          >
            <FaPhone size={20} className="sm:text-lg" />
            <span className="text-sm sm:text-base">+91 9002800162</span>
          </a>
        </div>

        {/* Contact Form */}
        <form className="space-y-4 sm:space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-1 sm:mb-2 text-sm sm:text-base">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border focus:ring-2 focus:ring-purple-500 outline-none text-sm sm:text-base"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1 sm:mb-2 text-sm sm:text-base">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border focus:ring-2 focus:ring-purple-500 outline-none text-sm sm:text-base"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1 sm:mb-2 text-sm sm:text-base">Message</label>
            <textarea
              placeholder="Write your message..."
              rows="4"
              className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border focus:ring-2 focus:ring-purple-500 outline-none text-sm sm:text-base"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 sm:py-3 rounded-lg font-semibold hover:bg-purple-700 transition shadow-lg text-sm sm:text-base"
          >
            Send Message ✨
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;

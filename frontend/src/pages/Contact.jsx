import { FaLinkedin, FaWhatsapp, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";

function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-6">
      <div className="bg-white shadow-2xl rounded-2xl p-10 max-w-2xl w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Contact Us 📬</h1>
        <p className="text-gray-600 mb-8 text-center">
          We’d love to hear from you! Connect with us through social links or send a direct message.
        </p>

        {/* Social Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          <a
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-3 p-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            <FaLinkedin size={22} />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://wa.me/59898989856"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-3 p-3 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition"
          >
            <FaWhatsapp size={22} />
            <span>WhatsApp</span>
          </a>

          <a
            href="https://www.instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-3 p-3 bg-pink-500 text-white rounded-lg shadow hover:bg-pink-600 transition"
          >
            <FaInstagram size={22} />
            <span>Instagram</span>
          </a>

          <a
            href="mailto:bknknknk@gmail.com"
            className="flex items-center justify-center space-x-3 p-3 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition"
          >
            <FaEnvelope size={22} />
            <span>Email</span>
          </a>

          <a
            href="tel:+919565686568"
            className="flex items-center justify-center space-x-3 p-3 bg-gray-700 text-white rounded-lg shadow hover:bg-gray-800 transition md:col-span-2"
          >
            <FaPhone size={22} />
            <span>+91 46796464679</span>
          </a>
        </div>

        {/* Contact Form */}
        <form className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Message</label>
            <textarea
              placeholder="Write your message..."
              rows="4"
              className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-purple-500 outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition shadow-lg"
          >
            Send Message ✨
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;

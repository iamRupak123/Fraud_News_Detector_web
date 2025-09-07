import React from "react";
import { Phone, Mail, Linkedin } from "lucide-react"; 

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-blue-50 to-gray-100 text-gray-800 px-4 sm:px-6 md:px-8">
      
      {/* Hero Section */}
      <section className="text-center py-8 sm:py-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-700 mb-3 sm:mb-4">About Us</h1>
        <p className="text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
          Our project is designed to <span className="font-semibold">detect fake news</span> 
          using <span className="font-semibold">AI</span> and <span className="font-semibold">sentiment analysis</span>.  
          We aim to build a safer digital world by preventing the spread of misinformation. 🚀
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="py-8 sm:py-12 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
        {[
          { title: "🎯 Mission", color: "text-blue-600", text: "To fight against misinformation by leveraging AI and machine learning technologies." },
          { title: "🌍 Vision", color: "text-green-600", text: "Create a reliable digital ecosystem where truth prevails over fake content." },
          { title: "🤖 Technology", color: "text-purple-600", text: "AI-powered detection combined with sentiment analysis for accurate classification." },
        ].map((item, idx) => (
          <div key={idx} className="bg-white shadow-md p-4 sm:p-6 rounded-xl hover:scale-105 transition">
            <h2 className={`text-lg sm:text-xl font-bold mb-2 ${item.color}`}>{item.title}</h2>
            <p className="text-sm sm:text-base">{item.text}</p>
          </div>
        ))}
      </section>

      {/* How It Works */}
      <section className="py-8 sm:py-12 text-center max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-700 mb-6">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {[
            { step: "📰 Step 1", desc: "Enter the news text or headline." },
            { step: "🔍 Step 2", desc: "Our AI model analyzes credibility and sentiment." },
            { step: "✅ Step 3", desc: "Get results: Real or Fake news instantly." },
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-4 sm:p-6 rounded-xl shadow hover:scale-105 transition">
              <h3 className="font-bold text-lg sm:text-xl">{item.step}</h3>
              <p className="text-sm sm:text-base">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-8 sm:py-12 max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-blue-700 mb-6">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {[
            { title: "⚡ Quick Detection", desc: "Fast and efficient classification of news articles." },
            { title: "📊 Analytics", desc: "See insights and patterns in misinformation trends." },
            { title: "🔐 Trusted Sources", desc: "Verification against reliable and authentic databases." },
            { title: "🌐 User-Friendly", desc: "Simple interface with interactive design." },
          ].map((feature, idx) => (
            <div key={idx} className="bg-white p-4 sm:p-6 rounded-xl shadow hover:scale-105 transition">
              <h3 className="font-semibold text-lg sm:text-xl">{feature.title}</h3>
              <p className="text-sm sm:text-base">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-8 sm:py-12 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto text-center">
        {[
          { number: "65%", desc: "People have encountered fake news online.", color: "text-yellow-700", bg: "bg-yellow-100" },
          { number: "95%", desc: "Model accuracy in detecting fake vs real.", color: "text-green-700", bg: "bg-green-100" },
          { number: "10K+", desc: "News articles analyzed so far.", color: "text-blue-700", bg: "bg-blue-100" },
        ].map((item, idx) => (
          <div key={idx} className={`${item.bg} p-4 sm:p-6 rounded-xl shadow-md`}>
            <h3 className={`text-2xl sm:text-3xl md:text-4xl font-bold ${item.color}`}>{item.number}</h3>
            <p className="text-sm sm:text-base">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* Team Section */}
      <section className="py-8 sm:py-12 max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-blue-700 mb-6 sm:mb-8">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 text-center">
          {[
            { name: "Kamal Barman", role: "Team Leader", phone: "9002800162", email: "kamalbarman900280@gmail.com", linkedin: "https://www.linkedin.com/in/kamal-barman-75934530a/" },
            { name: "Rupak Ghosh", role: "Member", phone: "6297893183", email: "rupakghosh10101@gmail.com", linkedin: "https://www.linkedin.com/in/rupak-ghosh-ab4107339/" },
            { name: "Shovan Goswami", role: "Member", phone: "8967075908", email: "goswamishovan394@gmail.com", linkedin: "https://www.linkedin.com/in/shovan-goswami-078668335/" },
            { name: "Souvik Panda", role: "Member", phone: "+916295432687", email: "souvikpanda@gmail.com", linkedin: "https://www.linkedin.com/in/souvik-panda-2a54bb32b/" },
            { name: "Anirban Samadder", role: "Member", phone: "6291985475", email: "anirbansamadder800@gmail.com", linkedin: "https://www.linkedin.com/in/anirban-samadder-861722329/" },
          ].map((member, idx) => (
            <div key={idx} className="bg-white p-4 sm:p-6 rounded-xl shadow hover:scale-105 transition">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mx-auto mb-2 sm:mb-4"></div>
              <h3 className="font-bold text-lg sm:text-xl">{member.name}</h3>
              <p className="text-gray-600 text-sm sm:text-base mb-2 sm:mb-3">{member.role}</p>
              <div className="flex justify-center gap-3 mt-2">
                <a href={`tel:${member.phone}`} className="text-blue-600 hover:text-blue-800">
                  <Phone size={20} />
                </a>
                <a href={`mailto:${member.email}`} className="text-blue-600 hover:text-blue-800">
                  <Mail size={20} />
                </a>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-8 sm:py-12">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-gray-800">
          Ready to fight fake news with us?
        </h2>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-lg font-semibold shadow-md text-sm sm:text-base">
          Start Detecting Now 🚀
        </button>
      </section>

    </div>
  );
}

export default About;

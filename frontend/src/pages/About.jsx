import React from "react";

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-blue-50 to-gray-100 text-gray-800">
      {/* Hero Section */}
      <section className="text-center py-12 px-6">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">About Us</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Our project is designed to <span className="font-semibold">detect fake news</span> 
          using <span className="font-semibold">AI</span> and <span className="font-semibold">sentiment analysis</span>.  
          We aim to build a safer digital world by preventing the spread of misinformation. 🚀
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 px-6 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <div className="bg-white shadow-md p-6 rounded-xl hover:scale-105 transition">
          <h2 className="text-xl font-bold text-blue-600 mb-2">🎯 Mission</h2>
          <p>To fight against misinformation by leveraging AI and machine learning technologies.</p>
        </div>
        <div className="bg-white shadow-md p-6 rounded-xl hover:scale-105 transition">
          <h2 className="text-xl font-bold text-green-600 mb-2">🌍 Vision</h2>
          <p>Create a reliable digital ecosystem where truth prevails over fake content.</p>
        </div>
        <div className="bg-white shadow-md p-6 rounded-xl hover:scale-105 transition">
          <h2 className="text-xl font-bold text-purple-600 mb-2">🤖 Technology</h2>
          <p>AI-powered detection combined with sentiment analysis for accurate classification.</p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-700 mb-6">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow hover:scale-105 transition">
            <h3 className="font-bold text-lg">📰 Step 1</h3>
            <p>Enter the news text or headline.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:scale-105 transition">
            <h3 className="font-bold text-lg">🔍 Step 2</h3>
            <p>Our AI model analyzes credibility and sentiment.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:scale-105 transition">
            <h3 className="font-bold text-lg">✅ Step 3</h3>
            <p>Get results: Real or Fake news instantly.</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">Key Features</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow hover:scale-105 transition">
            <h3 className="font-semibold text-lg">⚡ Quick Detection</h3>
            <p>Fast and efficient classification of news articles.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:scale-105 transition">
            <h3 className="font-semibold text-lg">📊 Analytics</h3>
            <p>See insights and patterns in misinformation trends.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:scale-105 transition">
            <h3 className="font-semibold text-lg">🔐 Trusted Sources</h3>
            <p>Verification against reliable and authentic databases.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:scale-105 transition">
            <h3 className="font-semibold text-lg">🌐 User-Friendly</h3>
            <p>Simple interface with interactive design.</p>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-12 px-6 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto text-center">
        <div className="bg-yellow-100 p-6 rounded-xl shadow-md">
          <h3 className="text-3xl font-bold text-yellow-700">65%</h3>
          <p>People have encountered fake news online.</p>
        </div>
        <div className="bg-green-100 p-6 rounded-xl shadow-md">
          <h3 className="text-3xl font-bold text-green-700">95%</h3>
          <p>Model accuracy in detecting fake vs real.</p>
        </div>
        <div className="bg-blue-100 p-6 rounded-xl shadow-md">
          <h3 className="text-3xl font-bold text-blue-700">10K+</h3>
          <p>News articles analyzed so far.</p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">Meet Our Team</h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          {[
            { name: "Kamal Barman", role: "Team Leader" },
            { name: "Rupak Ghosh", role: "Member" },
            { name: "Shovan Goswami", role: "Member" },
            { name: "Souvik Panda", role: "Member" },
            { name: "Anirban Somadder", role: "Member" },
          ].map((member, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow hover:scale-105 transition"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mx-auto mb-4"></div>
              <h3 className="font-bold text-lg">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Ready to fight fake news with us?
        </h2>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold shadow-md">
          Start Detecting Now 🚀
        </button>
      </section>
    </div>
  );
}

export default About;

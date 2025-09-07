import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShieldCheck, Zap, BarChart, Brain } from "lucide-react";

const Home = () => {
  const navigate = useNavigate();
  const [demoInput, setDemoInput] = useState("");
  const [demoResult, setDemoResult] = useState("");

  const checkDemoNews = () => {
    if (!demoInput.trim()) {
      setDemoResult("⚠ Please enter a news headline.");
      return;
    }
    const result = Math.random() > 0.5 ? "✅ Real News" : "❌ Fake News";
    setDemoResult(result);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 via-gray-100 to-blue-100 text-center px-4 sm:px-6 md:px-8">
      {/* Intro Section */}
      <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl text-black-600 max-w-2xl mb-6 mt-2.5 leading-relaxed">
        In today’s world, misinformation spreads faster than truth.  
        Detecting fake news is essential to protect society, prevent panic,  
        and encourage responsible information sharing. ✅
      </h3>
      <button
        type="button"
        onClick={() => navigate("/login")}
        className="bg-green-500 rounded-2xl py-3 px-6 sm:px-8 hover:bg-green-600 text-white font-semibold shadow-md transition duration-200 mb-10"
      >
        Login to Start
      </button>

      {/* Quick Demo Section */}
      <div className="mt-8 sm:mt-12 bg-white shadow-lg rounded-2xl p-4 sm:p-6 md:p-8 w-full max-w-xl">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-700 mb-4">🎯 Try Quick Demo</h2>
        <input
          type="text"
          placeholder="Enter a news headline..."
          value={demoInput}
          onChange={(e) => setDemoInput(e.target.value)}
          className="w-full border rounded-lg px-3 sm:px-4 py-2 sm:py-3 mb-4 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={checkDemoNews}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-md"
        >
          Check
        </button>
        {demoResult && (
          <p className="mt-4 text-sm sm:text-base md:text-lg font-semibold">{demoResult}</p>
        )}
      </div>

      {/* Features Section */}
      <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-6xl w-full">
        {[
          { icon: <Zap size={36} className="mx-auto text-yellow-500" />, title: "Instant Detection", desc: "Classify news in seconds" },
          { icon: <BarChart size={36} className="mx-auto text-green-600" />, title: "Sentiment Analysis", desc: "See emotional tone of news" },
          { icon: <Brain size={36} className="mx-auto text-purple-600" />, title: "AI-Powered", desc: "Reliable ML-based results" },
          { icon: <ShieldCheck size={36} className="mx-auto text-blue-600" />, title: "Secure & Simple", desc: "User-friendly experience" },
        ].map((feature, idx) => (
          <div
            key={idx}
            className="bg-white p-4 sm:p-6 rounded-xl shadow hover:scale-105 hover:shadow-lg transition"
          >
            {feature.icon}
            <h3 className="font-bold text-base sm:text-lg mt-3">{feature.title}</h3>
            <p className="text-gray-600 text-sm sm:text-base">{feature.desc}</p>
          </div>
        ))}
      </div>

      {/* Fake vs Real News Demo */}
      <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl w-full">
        {/* Fake News */}
        <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 border-l-8 border-red-500 transform transition duration-500 hover:rotate-2 hover:scale-105">
          <img
            src="https://cdn-icons-png.flaticon.com/512/564/564619.png"
            alt="Fake News"
            className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4"
          />
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-red-600 mb-2 sm:mb-3">❌ Fake News</h2>
          <p className="text-gray-700 italic text-sm sm:text-base">
            “Scientists confirm that drinking 10 cups of coffee a day makes you immortal.”
          </p>
        </div>
        {/* Real News */}
        <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 border-l-8 border-green-500 transform transition duration-500 hover:-rotate-2 hover:scale-105">
          <img
            src="https://cdn-icons-png.flaticon.com/512/190/190411.png"
            alt="Real News"
            className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4"
          />
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-green-600 mb-2 sm:mb-3">✅ Real News</h2>
          <p className="text-gray-700 italic text-sm sm:text-base">
            “NASA successfully launches Artemis I mission to return humans to the Moon.”
          </p>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl w-full">
        <div className="bg-yellow-100 p-4 sm:p-6 rounded-xl shadow-md">
          <h3 className="text-2xl sm:text-3xl md:text-3xl font-bold text-yellow-700">65%</h3>
          <p className="text-gray-700 text-sm sm:text-base">of people have seen fake news online.</p>
        </div>
        <div className="bg-green-100 p-4 sm:p-6 rounded-xl shadow-md">
          <h3 className="text-2xl sm:text-3xl md:text-3xl font-bold text-green-700">24/7</h3>
          <p className="text-gray-700 text-sm sm:text-base">Misinformation spreads nonstop.</p>
        </div>
        <div className="bg-blue-100 p-4 sm:p-6 rounded-xl shadow-md">
          <h3 className="text-2xl sm:text-3xl md:text-3xl font-bold text-blue-700">10K+</h3>
          <p className="text-gray-700 text-sm sm:text-base">Articles analyzed by our system.</p>
        </div>
      </div>

      {/* Why Important Section */}
      <div className="mt-12 sm:mt-16 bg-blue-50 p-4 sm:p-6 md:p-8 rounded-2xl shadow-md max-w-3xl w-full">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-700 mb-3 sm:mb-4">
          🌍 Why Detecting Fake News Matters?
        </h2>
        <ul className="text-left text-gray-700 text-sm sm:text-base space-y-2">
          <li>✔ Prevents spread of misinformation</li>
          <li>✔ Protects public health, safety & democracy</li>
          <li>✔ Encourages critical thinking and awareness</li>
          <li>✔ Builds trust in real journalism</li>
        </ul>
      </div>
      <br />
    </div>
  );
};

export default Home;

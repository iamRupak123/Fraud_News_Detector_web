import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [demoInput, setDemoInput] = useState("");
  const [demoResult, setDemoResult] = useState("");

  // Fake demo checker (random result)
  const checkDemoNews = () => {
    if (!demoInput.trim()) {
      setDemoResult("⚠ Please enter a news headline.");
      return;
    }
    const result = Math.random() > 0.5 ? "✅ Real News" : "❌ Fake News";
    setDemoResult(result);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 via-gray-100 to-blue-100 text-center px-6">
      {/* Hero Section */}
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
        📰 Welcome to Fake News Detector 🚀
      </h1>
      <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-6">
        In today’s world, misinformation spreads faster than truth.  
        Detecting fake news is essential to protect society, prevent panic,  
        and encourage responsible information sharing. ✅
      </p>

      {/* Login Button */}
      <button
        type="button"
        onClick={() => navigate("/login")}
        className="bg-green-500 rounded-2xl py-3 px-8 hover:bg-green-600 text-white font-semibold shadow-md transition duration-200"
      >
        Login to Start
      </button>

      {/* Quick Demo Section */}
      <div className="mt-12 bg-white shadow-lg rounded-2xl p-6 w-full max-w-xl">
        <h2 className="text-xl font-bold text-gray-700 mb-4">
          🎯 Try Quick Demo
        </h2>
        <input
          type="text"
          placeholder="Enter a news headline..."
          value={demoInput}
          onChange={(e) => setDemoInput(e.target.value)}
          className="w-full border rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={checkDemoNews}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg shadow-md"
        >
          Check
        </button>
        {demoResult && (
          <p className="mt-4 text-lg font-semibold">
            {demoResult}
          </p>
        )}
      </div>

      {/* Fake vs Real News Demo */}
      <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-4xl w-full perspective">
        {/* Fake News Example */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border-l-8 border-red-500 transform transition duration-500 hover:-rotate-y-6 hover:-rotate-x-3 hover:scale-105">
          <img
            src="https://cdn-icons-png.flaticon.com/512/564/564619.png"
            alt="Fake News"
            className="w-16 h-16 mx-auto mb-4"
          />
          <h2 className="text-xl font-bold text-red-600 mb-3">❌ Fake News</h2>
          <p className="text-gray-700 italic">
            “Scientists confirm that drinking 10 cups of coffee a day makes you immortal.”
          </p>
        </div>

        {/* Real News Example */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border-l-8 border-green-500 transform transition duration-500 hover:rotate-y-6 hover:rotate-x-3 hover:scale-105">
          <img
            src="https://cdn-icons-png.flaticon.com/512/190/190411.png"
            alt="Real News"
            className="w-16 h-16 mx-auto mb-4"
          />
          <h2 className="text-xl font-bold text-green-600 mb-3">✅ Real News</h2>
          <p className="text-gray-700 italic">
            “NASA successfully launches Artemis I mission as part of its plan  
            to return humans to the Moon.”
          </p>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-4xl w-full">
        <div className="bg-yellow-100 p-6 rounded-xl shadow-md">
          <h3 className="text-2xl font-bold text-yellow-700">65%</h3>
          <p className="text-gray-700">of people have seen fake news online.</p>
        </div>
        <div className="bg-green-100 p-6 rounded-xl shadow-md">
          <h3 className="text-2xl font-bold text-green-700">24/7</h3>
          <p className="text-gray-700">Misinformation spreads nonstop.</p>
        </div>
        <div className="bg-blue-100 p-6 rounded-xl shadow-md">
          <h3 className="text-2xl font-bold text-blue-700">10K+</h3>
          <p className="text-gray-700">Articles analyzed by our system.</p>
        </div>
      </div>

      {/* Why Important Section */}
      <div className="mt-12 bg-blue-50 p-6 rounded-2xl shadow-md max-w-3xl">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">
          🌍 Why Detecting Fake News Matters?
        </h2>
        <ul className="text-left text-gray-700 space-y-2">
          <li>✔ Prevents spread of misinformation</li>
          <li>✔ Protects public health, safety & democracy</li>
          <li>✔ Encourages critical thinking and awareness</li>
          <li>✔ Builds trust in real journalism</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;

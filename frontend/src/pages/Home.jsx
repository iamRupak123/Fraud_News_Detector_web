import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate(); // ✅ create navigate instance

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <h1 className="text-2xl font-bold mb-6">
        Welcome to my Fake News Detector site 🚀  
        <br />To check the news correctness, please login first.
      </h1>
      <button
        type="button"
        onClick={() => navigate("/login")} // ✅ works now
        className="bg-green-400 rounded py-2 px-6 hover:bg-green-600 text-white font-semibold"
      >
        Login
      </button>
    </div>
  );
};

export default Home;

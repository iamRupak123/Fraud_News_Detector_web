import { useState } from "react";

function App() {
  const [news, setNews] = useState("");
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://127.0.0.1:5000/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: news }),
    });

    const data = await response.json();
    setResult(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Fake News Detector 📰</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <textarea
            value={news}
            onChange={(e) => setNews(e.target.value)}
            placeholder="Paste your news article here..."
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-400 "
            rows="5"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition hover:"
          >
            Check News
          </button>
          
        </form>

        {result && (
  <div className="mt-6 p-4 border rounded-lg bg-gray-50">
    <p className="text-lg">
      <span className="font-semibold">Prediction:</span> {result.label}
    </p>
    <p className="text-lg">
      <span className="font-semibold">Sentiment:</span> {result.sentiment}
    </p>
    <p className="text-lg">
      <span className="font-semibold">Polarity Score:</span> {result.polarity_score}
    </p>
  </div>
)}
      </div>
    </div>
  );
}

export default App;
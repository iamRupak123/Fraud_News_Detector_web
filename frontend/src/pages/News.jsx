import { useState, useEffect } from "react";

function News() {
  const [news, setNews] = useState("");
  const [result, setResult] = useState(null);
  const [trustedNews, setTrustedNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchTrustedNews = async () => {
      const res = await fetch("http://127.0.0.1:5000/trusted-news");
      const data = await res.json();
      setTrustedNews(data.trusted_news || []);
    };
    fetchTrustedNews();

    const savedHistory = JSON.parse(localStorage.getItem("history") || "[]");
    setHistory(savedHistory);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const response = await fetch("http://127.0.0.1:5000/predict", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: news }),
    });

    const data = await response.json();
    setResult(data);
    setLoading(false);

    const updatedHistory = [{ news, ...data }, ...history].slice(0, 5);
    setHistory(updatedHistory);
    localStorage.setItem("history", JSON.stringify(updatedHistory));
  };

  const sentimentEmoji = {
    Positive: "😊",
    Negative: "😠",
    Neutral: "😐",
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800 drop-shadow">
        Fake News Detector 📰
      </h1>

      {/* GRID LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Left Side: Input + Result */}
        <div className="space-y-6">
          {/* Input Form */}
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-4">
              <textarea
                value={news}
                onChange={(e) => setNews(e.target.value)}
                placeholder="Paste your news article here..."
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
                rows="5"
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-lg hover:opacity-90 transition"
              >
                Check News
              </button>
            </form>
          </div>

          {/* Result */}
          {loading && (
            <p className="text-blue-500 text-center">⏳ Checking news...</p>
          )}

          {result && !loading && (
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              {/* Horizontal results */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <p className="text-sm text-gray-500">Prediction</p>
                  <span
                    className={`px-3 py-1 rounded-full text-white ${
                      result.label === "Real" ? "bg-green-600" : "bg-red-600"
                    }`}
                  >
                    {result.label}
                  </span>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Sentiment</p>
                  <p className="text-lg font-bold">
                    {sentimentEmoji[result.sentiment]} {result.sentiment}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Polarity</p>
                  <p className="text-lg font-bold">{result.polarity_score}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Fact Check</p>
                  <p className="text-lg font-bold">{result.fact_check}</p>
                </div>
              </div>

              {/* Confidence Bar */}
              {result.confidence && (
                <div className="mt-4">
                  <p className="text-sm text-gray-600 mb-1">
                    Confidence: {(result.confidence * 100).toFixed(2)}%
                  </p>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className={`h-3 rounded-full ${
                        result.label === "Real" ? "bg-green-500" : "bg-red-500"
                      }`}
                      style={{ width: `${result.confidence * 100}%` }}
                    />
                  </div>
                </div>
              )}

              {/* Fact-check Articles */}
              {result.fact_check_articles &&
                result.fact_check_articles.length > 0 && (
                  <div className="mt-4 text-left">
                    <p className="text-sm font-semibold mb-2">
                      Fact-Check References:
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      {result.fact_check_articles.map((art, i) => (
                        <li key={i}>
                          <a
                            href={art.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 underline"
                          >
                            {art.title}
                          </a>{" "}
                          <span className="text-gray-500">({art.source})</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
            </div>
          )}
        </div>

        {/* Right Side: Trusted News + History */}
        <div className="space-y-6">
          {/* Trusted News */}
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h2 className="text-xl font-bold mb-4">Trusted News Sources ✅</h2>
            <ul className="list-disc pl-5 space-y-2">
              {trustedNews.map((article, index) => (
                <li key={index}>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    {article.title}
                  </a>{" "}
                  <span className="text-gray-500">({article.source})</span>
                </li>
              ))}
            </ul>
          </div>

          {/* History */}
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h2 className="text-xl font-bold mb-4">History 🕑</h2>
            {history.length === 0 ? (
              <p className="text-gray-500">No checks yet.</p>
            ) : (
              <ul className="space-y-2">
                {history.map((item, i) => (
                  <li
                    key={i}
                    className="p-3 border rounded-lg bg-gray-50 text-sm flex justify-between"
                  >
                    <span className="truncate">{item.news.slice(0, 40)}...</span>
                    <span
                      className={`px-2 py-1 rounded text-white ${
                        item.label === "Real" ? "bg-green-600" : "bg-red-600"
                      }`}
                    >
                      {item.label}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;

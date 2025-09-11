import { useState, useEffect } from "react";
import API_BASE_URL from "../config";

function News() {
  const [news, setNews] = useState("");
  const [result, setResult] = useState(null);
  const [trustedNews, setTrustedNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchTrustedNews = async () => {
      const res = await fetch(`${API_BASE_URL}/trusted-news`);
      const data = await res.json();
      setTrustedNews(data.trusted_news || []);
    };
    fetchTrustedNews();

    // const savedHistory = JSON.parse(localStorage.getItem("history") || "[]");
    // setHistory(savedHistory);

     const username = localStorage.getItem("username");
    fetch(`${API_BASE_URL}/api/history/${username}`)
    .then(res => res.json())
    .then(data => setHistory(data));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const response = await fetch(`${API_BASE_URL}/predict`, {
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
    <div className="min-h-screen w-full bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-4 sm:p-6 md:p-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 text-gray-800 drop-shadow">
        Fake News Detector 📰
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
        <div className="space-y-6">
          <div className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-4">
              <textarea
                value={news}
                onChange={(e) => setNews(e.target.value)}
                placeholder="Paste your news article here..."
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-400 text-sm sm:text-base"
                rows="5"
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-lg hover:opacity-90 transition text-sm sm:text-base"
              >
                Check News
              </button>
            </form>
          </div>

          {loading && (
            <p className="text-blue-500 text-center">⏳ Checking news...</p>
          )}

          {result && !loading && (
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                <div>
                  <p className="text-xs sm:text-sm md:text-sm text-gray-500">Prediction</p>
                  <span
                    className={`px-2 py-1 sm:px-3 sm:py-1 rounded-full text-white text-xs sm:text-sm md:text-base ${
                      result.label === "Real" ? "bg-green-600" : "bg-red-600"
                    }`}
                  >
                    {result.label}
                  </span>
                </div>
                <div>
                  <p className="text-xs sm:text-sm md:text-sm text-gray-500">Sentiment</p>
                  <p className="text-sm sm:text-base md:text-lg font-bold">
                    {sentimentEmoji[result.sentiment]} {result.sentiment}
                  </p>
                </div>
                <div>
                  <p className="text-xs sm:text-sm md:text-sm text-gray-500">Polarity</p>
                  <p className="text-sm sm:text-base md:text-lg font-bold">{result.polarity_score}</p>
                </div>
                <div>
                  <p className="text-xs sm:text-sm md:text-sm text-gray-500">Fact Check</p>
                  <p className="text-sm sm:text-base md:text-lg font-bold">{result.fact_check}</p>
                </div>
              </div>

              {result.confidence && (
                <div className="mt-4">
                  <p className="text-xs sm:text-sm text-gray-600 mb-1">
                    Confidence: {(result.confidence * 100).toFixed(2)}%
                  </p>
                  <div className="w-full bg-gray-200 rounded-full h-2 sm:h-3">
                    <div
                      className={`h-2 sm:h-3 rounded-full ${
                        result.label === "Real" ? "bg-green-500" : "bg-red-500"
                      }`}
                      style={{ width: `${result.confidence * 100}%` }}
                    />
                  </div>
                </div>
              )}

              {result.fact_check_articles && result.fact_check_articles.length > 0 && (
                <div className="mt-6 text-left bg-gray-50 p-4 rounded-xl shadow-sm">
                  <p className="text-sm sm:text-base font-semibold mb-3">
                    Fact-Check References:
                  </p>
                  <ul className="space-y-2 max-h-64 overflow-y-auto">
                    {result.fact_check_articles.map((art, i) => (
                      <li
                        key={i}
                        className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-gray-200 pb-2 last:border-b-0"
                      >
                        <a
                          href={art.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 underline break-words text-sm sm:text-base hover:text-blue-800"
                        >
                          {art.title}
                        </a>
                        <span className="text-gray-500 text-xs sm:text-sm mt-1 sm:mt-0">({art.source})</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="space-y-6">
          <div className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg">
            <h2 className="text-lg sm:text-xl font-bold mb-4">Trusted News Sources ✅</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base">
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
                  <span className="text-gray-500 text-xs sm:text-sm">({article.source})</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg">
            <h2 className="text-lg sm:text-xl font-bold mb-4">History 🕑</h2>
            {history.length === 0 ? (
              <p className="text-gray-500 text-sm sm:text-base">No checks yet.</p>
            ) : (
              <ul className="space-y-2">
                {history.map((item, i) => (
                  <li
                    key={i}
                    className="p-2 sm:p-3 border rounded-lg bg-gray-50 text-xs sm:text-sm flex justify-between truncate"
                  >
                    <span className="truncate">{item.news.slice(0, 40)}...</span>
                    <span
                      className={`px-2 py-1 rounded text-white text-xs sm:text-sm ${
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

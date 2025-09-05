import { useState, useEffect } from "react";

function News() {
  const [news, setNews] = useState("");
  const [result, setResult] = useState(null);
  const [trustedNews, setTrustedNews] = useState([]);

  useEffect(() => {
    const fetchTrustedNews = async () => {
      const res = await fetch("http://127.0.0.1:5000/trusted-news");
      const data = await res.json();
      setTrustedNews(data.trusted_news || []);
    };
    fetchTrustedNews();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://127.0.0.1:5000/predict", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: news }),
    });

    const data = await response.json();
    setResult(data);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Fake News Detector 📰</h1>

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
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Check News
          </button>
        </form>

        {result && (
          <div className="mt-6 p-4 border rounded-lg bg-gray-50 space-y-2">
            <p><strong>Prediction:</strong> {result.label}</p>
            <p><strong>Sentiment:</strong> {result.sentiment}</p>
            <p><strong>Polarity Score:</strong> {result.polarity_score}</p>
            <p><strong>Fact Check:</strong> {result.fact_check}</p>

            {result.fact_check_articles && result.fact_check_articles.length > 0 && (
              <ul className="list-disc pl-5 space-y-1">
                {result.fact_check_articles.map((art, i) => (
                  <li key={i}>
                    <a href={art.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                      {art.title}
                    </a> <span className="text-gray-500">({art.source})</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>

      {/* Trusted News */}
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md mt-6">
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
              </a> <span className="text-gray-500">({article.source})</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default News;

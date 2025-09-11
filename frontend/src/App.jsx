import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import News from "./pages/News";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import About from "./pages/About";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState(null);

  // ✅ Check localStorage on first load
  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUser = localStorage.getItem("username");

    if (token) {
      setIsAuthenticated(true);
      if (storedUser) setUsername(storedUser);
    }
  }, []);

  return (
    <Router>
      <Navbar
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
        username={username}
        setUsername={setUsername}
      />
      <main className="p-1 bg-gradient-to-r from-blue-400 to-indigo-600 h-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />

          {/* ✅ If logged in, go directly to News page */}
          <Route
            path="/login"
            element={
              isAuthenticated ? (
                <Navigate to="/detect" replace />
              ) : (
                <Login
                  setIsAuthenticated={setIsAuthenticated}
                  setUsername={setUsername}
                />
              )
            }
          />

          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />

          {/* ✅ Protect News Page */}
          <Route
            path="/detect"
            element={isAuthenticated ? <News /> : <Navigate to="/login" replace />}
          />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;

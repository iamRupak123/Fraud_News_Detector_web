import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import News from "./pages/News";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import About from "./pages/About";
// import NewsDetection from "./pages/NewsDetection";
import { useState } from "react";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Navbar />
      <main className="p-1 bg-gradient-to-r from-blue-400 to-indigo-600 h-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/detect"
            element={
              isAuthenticated ? <News /> : <Navigate to="/login" replace />
            }
          />
        </Routes>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
 

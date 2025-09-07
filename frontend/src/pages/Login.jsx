import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function Login({ setIsAuthenticated }) {
  const [form, setForm] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (res.ok) {
      toast.success("Login successful!");
      setIsAuthenticated(true);
      navigate("/detect");
    } else {
      toast.error(data.message || "Invalid credentials");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-100 to-gray-200 px-4 sm:px-6 md:px-8">
      <div className="bg-white border shadow-lg p-6 sm:p-8 md:p-10 rounded-lg w-full max-w-md">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-center">
          Login
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <input
            type="text"
            placeholder="Username"
            value={form.username}
            onChange={(e) => setForm({ ...form, username: e.target.value })}
            className="w-full border p-2 sm:p-3 rounded-lg text-sm sm:text-base outline-none focus:ring focus:ring-blue-400"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="w-full border p-2 sm:p-3 rounded-lg text-sm sm:text-base outline-none focus:ring focus:ring-blue-400"
            required
          />
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              type="submit"
              className="w-full sm:w-1/2 bg-green-600 text-white p-2 sm:p-3 rounded-lg hover:bg-green-700 transition"
            >
              Login
            </button>
            <button
              type="button"
              onClick={() => navigate("/register")}
              className="w-full sm:w-1/2 bg-blue-800 text-white p-2 sm:p-3 rounded-lg hover:bg-blue-900 transition"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;

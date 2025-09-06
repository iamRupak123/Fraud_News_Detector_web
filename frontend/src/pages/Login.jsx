import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function Login({ setIsAuthenticated }) {
  const [form, setForm] = useState({ email: "", password: "" });
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
    <div className="flex justify-center items-center h-[87vh]   ">
      <div className="bg-white border-2  shadow-lg p-8 rounded-lg w-full h-[55vh] max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-10">
          <input
            type="text"
            placeholder="Username"
            value={form.username}
            onChange={(e) => setForm({ ...form, username: e.target.value })}
            className="w-full border  p-2 rounded outline-none"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="w-full border outline-none p-2 rounded"
            required
          />
          <div className=" flex items-center justify-between space-x-3">
          <button
            type="submit"
            className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700"
          >
            Login
          </button>
            <button
            type="button"
            onClick={()=>{navigate("/register")}} 
            className="w-full bg-blue-800 text-white p-2 rounded hover:bg-blue-900"
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

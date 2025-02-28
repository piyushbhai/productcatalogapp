"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";
import { useAuth } from "../Hooks/useAuth";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { login } = useAuth(); 

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      let data = JSON.stringify({
        "username": username,
        "password": password
      });
      
      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://localhost:5000/auth/login',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
      
      let res = await axios.request(config)

      login(res.data.token);
      if(res.data.token){
        localStorage.setItem("token",res.data.token)
      } 
      router.push("/");
      router.refresh();
    } catch (error) {
      setMessage("Invalid credentials!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-10 mx-auto border border-gray-40 rounded-lg">
      <h2 className="text-xl font-bold mb-4 text-light">Login</h2>
      {message && <p className="text-red-500">{message}</p>}
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          className="p-2 border w-full mb-2 rounded-lg"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 border rounded-lg w-full mb-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="p-2 bg-blue-500 text-white rounded w-full" type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
        <p className="text-center text-light mt-4">
          Don't have an account? <Link href="/register" className="text-blue-500">Register</Link>
        </p>
      </form>
    </div>
  );
}

"use client";

import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const sendResetLink = async () => {
    try {
      setLoading(true);
      await axios.post("/api/users/forgotpassword", { email });
      toast.success("Reset link sent to your email");
    } catch (err: any) {
      toast.error(err.response?.data?.error || "Failed to send reset link");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="bg-gray-900 p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl text-white mb-4">Forgot Password</h1>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full px-4 py-2 mb-4 rounded-lg bg-gray-800 text-white focus:outline-none"
        />
        <button
          onClick={sendResetLink}
          className="w-full py-2 bg-purple-600 hover:bg-green-700 text-white rounded-lg"
          disabled={loading || !email}
        >
          {loading ? "Sending..." : "Send Reset Link"}
        </button>
      </div>
    </div>
  );
}

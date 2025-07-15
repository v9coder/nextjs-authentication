"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";

export default function ResetPasswordPage() {
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const urlToken = searchParams.get("token");
    if (urlToken) setToken(urlToken);
  }, [searchParams]);

  const resetPassword = async () => {
    try {
      await axios.post("/api/users/resetpassword", { token, newPassword: password });
      toast.success("Password reset successfully!");
      router.push("/login");
    } catch (err: any) {
      toast.error(err.response?.data?.error || "Reset failed");
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="bg-gray-900 p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl text-white mb-4">Reset Password</h1>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter new password"
          className="w-full px-4 py-2 mb-4 rounded-lg bg-gray-800 text-white focus:outline-none"
        />
        <button
          onClick={resetPassword}
          className="w-full py-2 bg-purple-600 hover:bg-green-700 text-white rounded-lg"
          disabled={!password}
        >
          Reset Password
        </button>
      </div>
    </div>
  );
}

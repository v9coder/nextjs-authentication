"use client";

import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

export default function VerifyEmailPage() {
  const [token, setToken] = useState("");
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const verifyUserEmail = async () => {
    try {
      await axios.post("/api/users/verifyemail", { token });
      setVerified(true);
      toast.success("Email verified successfully!");
    } catch (error: any) {
      setError(true);
      console.error(error?.response?.data || error.message);
      toast.error("Verification failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const urlToken = new URLSearchParams(window.location.search).get("token");
    setToken(urlToken || "");
  }, []);

  useEffect(() => {
    if (token.length > 0) {
      verifyUserEmail();
    }
  }, [token]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0d1117] text-white px-4">
      <h1 className="text-4xl font-bold mb-4 text-blue-400">Email Verification</h1>

      {loading && <p className="text-gray-400">Verifying your email...</p>}

      {!loading && verified && (
        <div className="text-center bg-green-800 px-6 py-4 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-2 text-green-300">Email Verified</h2>
          <p className="mb-4">You can now login to your account.</p>
          <Link
            href="/login"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded transition"
          >
            Go to Login
          </Link>
        </div>
      )}

      {!loading && error && (
        <div className="text-center bg-red-800 px-6 py-4 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-2 text-red-300">Invalid or Expired Link</h2>
          <p className="mb-2 text-gray-300">Please try signing up again or request a new verification email.</p>
        </div>
      )}
    </div>
  );
}

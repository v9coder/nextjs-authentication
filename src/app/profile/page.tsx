"use client";
import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();
  const [data, setData] = useState("nothing");
  const [loading, setLoading] = useState(false);

  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("🚪 Logged out successfully");
      router.push("/login");
    } catch (error: any) {
      console.error(error.message);
      toast.error("Logout failed: " + error.message);
    }
  };

  const getUserDetails = async () => {
    try {
      setLoading(true);
      const res = await axios.get("/api/users/me");
      setData(res.data.data._id);
      toast.success("User ID fetched!");
    } catch (error: any) {
      console.error(error.message);
      toast.error("Failed to fetch user: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0d1117] text-white px-4">
      <div className="bg-[#161b22] shadow-xl rounded-2xl p-8 w-full max-w-md border border-[#30363d]">
        <h1 className="text-3xl font-bold mb-4 text-center text-blue-400">👤 Profile Page</h1>
        <p className="text-center mb-6 text-gray-400">Welcome to your profile dashboard</p>

        <div className="text-center mb-4">
          <h2 className="text-md font-semibold mb-2 text-gray-300">Your User ID:</h2>
          <div className="p-2 rounded bg-[#238636]/10 text-green-400 font-mono break-all transition-all duration-300">
            {data === "nothing" ? "No data yet" : <Link href={`/profile/${data}`} className="hover:underline">{data}</Link>}
          </div>
        </div>

        <div className="flex flex-col gap-3 mt-6">
          <button
            onClick={getUserDetails}
            disabled={loading}
            className="bg-green-600 hover:bg-green-700 disabled:opacity-50 text-white font-semibold py-2 px-4 rounded transition duration-200"
          >
            {loading ? "Fetching..." : "Get User Details"}
          </button>

          <button
            onClick={logout}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded transition duration-200"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

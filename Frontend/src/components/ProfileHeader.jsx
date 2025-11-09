// src/components/ProfileHeader.jsx
import React from "react";

export default function ProfileHeader({ name, onLogout }) {

  const handleLogout=()=>{
    console.log("user logout");
    localStorage.removeItem("token");
    window.location.href="/login";


  };
  return (
    <div className="flex items-center gap-4 p-4 w-full">

      {/* Profile Image */}
      <div className="w-20 h-20 bg-gray-300 rounded-full flex justify-center items-center text-3xl">
        👤
      </div>

      {/* User Name */}
      <div>
        <h2 className="text-2xl font-semibold">{name}</h2>
        <p className="text-gray-600">Vehicle Owner</p>
      </div>

      {/* ✅ Logout Button (aligned right) */}
      <button
        onClick={handleLogout}
        className="ml-auto px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
      >
        Logout
      </button>
    </div>
  );
}

import React from "react";

import { useNavigate } from "react-router-dom";
export default function ServiceHeader({ onRequestService }) {
  const navigate=useNavigate();
  const others="others";
  return (
    <div className="relative w-full h-60 mb-6 ">  
      <img
        src="https://images.unsplash.com/photo-1503376780353-7e6692767b70"
        alt="Service Banner"
        className="w-full h-full object-cover rounded-lg"
      />

      <button
        onClick={()=>navigate(`/services/request/${others}`)}
        className="absolute top-3 right-3 bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
      >
        Request Service
      </button>
    </div>
  );
}

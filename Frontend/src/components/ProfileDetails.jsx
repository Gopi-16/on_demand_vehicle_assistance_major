// src/components/ProfileDetails.jsx
import React from "react";

export default function ProfileDetails({ carNumber, mobile, email }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white p-4 rounded shadow">
      
      <div>
        <p className="text-gray-500">Car Number</p>
        <h3 className="font-semibold">{carNumber}</h3>
      </div>

      <div>
        <p className="text-gray-500">Mobile</p>
        <h3 className="font-semibold">{mobile}</h3>
      </div>

      <div>
        <p className="text-gray-500">Email</p>
        <h3 className="font-semibold">{email}</h3>
      </div>

    </div>
  );
}

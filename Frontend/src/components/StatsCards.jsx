// src/components/StatsCards.jsx
import React from "react";

export default function StatsCards({ total, completed, rejected }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
      
      <div className="p-4 bg-blue-100 rounded shadow text-center">
        <p className="text-gray-600">Total Requests</p>
        <h2 className="text-xl font-bold">{total}</h2>
      </div>

      <div className="p-4 bg-green-100 rounded shadow text-center">
        <p className="text-gray-600">Completed</p>
        <h2 className="text-xl font-bold">{completed}</h2>
      </div>

      <div className="p-4 bg-red-100 rounded shadow text-center">
        <p className="text-gray-600">Rejected</p>
        <h2 className="text-xl font-bold">{rejected}</h2>
      </div>

    </div>
  );
}

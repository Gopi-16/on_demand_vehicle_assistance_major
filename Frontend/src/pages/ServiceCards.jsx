import React from "react";
import { useState } from "react";
const services = [
  { name: "Fuel Delivery", image: "⛽" },
  { name: "Breakdown", image: "🛠️" },
  { name: "Not Starting", image: "🚗" },
  { name: "Tire Puncture", image: "🛞" },
  { name: "Battery Down", image: "🔋" },
  { name: "Others", image: "❓" },
];

export default function ServiceCards({ onSelect }) {
  const [selectedService, setSelectedService] = useState(null);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
      {services.map((service, index) => (
        <div
          key={index}
          onClick={() => onSelect(service.name)}
          className="
            cursor-pointer
            bg-white/30 backdrop-blur-md 
            shadow-md 
            rounded-2xl 
            p-6
            border border-gray-200 
            transition transform 
            hover:-translate-y-1 hover:shadow-xl
          "
        >
          <div className="text-5xl mb-4">{service.image}</div>

          <h3 className="text-xl font-semibold">{service.name}</h3>

          <p className="text-gray-600 text-sm mt-2">
            {service.name === "Fuel Delivery" && "Instant fuel at your location"}
            {service.name === "Breakdown" && "Emergency breakdown support"}
            {service.name === "Not Starting" && "Fix your non-starting vehicle"}
            {service.name === "Tire Puncture" && "Quick puncture repair"}
            {service.name === "Battery Down" && "Jumpstart or battery service"}
            {service.name === "Others" && "Other vehicle-related issues"}
          </p>
          
        </div>
      ))}
    </div>
  );
}

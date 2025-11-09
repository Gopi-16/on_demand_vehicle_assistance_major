
function cleanAddress(address) {
  if (!address) return "Unknown";

  let parts = address.split(",").map(p => p.trim());

  // ✅ Return last 2 parts (most readable)
  if (parts.length >= 4) {
    
    return parts.slice(-4).join(", ");
  }

  return parts[0]; // fallback
}

export default function PendingRequestCard({
  repairType,
  location,
  mechanicNumber,
  name,
}) {   const shortAddress = cleanAddress(location);
  return (
    <div className="w-60 border p-4 rounded-xl shadow bg-white flex flex-col items-center text-center">
      
      {/* Profile Icon */}
      <div className="text-5xl mb-2">👤</div>

      {/* Mechanic Name */}
      <h3 className="text-lg font-semibold">{name}</h3>

      {/* Repair Type */}
      <p className="text-gray-700 text-sm mt-1">{repairType}</p>

      {/* Location */}
      <p className="text-gray-500 text-sm mt-1">
         {shortAddress}
      </p>

      {/* Contact Number */}
      <p className="text-gray-600 font-medium mt-1">
        📞 {mechanicNumber}
      </p>

    </div>
  );
}

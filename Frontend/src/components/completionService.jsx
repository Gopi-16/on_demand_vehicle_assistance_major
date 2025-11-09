import axios from "axios";
import { useEffect, useState } from "react";

// Dummy address logic (replace if needed)
function cleanAddress(address) {
  return address || "Unknown Location";
}

export default function AcceptedServiceCard({ req }) {
    console.log(req)
  const [mechanicName, setMechanicName] = useState(null);
  const [mechanicNumber, setMechanicNumber] = useState(null);
  const [location, setLocation] = useState(null);
  const [serviceId, setServiceId] = useState(null);

  const [visible, setVisible] = useState(false); // ✅ show only when API returns success

  // ✅ Fetch accepted service if exists
  const showAcceptedService = async () => {
    try {
        //console.log("showaccept req state",req.mobile,req)
      const response = await axios.post(
        "http://localhost:8000/api/mechanic/request/showaccept",
        {req}
      );

      // ✅ If no accepted service found
      if (response.status !== 200) return;
      console.log("response form the showaccept",response)
      const data = response.data;

      setMechanicName(data.mechanic_name);
      setMechanicNumber(data.mechanic_mobile);
      setLocation(`${data.mechanic_latitude}, ${data.mechanic_longitude}`);
      setServiceId(data.service_id);

      setVisible(true); // ✅ Show card
    } catch (error) {
      console.log("No accepted service found",error);
      setVisible(false);
    }
  };

  useEffect(() => {
    showAcceptedService();
  }, [req.mobile]); // ✅ Run whenever logged user changes

  // ✅ Complete Service Handler
  const handleComplete = async () => {
    if (!serviceId) return;

    try {
      const response = await axios.post(
        "http://localhost:8000/api/mechanic/request/complete",
        { service_id: serviceId }
      );

      console.log("Service Completed:", response.data);

      alert("Service marked as completed!");

      setVisible(false); // ✅ Hide card
    } catch (error) {
      console.error("Error completing service:", error);
    }
  };

  if (!visible) return null; // ✅ No card = return nothing

  return (
    <div className="w-60 border p-4 mt-4 rounded-xl shadow bg-white flex flex-col items-center text-center">
      {/* Profile Icon */}
      <div className="text-5xl mb-2">✅</div>

      {/* Mechanic Name */}
      <h3 className="text-lg font-semibold">{mechanicName}</h3>

      {/* Accepted Label */}
      <p className="text-green-600 font-medium mt-1">Service Accepted</p>

      {/* Location */}
      <p className="text-gray-500 text-sm mt-1">{cleanAddress(location)}</p>

      {/* Contact Number */}
      <p className="text-gray-700 font-medium mt-1">📞 {mechanicNumber}</p>

      {/* ✅ Complete Button */}
      <button
        onClick={handleComplete}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Complete
      </button>
    </div>
  );
}

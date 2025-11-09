import { useState, useEffect } from "react";
import axios from "axios";

export default function Fetched_mechanics({ req }) {
  const [services, setServices] = useState([]);

  const fetchMechanicRequests = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/mechanic/requests",
        { mechanic_mobile: req.mechanic_mobile }
      );

      if (response.data.requested_service) {
        setServices(response.data.requested_service);
      } else {
        setServices([]);
      }
    } catch (error) {
      console.error("Error fetching mechanic services:", error);
    }
  };

  useEffect(() => {
    fetchMechanicRequests();
  }, [req.mobile]);

  // ✅ Handle Accept
  const handleAccept = (notification_id) => {
    console.log("Accepted:", notification_id);
    axios.post(
      "http://localhost:8000/api/mechanic/request/accept",
      { notification_id }
    ).then((res) => {
      console.log("Service accepted:", res.data);
      // Optionally refresh the list
      fetchMechanicRequests();
    }).catch((err) => {
      console.error("Error accepting service:", err);
    });
    // Call API to accept (if needed)
  };

  // ✅ Handle Reject
  const handleReject = (notification_id) => {
    console.log("Rejected:", notification_id);
    axios.post(
      "http://localhost:8000/api/mechanic/request/reject",
      { notification_id }
    ).then((res) => {
      console.log("Service rejected:", res.data);
      // Optionally refresh the list
      fetchMechanicRequests();
    }).catch((err) => {
      console.error("Error rejecting service:", err);
    });
    // Call API to reject (if needed)
  };

  return (
    <div className="mt-4">
      <h2 className="text-xl font-semibold mb-4">Requested Services</h2>

      {services.length === 0 ? (
        <p className="text-gray-500">No service requests</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md rounded-lg p-4 border border-gray-200"
            >
              <h3 className="text-lg font-semibold text-blue-600">
                {service.issue_description}
              </h3>

              <p className="mt-1">
                <strong>Customer Mobile:</strong> {service.customer_mobile}
              </p>

              {service.latitude && service.longitude && (
                <p className="text-sm text-gray-700">
                  <strong>Location:</strong> {service.latitude}, {service.longitude}
                </p>
              )}

              {/* ✅ Buttons */}
              <div className="flex gap-3 mt-4">
                <button
                  onClick={() => handleAccept(service.notification_id)}
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                >
                  Accept
                </button>

                <button
                  onClick={() => handleReject(service.notification_id)}
                  className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                >
                  Reject
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

import React, { useState } from "react";
import ServiceHeader from "./ServiceHeader";
import ServiceCards from "./ServiceCards";
import ServiceForm from "./Service_Form";
import { useNavigate } from "react-router-dom";

export default function ServicePage() {
  const [selectedService, setSelectedService] = useState(null);
  const navigate = useNavigate();
  const services = {
    "Fuel Delivery":"fuel",
    "Breakdown":"breakdown",
    "Not Starting":"not-starting",
    "Tire Puncture":"tire-puncture",
    "Battery Down":"battery-down",
    "Others":"others"
  }
  return (
    <div className="p-6">
     <ServiceHeader onRequestService={() => setSelectedService("General Request")} />

      {!selectedService && (
        <ServiceCards onSelect={(service) => {setSelectedService(service);navigate("/services/request"+`/${services[service]}`)}} />
      )}

      {/* {selectedService && (
        <ServiceForm
          selectedService={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )} */}
    </div>
  );
}

// src/pages/ProfilePage.jsx
import React, { useEffect, useState } from "react";
import ProfileHeader from "../components/ProfileHeader";
import ProfileDetails from "../components/ProfileDetails";
import StatsCards from "../components/StatsCards";
import PendingRequestCard from "../components/PendingRequestCard";
import axios from "axios";
import Fetched_mechanics from "../components/FetchingmechanicAssinged";
import AcceptedServiceCard from "../components/completionService";

import Fetched_mechanicRequests from "../components/fetchedMechanicRequests";
export default function ProfilePage() {
  const token = localStorage.getItem("token");

  const [userData, setUserData] = useState(null);
  const [stats, setStats] = useState(null);
  const [pendingRequests, setPendingRequests] = useState([]);
  const [type, setType] = useState(null);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/auth/profile",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Profile API:", response.data);
      setType(response.data.is_mechanic);
      setUserData(response.data.user_details);
      setStats(response.data.stats);
      setPendingRequests(response.data.pending_requests);
    } catch (error) {
      console.error("Error fetching profile data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!userData || !stats) {
    return <div className="p-6">Loading...</div>;
  }

  return (
    <div className="p-6">
      {/* Profile Image + Name */}
      <ProfileHeader name={userData.username} />

      {/* Profile Details */}
      <ProfileDetails
        carNumber={userData.vehicle_number}
        mobile={userData.mobile}
        email={userData.email}
      />

      {/* Stats */}
      <StatsCards
        total={stats.total}
        completed={stats.completed}
        rejected={stats.rejected}
      />

     {/* Pending Requests */}
    {type==false ?(<>
    <h2 className="text-xl font-semibold mt-6">Available Mechanics</h2>

    <Fetched_mechanics req={{ mobile: userData.mobile }} /></>): 
    
    (<><Fetched_mechanicRequests req={{mechanic_mobile:userData.mobile}}/> </>)
    }
    
    <AcceptedServiceCard req={{mobile:userData.mobile}}/>
    </div>
  );
}

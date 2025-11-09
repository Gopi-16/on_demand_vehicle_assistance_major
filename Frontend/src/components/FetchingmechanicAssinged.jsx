import { useEffect, useState } from "react";
import axios from "axios";
import PendingRequestCard from "./PendingRequestCard";

export default function Fetched_mechanics({ req }) {
  const [mechanics, setMechanics] = useState([]);

  useEffect(() => {
    axios
      .post(
        `http://localhost:8000/api/mechanic/available`,
        {
          
          customer_mobile:req.mobile,   // ✅ SEND USER MOBILE HERE
        }
      )
      .then((res) => {setMechanics(res.data.mechanics);console.log(mechanics);})
      .catch((err) => console.log(err));
  }, [ req.mobile]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-4">
      {mechanics.map((m) => (
        <PendingRequestCard name={m.name}
          key={m._id}
          repairType={m.specialist || "Mechanic"}
          location={m.location || "Unknown"}
          mechanicNumber={m.mobile}
        />
      ))}
    </div>
  );
}

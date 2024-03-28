import React, { useState } from "react";
import DisplayCard from "./DisplayCard";
import "./FaultHistory.css";

const FaultHistory = () => {
  const [data, setData] = useState([
    {
      description: "Dummy fault 1",
      timestamp: "2024-03-28T10:30:00Z" // Example timestamp
    },
    {
      description: "Dummy fault 2",
      timestamp: "2024-03-27T15:45:00Z" // Example timestamp
    },
  ]);
  

  return (
    <div className="Fault-history">
      <p className="fault-history-text">Fault History2</p>
      {data.map(entry => (
        <DisplayCard
          key={entry.fault_history_id}
          description={entry.description}
          timestamp={entry.timestamp}
        />
      ))}
    </div>
  );
};

export default FaultHistory;

import React from "react";
import "./UserProfile2.css";
import Box3 from "./blocks/Box3";
import Box4 from "./blocks/Box4";
import CarImage from "./blocks/CarImage";
import DashboardMap from "./blocks/DashboardMap";

const UserProfile2 = () => {
  const position = [51.505, -0.09];

  return (

    <div className="user-profile-2">
      <div className="user-profile-2-card-1">
        <CarImage />
      </div>
      <div className="user-profile-2-card-1">
        <DashboardMap />
      </div>
      <div className="user-profile-2-card-1">
        <Box3 />
      </div>
      <div className="user-profile-2-card-1">
        <Box4 />
      </div>
    </div>
  );
};

export default UserProfile2;

import React from "react";
import "./UserProfile.css";

const UserProfile = () => {
  const batteryLevel = 70;
  return (
    <div className="user-page">
      <div className="row0"></div>
      <div className="row1">
        <div className="box0">{/* Content for the first box */}</div>
        <div className="box1">
          <div className="battery-indicator">
            <div
              className="battery-level"
              style={{ width: `${batteryLevel}%` }}
            ></div>
          </div>
        </div>
        <div className="box2">{/* Content for the second box */}</div>
      </div>
      <div className="row2">
        <div className="box0">{/* Content for the first box */}</div>
        <div className="box3">{/* Content for the third box */}</div>
        <div className="box4">{/* Content for the fourth box */}</div>
      </div>
      <div className="row0"></div>
    </div>
  );
};

export default UserProfile;

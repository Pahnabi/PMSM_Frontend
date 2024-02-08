import React from "react";
import "./UserProfile.css";

const UserProfile = () => {
  const batteryLevel = 70;
  const inlineStyles = {
    stroke: `#8bc34a`,
    strokedashoffset: `calc(440 - (440 * 69) / 100)`,
    // animation: animate 1s linear forwards;
  };

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
        <div className="box2">
          {/* Content for the second box */}
          <div className="evhealth-percent">
            <svg>
              <circle cx="70" cy="70" r="70"></circle>
              <circle cx="70" cy="70" r="70"></circle>
            </svg>
            <div className="evhealth-number">
              <h2>
                60 <span>%</span>
              </h2>
            </div>
          </div>
        </div>
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

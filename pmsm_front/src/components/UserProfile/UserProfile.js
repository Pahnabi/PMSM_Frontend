import React from "react";
import "./UserProfile.css";
import carimg from "../../Media/car5.png"
import BatteryComponent from "./blocks/Battery"
import EVHealth from "./blocks/EVHealth"

const UserProfile = () => {
  const batteryLevel = 70;
  const inlineStyles = {
    stroke: `#8bc34a`,
    strokedashoffset: `calc(440 - (440 * 69) / 100)`,
    // animation: animate 1s linear forwards;
  };

  return (
    <div className="user-profile">
      <div className="user-profile-left">
        <img src={carimg}/>
      </div>
      <div className="user-profile-right">
        <div className="user-profile-right-top">
          <div className="user-profile-box-1">
            <BatteryComponent />
          </div>
          <div className="user-profile-box-2">
            <EVHealth percentage={85} />
          </div>
        </div>
        <div className="user-profile-right-bottom">
          <div className="user-profile-box-3"></div>
          <div className="user-profile-box-4"></div>
        </div>

      </div>
    </div>
  );
};

export default UserProfile;

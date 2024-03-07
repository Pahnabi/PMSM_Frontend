import React from "react";
import "./UserProfile.css";
import carimg from "../../Media/car5.png"
import BatteryComponent from "./blocks/Battery"
import EVHealth from "./blocks/EVHealth"
import EVHealth2 from "./blocks/EVHealth2";

const UserProfile = () => {
  
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
            <EVHealth percentage={90} />
          </div>
        </div>
        <div className="user-profile-right-bottom">
          <div className="user-profile-box-3">
            <div className="battery__card">
              <EVHealth2/></div>  
          </div>
          <div className="user-profile-box-4">
          <div className="battery__card"></div>  

          </div>
        </div>

      </div>
    </div>
  );
};

export default UserProfile;

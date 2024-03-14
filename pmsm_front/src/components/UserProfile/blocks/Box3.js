import React from "react";
import "./Box3.css";
import BatteryComponent from "./BatteryComponent";
import EVHealth from "./EVHealth";

const Box3 = () => {
  return (
    <div className="user-profile-box3">
      <div className="battery-info">
        <BatteryComponent />
        <div className="evhealth">
          <EVHealth healthvalue={80} />
        </div>
      </div>
      <div className="energy-usage">Ipsum </div>
    </div>
  );
};

export default Box3;

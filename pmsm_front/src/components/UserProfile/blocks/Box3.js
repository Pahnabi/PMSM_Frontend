import React from "react";
import "./Box3.css";
import BatteryComponent from "./BatteryComponent";
import EVHealth from "./EVHealth";
import WeatherData from "./WeatherData";
import ChargeHistory from "./ChargeHistory";

const Box3 = () => {
  // return (
  //   <div className="user-profile-box3">
  //     <div className="battery-info">
  //       <BatteryComponent />
  //       <div className="evhealth">
  //         <EVHealth healthvalue={80} />
  //       </div>
  //     </div>
  //     <div className="energy-usage">
  //       <WeatherData />
  //       <ChargeHistory/>
  //     </div>
  //   </div>
  // );
  return (

    <div className="box3">
      <div className="box3-card-1">
      <BatteryComponent />
      </div>
      <div className="box3-card-1">
        
      </div>
      <div className="box3-card-1">
      <div className="evhealth">
         <EVHealth healthvalue={80} />
      </div>
      </div>
      <div className="box3-card-1">
      </div>
    </div>
  );
};

export default Box3;

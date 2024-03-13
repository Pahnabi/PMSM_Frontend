import React from "react";
import "./Box3.css";
import BatteryComponent from "./Battery";

const Box3 = () => {
    return(
        <div className="user-profile-box3">
            <div className="charging-info"><BatteryComponent/> </div>
            <div className="energy-usage"><BatteryComponent/> </div>
        </div>
    )
};

export default Box3;
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import React from "react";
import { render } from "react-dom";
import "./EVHealth.css";

const EVHealth = ({percentage}) => {

    const bgclr1 = (percentage) => {
        if(percentage < 20) {
            return "linear-gradient(90deg, hsl(7, 89%, 46%) 15%, hsl(11, 93%, 68%) 100%)";
        } else if(percentage < 40) {
            return "linear-gradient(90deg, hsl(22, 89%, 46%) 15%, hsl(54, 90%, 45%) 100%)";
        }  else if(percentage < 80){
            return "linear-gradient(90deg, hsl(54, 89%, 46%) 15%, hsl(92, 90%, 45%) 100%)";
        }
        else {
            return "linear-gradient(90deg, hsl(92, 89%, 46%) 15%, hsl(92, 90%, 68%) 100%)";
        }
    }

    const bgclr2 = (percentage) => {
        if(percentage < 20) {
            return "hsl(11, 93%, 68%)";
        } else if(percentage < 40) {
            return "hsl(54, 90%, 45%)";
        }  else if(percentage < 80){
            return "hsl(92, 90%, 45%)";
        }
        else {
            return "hsl(92, 90%, 68%)";
        }
    }

    return (
        <div className="battery__card">
            <div className="battery__card__2">
            <div className="battery__health" style={{ width: 200, height: 200 }}>
            <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            background
            backgroundPadding={6}
            styles={buildStyles({
            backgroundColor: `${bgclr2(percentage)}`,
            textColor: "#fff",
            pathColor: "#fff",
            trailColor: "transparent"
            })}
        />
        </div>
        </div>
      </div> 
    );
}

export default EVHealth;
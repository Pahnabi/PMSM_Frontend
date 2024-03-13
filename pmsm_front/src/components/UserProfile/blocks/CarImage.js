import React from "react";
import "./CarImage.css";
import carimg from "../../../Media/car5.png";

const CarImage = () => {
    return (
        <div className="car-image-box">
          <div className="car-image-box-overlay-text">
            Hello <span>User</span>
          </div>
          <img src={carimg} />
        </div>
    )
};

export default CarImage;
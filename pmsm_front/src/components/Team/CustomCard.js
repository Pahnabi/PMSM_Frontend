import React from "react";
import "./CustomCard.css"

const CustomCard = ({ imageSrc, title, description }) => {
  return (
    <div className="custom-card" style={{ width: "18rem" , margin : "5vh"}}>
      <img src={imageSrc} className="card-img-top" alt="Card Image" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        {/* <a href="#" className="btn btn-primary">
          Learn More
        </a> */}
      </div>
    </div>
  );
};

export default CustomCard;

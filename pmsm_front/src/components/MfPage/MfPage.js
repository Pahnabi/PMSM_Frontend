import React from "react";
import "./MfPage.css";
import MfCarImg from "./blocks/MfCarImg";
import GraphCurrent from "./blocks/GraphCurrent";
import GraphFreq from "./blocks/GraphFreq";
import Box3 from "../UserProfile/blocks/Box3";
import FaultHistory from "./blocks/FaultHistory";
// import MfBox4 from "./blocks/MfBox4";
import ServiceHistory from "./blocks/ServiceHistory";

const MfPage = () => {
  return (
    <div className="mf-page">
      <div className="mf-page-card-1">
        <MfCarImg />
      </div>
      <div className="mf-page-card-1">
        <div className="box2">
          <div className="mf-cr-graph">
            <GraphCurrent />
          </div>
          <div className="mf-fr-graph">
            <GraphFreq />
          </div>
        </div>
      </div>
      <div className="mf-page-card-1">
        <Box3 />
      </div>
      <div className="mf-page-card-1">
        <div className="mf-page-box-4">
          <div className="mf-page-card-2">
            <FaultHistory />
          </div>
          <div className="mf-page-card-2">
            <ServiceHistory/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MfPage;

import React from "react";
import "./MfPage.css";
import MfCarImg from "./blocks/MfCarImg";
import GraphCurrent from "./blocks/GraphCurrent";
import GraphFreq from "./blocks/GraphFreq";
import Box3 from "../UserProfile/blocks/Box3";
// import Box2 from "./blocks/Box2";

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
      <div className="mf-page-card-1"></div>
    </div>
  );
};

export default MfPage;

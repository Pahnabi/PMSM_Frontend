import React from "react";
import "./MfPage.css"
import MfCarImg from "./blocks/MfCarImg";
import Box3 from "../UserProfile/blocks/Box3";
const MfPage = () =>{
    return(
        <div className="mf-page">
            <div className="mf-page-card-1">
                <MfCarImg/>
            </div>
            <div className="mf-page-card-1"></div>
            <div className="mf-page-card-1">
                <Box3/>
            </div>
            <div className="mf-page-card-1"></div>

        </div>
    );
};

export default MfPage;
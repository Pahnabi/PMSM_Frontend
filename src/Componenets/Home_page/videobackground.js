import React, { useState } from "react";
import "./videobackground.css";

const VideoBackground = () => {
  const [videoError, setVideoError] = useState(false);

  const handleVideoError = () => {
    setVideoError(true);
  };

  return (
    <div className="video-background">
      {videoError && (
        <div className="error-message">
          <p>
            Unable to load the video. Please check your internet connection or
            try again later.
          </p>
        </div>
      )}
      {!videoError && (
        <video autoPlay loop muted onError={handleVideoError}>
          <source src="/circuit.mp4" type="video/mp4" /> {/* Find a proper way to locate video */}
          Your browser does not support the video tag.
        </video>
      )}
      <div className="content">
        {" "}
        <h1>
          Empowering Mobility - Intelligent Monitoring and Management for
          Electric Vehicles
        </h1>
      </div>
    </div>
  );
};

export default VideoBackground;

// variables line 17 and line 47
import React, { useState, useEffect } from 'react';
import "./EVHealth2.css";

  
const RatingComponent = () => {
    const [ratingBlocks, setRatingBlocks] = useState([]);
  
    useEffect(() => {
      const blocks = [];
      for (let i = 1; i <= 100; i++) {
        const ratingBlockStyle = {
          transform: `rotate(${3.6 * i}deg)`,
        //   animationDelay: `${i / 40}s`,
        };
  
        if (i <= 90) {
          ratingBlockStyle.background = '#0f0';
          ratingBlockStyle.boxShadow = '0 0 15px #0f0, 0 0 30px #0f0';
        }
  
        blocks.push(
          <div
            key={i}
            className="ev_block"
            style={ratingBlockStyle}
          ></div>
        );
      }
      setRatingBlocks(blocks);
    }, []);
    return (
      <div>
        <div className="ev_rating">
          {ratingBlocks}
        </div>
      </div>
    );
};


const EVHealth2 = () => {
    return (
        <div className="ev_card">
            <div className="ev_rating">
                <RatingComponent />
                <h2><span className="ev_counter" data-target="">90% <br/> Health</span></h2>
                <div className="ev_block"></div>
            </div>
        </div>
    );
}
export default EVHealth2;


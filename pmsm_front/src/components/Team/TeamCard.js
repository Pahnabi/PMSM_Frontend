import React from "react";
import "./TeamCard.css";

function TeamCard() {
  return (
    <>
      <div className="team-card2">
        <div className="team-card2-img-avatar">
          <img src="https://placekitten.com/300/300" alt="" />
        </div>
        <div className="team-card2-text">
          <div
            className="portada"
            style={{
              backgroundImage: `url(
                "https://m.media-amazon.com/images/S/aplus-media/vc/cab6b08a-dd8f-4534-b845-e33489e91240._CR75,0,300,300_PT0_SX300__.jpg"
              )`,
            }}
          ></div>
          <div className="team-card2-title-total">
            <div className="team-card2-title">Ant Collector</div>
            <h2>Morgan Sweeney</h2>

            <div className="team-card2-desc">
              Morgan has collected ants since they were six years old and now
              has many dozen ants but none in their pants.
            </div>
            <div className="team-card2-icons">
              <button>
                <i className="far fa-heart"></i>
              </button>
              <button>
                <i className="far fa-envelope"></i>
              </button>
              <button>
                <i className="fas fa-user-friends"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default TeamCard;

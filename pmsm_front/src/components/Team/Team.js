import React from 'react';
import './Team.css';
import CustomCard from './CustomCard';

function Team() {
    return (
      <div className="team-page flex items-start justify-center h-screen">
        <h1 className="team-heading text-6xl font-extrabold font-mono text-center">
          Our Team
        </h1>
        <div className="team-content">
          <CustomCard
            imageSrc="https://placekitten.com/300/200" // Replace with your image URL
            title="Haraprasad Badajena"
            description="EE, IIT KGP"
          />
          <CustomCard
            imageSrc="https://placekitten.com/300/200" // Replace with your image URL
            title="Dikshant Sharma"
            description="IM, IIT KGP"
          />
          <CustomCard
            imageSrc="https://placekitten.com/300/200" // Replace with your image URL
            title="Sushant Singh"
            description="IM, IIT KGP"
          />
          <CustomCard
            imageSrc="https://placekitten.com/300/200" // Replace with your image URL
            title="Pahnabi Roy"
            description="IM, IIT KGP"
          />
          <CustomCard
            imageSrc="https://placekitten.com/300/200" // Replace with your image URL
            title="Shiv Singh"
            description="IM, IIT KGP"
          />
          <CustomCard
            imageSrc="https://placekitten.com/300/200" // Replace with your image URL
            title="Archie Avirati"
            description="IM, IIT KGP"
          />
        </div>
      </div>
    );
}
export default Team;

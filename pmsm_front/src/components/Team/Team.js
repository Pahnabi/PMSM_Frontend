import React from 'react';
import './Team.css';
import CustomCard from './CustomCard';

function Team() {
    return (
      <div className="team-page flex items-start justify-center h-screen">
        <h1 className="team-heading text-6xl font-extrabold font-mono text-center">
          Our Team
        </h1>
        <div className='team-content'>
          <CustomCard
            imageSrc="https://placekitten.com/300/200" // Replace with your image URL
            title="Custom Card Title"
            description="Some custom content for the card. You can customize this text based on your needs."
          />
          <CustomCard
            imageSrc="https://placekitten.com/300/200" // Replace with your image URL
            title="Custom Card Title"
            description="Some custom content for the card. You can customize this text based on your needs."
          />
          <CustomCard
            imageSrc="https://placekitten.com/300/200" // Replace with your image URL
            title="Custom Card Title"
            description="Some custom content for the card. You can customize this text based on your needs."
          />
        </div>
      </div>
    );
}
export default Team;

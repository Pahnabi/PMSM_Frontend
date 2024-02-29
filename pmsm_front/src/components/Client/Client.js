import React,{useEffect} from 'react';
import "./Client.css"; 
import AOS from "aos";
import "aos/dist/aos.css";

function About() {

    useEffect(() => {
      AOS.init({
      });
    }, []);
    return (
      <div className="about-page">
        <h1
          className="about-heading">
          Our Market Segments
        </h1>
        <p
          className="about-content"
        >
         <ul className="list-disc pl-6 mb-6">
          <li className="text-3xl">Battery Vendors</li>
          <li className="text-3xl">EV manufacturers</li>
          <li className="text-3xl">Energy companies</li>
        </ul>
        </p>
        <div className="image-about"></div>
      </div>
    );
}

export default About;


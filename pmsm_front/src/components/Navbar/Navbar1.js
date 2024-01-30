// Navbar1.js
import React, { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./Navbar1.css";
import LoginSignupModal from "../LoginSignup/LoginSignupModal";

function Navbar1() {
  const [scrolling, setScrolling] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: true,
    });
  };

  return (
    <div className={`navbar ${scrolling ? "solid" : "transparent"}`}>
      <div className="left-section">
        <img src="./Media/kgp_logo.png" alt="Logo" className="logo" />
        <h1 onClick={scrollToTop}>AI4ICPS</h1>
      </div>
      <div className="right-section">
        <ul>
          <li>
            <Link onClick={scrollToTop}>Home</Link>
          </li>
          <li>
            <Link to="about" spy={true} smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to="services" spy={true} smooth={true} duration={500}>
              Services
            </Link>
          </li>
          <li>
            <Link to="team" spy={true} smooth={true} duration={500}>
              Team
            </Link>
          </li>
          <li>
            <button onClick={() => setIsModalOpen(true)}>Login</button>
            {/* <button onClick={() => alert("Login karlo")}>Login</button> */}
          </li>
        </ul>
      </div>
      <LoginSignupModal isOpen={isModalOpen} onRequestClose={closeModal} />
    </div>
  );
}

export default Navbar1;

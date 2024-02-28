// Navbar1.js
/*import React, { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./Navbar1.css";

function Navbar1(props) {
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`navbar1 ${scrolling ? "solid" : "transparent"}`}>
      <div className="left-section">
        <img src="./Media/kgp_logo.png" alt="Logo" className="logo" />
        <h1 className="navbar-content-heading" onClick={scrollToTop}>AI4ICPS</h1>
      </div>
      <div className={`right-section ${menuOpen ? "open" : ""}`}>
        <div className="menu-icon" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul>
          <li>
            <Link to="home" onClick={() => { scrollToTop(); toggleMenu(); }}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" spy={true} smooth={true} duration={500} onClick={toggleMenu}>
              About
            </Link>
          </li>
          <li>
            <Link to="services" spy={true} smooth={true} duration={500} onClick={toggleMenu}>
              Services
            </Link>
          </li>
          <li>
            <Link to="team" spy={true} smooth={true} duration={500} onClick={toggleMenu}>
              Team
            </Link>
          </li>
          <li>
            {!props.loginstatus && (
              <button onClick={() => { props.setOpenModal(); toggleMenu(); }}>
                Login
              </button>
            )}
            {props.loginstatus && (
              <button onClick={() => { props.setOpenModal(); toggleMenu(); }}>
                Logout
              </button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar1;
*/
// Updated Navbar1.js

import React, { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./Navbar1.css";

function Navbar1(props) {
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`navbar1 ${scrolling ? "solid" : "transparent"}`}>
      <div className="left-section">
        <img src="./Media/kgp_logo.png" alt="Logo" className="logo" />
        <h1 className="navbar-content-heading" onClick={scrollToTop}>AI4ICPS</h1>
      </div>
      <div className={`right-section ${menuOpen ? "open" : ""}`}>
        <div className="menu-icon" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul>
          <li>
            <Link to="home" onClick={() => { scrollToTop(); toggleMenu(); }}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" spy={true} smooth={true} duration={500} onClick={toggleMenu}>
              About
            </Link>
          </li>
          <li>
            <Link to="services" spy={true} smooth={true} duration={500} onClick={toggleMenu}>
              Services
            </Link>
          </li>
          <li>
            <Link to="Client" spy={true} smooth={true} duration={500} onClick={toggleMenu}>
              Client
            </Link>
          </li>
          <li>
            <Link to="team" spy={true} smooth={true} duration={500} onClick={toggleMenu}>
              Team
            </Link>
          </li>
          <li>
            {!props.loginstatus && (
              <button onClick={() => { props.setOpenModal(); toggleMenu(); }}>
                Login
              </button>
            )}
            {props.loginstatus && (
              <button onClick={() => { props.setOpenModal(); toggleMenu(); }}>
                Logout
              </button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar1;

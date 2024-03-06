import React, { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./Navbar1.css";
import { useNavigate } from "react-router-dom";

function Navbar1(props) {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  useEffect(() => {
    const loggedInStatus = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(loggedInStatus === "true");
  }, []);

  const navigate = useNavigate();
  const [scrolling, setScrolling] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Initial check on component mount
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: true,
    });
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    console.log(sidebarOpen);
  };

  return (
    <div className={`navbar1 ${scrolling ? "solid" : "transparent"}`}>
      <div className="left-section">
        <img src="./Media/kgp_logo.png" alt="Logo" className="logo" />
        <h1 className="navbar-content-heading" onClick={scrollToTop}>
          AI4ICPS
        </h1>
      </div>
      {isMobile && (
        <div className="menu-toggle" onClick={toggleSidebar}>
          <i className="fas fa-bars"></i>
        </div>
      )}
      {isMobile ? (
        <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
          <ul>
            <li>
              <Link to="home" onClick={scrollToTop}>
                Home
              </Link>
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
              <Link to="client" spy={true} smooth={true} duration={500}>
                Client
              </Link>
            </li>
            <li>
              <Link to="team" spy={true} smooth={true} duration={500}>
                Team
              </Link>
            </li>
            {!props.loginstatus && (
              <li>
                <button
                  onClick={() => {
                    props.setOpenModal();
                  }}
                >
                  Login
                </button>
              </li>
            )}
            {props.loginstatus && (
              <li>
                <button
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      ) : (
        <div className="right-section">
          <ul>
            <li>
              <Link to="home" onClick={scrollToTop}>
                Home
              </Link>
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
              <Link to="client" spy={true} smooth={true} duration={500}>
                Client
              </Link>
            </li>
            <li>
              <Link to="team" spy={true} smooth={true} duration={500}>
                Team
              </Link>
            </li>
            {!isLoggedIn && (
              <li>
                <button
                  onClick={() => {
                    props.setOpenModal();
                  }}
                >
                  Login
                </button>
              </li>
            )}
            {isLoggedIn && (
              <li>
                <button
                  onClick={() => {
                    navigate("/");
                    localStorage.removeItem("authToken");
                    localStorage.removeItem("isLoggedIn");
                  }}
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar1;

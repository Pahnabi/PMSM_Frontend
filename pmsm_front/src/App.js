import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { HashRouter, Route, Routes } from "react-router-dom";
import Navbar1 from "./components/Navbar/Navbar1";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Team from "./components/Team/Team";
import Home from "./components/LandingPage/Home";
import Footer from "./components/Footer/Footer";
import Login from "./components/LoginSignup/Login";
import UserProfile from "./components/UserProfile/UserProfile"; // Import your UserProfile component
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <Router>
      <>
        <Navbar1 setOpenModal={toggleModal} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div id="home">
                  <Home />
                </div>
                <div id="about">
                  <About />
                </div>
                <div id="services">
                  <Services />
                </div>
                <div id="team">
                  <Team />
                </div>
                <Footer />
              </>
            }
          />

          <Route exact path="/profile" element={<UserProfile />} />
        </Routes>
        {modal && <Login setOpenModal={toggleModal} />}
      </>
    </Router>
  );
}

export default App;

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
import UserProfile from "./components/UserProfile/UserProfile";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [modal, setModal] = useState(false);
  const [loginstatus, setLoginstatus] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const toggleLoginstatus = () => {
    // alert("Login successful");
    setLoginstatus(!loginstatus);
  };

  // toast
  const notifysuccess = (c) => {
    toast.success(c, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      // transition: Bounce,
    });
  };
  const notifyerror = (c) => {
    toast.error("🦄 Wow so easy!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      // transition: Bounce,
    });
  };

  return (
    <Router>
      <>
        <Navbar1 setOpenModal={toggleModal} loginstatus={loginstatus} />
        <ToastContainer
        />
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
        {modal && (
          <Login
            setOpenModal={toggleModal}
            setToggleLogStatus={toggleLoginstatus}
            loginstatus={loginstatus}
            notifysuccess={notifysuccess}
          />
        )}
      </>
    </Router>
  );
}

export default App;

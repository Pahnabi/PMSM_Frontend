import React from "react";
// import Navbar from "./components/Navbar/Navbar";
import Navbar1 from "./components/Navbar/Navbar1";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Team from "./components/pages/Team";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Footer from "./components/Footer";
// import ContactForm from "./components/ContactForm/ContactForm";

// import VideoBackground from "./components/VideoBackground"

function App() {
  return (
    <React.Fragment>
      <div>
        <Navbar1 />
        <Home />
        <div id="about">
          <About />
        </div>
        <div id="services">
          <Services />
        </div>
        <div id="team">
          <Team />
        </div>
        <Login />
        {/* <ContactForm /> */}
        <Footer />
        {/*<Landingpage/>*/}
      </div>
    </React.Fragment>
  );
}

export default App;

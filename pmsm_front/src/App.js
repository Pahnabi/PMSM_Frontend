import React, {useState} from "react";
// import Navbar from "./components/Navbar/Navbar";
import Navbar1 from "./components/Navbar/Navbar1";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Team from "./components/Team/Team";
import Home from "./components/pages/Home";
import Footer from "./components/Footer/Footer";
import Login from "./components/LoginSignup/Login";
// import "bootstrap/dist/css/bootstrap.min.css";
// import ContactForm from "./components/ContactForm/ContactForm";

// import VideoBackground from "./components/VideoBackground"

function App() {

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <React.Fragment>
      <div>
        <Navbar1 setOpenModal={toggleModal} />
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
        <Footer />
        {modal && <Login setOpenModal={toggleModal} />}
      </div>
    </React.Fragment>
  );
}

export default App;

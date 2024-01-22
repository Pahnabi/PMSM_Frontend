import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/pages/About";
import Services from "./components/pages/Services";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Footer from "./components/Footer";
import VideoBackground from "./components/VideoBackground"



function App() {
  return (
    <React.Fragment>
    <div>
    
      

      <div className="App">
        <Navbar />
        <div id="home"><Home /></div>
        <div id="about"><About /></div>
        <div id="services"><Services /></div>
        <div id="contact"><Contact /></div>
        <div id="login"><Login/></div>
        <Footer />
                 
        

        
                    

       
      {/*<Landingpage/>*/}

      </div>
      
    </div>
    </React.Fragment>
  );
}

export default App;

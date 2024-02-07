import React from "react";
import "./Footer.css";

function Footer() {
  return (
    // <div className="contact footer-page bg-black " id="s-contacts">
    //   <h1 className="footer-heading text-2xl font-extrabold font-mono text-center text-white">
    //     Contact Us
    //   </h1>
    //   <div className="form">
    //     <div className="personal-info">
    //       <div className="name">
    //         <input type="text" placeholder="Name" />
    //       </div>
    //       <div className="email">
    //         <input type="email" placeholder="Email" />
    //       </div>
    //       <div className="subject">
    //         <input type="text" placeholder="Subject" />
    //       </div>
    //     </div>
    //     <div className="message">
    //       <textarea
    //         cols="40"
    //         rows="7"
    //         placeholder="Your message here..."
    //       ></textarea>
    //     </div>
    //   </div>
    //   <div className="submit">
    //     <input type="submit" value="Send" />
    //   </div>
    //   <div className="copyright text-white text-center mt-4">
    //     <p>&copy; 2024 PMSM IIT KGP. All rights reserved.</p>
    //   </div>
    // </div>
    <div className="footer">
      <div className="footer-left">
        <h1 className="footer-heading text-2xl font-extrabold font-mono text-center text-white">
          Contact Us
        </h1>
        <form action="">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email ID" />
          <input type="tel" placeholder="Phone" />
          <textarea
            name=""
            id=""
            cols="30"
            // rows="8"
            placeholder="Message"
            maxLength={200}
            style={{ height: "100px", resize: "none" }}
          ></textarea>
          <div className="footer-form-buttons">
            <input type="reset" />
            <input type="submit" value="Send" />
          </div>
        </form>
      </div>
      <div className="footer-right">
        <div className="footer-top-logo">
          <img
            src="https://img1.wsimg.com/isteam/ip/f6c7533f-74be-48e9-a0e9-b5e7fefa8122/blob-3f78b51.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true"
            alt=""
          />
        </div>
        <div className="footer-cr">
          <div className="copyright text-white text-center mt-4">
            <p>&copy; 2024 PMSM IIT KGP. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

import React from 'react';
import "./Footer.css";

function Footer() {
    return (
      <div className="contact footer-page bg-black " id="s-contacts">
        <h1 className="footer-heading text-2xl font-extrabold font-mono text-center text-white">
          Contact Us
        </h1>
        <div className="form">
          <div className="personal-info">
            <div className="name">
              <input type="text" placeholder="Name" />
            </div>
            <div className="email">
              <input type="email" placeholder="Email" />
            </div>
            <div className="subject">
              <input type="text" placeholder="Subject" />
            </div>
          </div>
          <div className="message">
            <textarea
              cols="40"
              rows="7"
              placeholder="Your message here..."
            ></textarea>
          </div>
        </div>
        <div className="submit">
          <input type="submit" value="Send" />
        </div>
        <div className="copyright text-white text-center mt-4">
          <p>&copy; 2024 PMSM IIT KGP. All rights reserved.</p>
        </div>
      </div>
    );
}

export default Footer;


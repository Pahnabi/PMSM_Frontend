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

    // <div className="footer">
    //   <div className="footer-left">
    //     <h1 className="footer-heading text-2xl font-extrabold font-mono text-center text-white">
    //       Contact Us
    //     </h1>
    //     <form action="">
    //       <input type="text" placeholder="Your Name" />
    //       <input type="email" placeholder="Email ID" />
    //       <input type="tel" placeholder="Phone" />
    //       <textarea
    //         name=""
    //         id=""
    //         cols="30"
    //         // rows="8"
    //         placeholder="Message"
    //         maxLength={200}
    //         style={{ height: "100px", resize: "none" }}
    //       ></textarea>
    //       <div className="footer-form-buttons">
    //         <input type="reset" />
    //         <input type="submit" value="Send" />
    //       </div>
    //     </form>
    //   </div>
    //   <div className="footer-right">
    //     <div className="footer-top-logo">
    //       <img
    //         src="https://img1.wsimg.com/isteam/ip/f6c7533f-74be-48e9-a0e9-b5e7fefa8122/blob-3f78b51.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true"
    //         alt=""
    //       />
    //     </div>
    //     <div className="footer-cr">
    //       <div className="copyright text-white text-center mt-4">
    //         <p>&copy; 2024 PMSM IIT KGP. All rights reserved.</p>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <footer class="footer-main p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
      <div class="mx-auto max-w-screen-xl text-center">
        <a
          href="#"
          class="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <span className="footer-main-heading material-symbols-outlined">
            satellite_alt
          </span>
          <p className="footer-main-heading-1">SmartEV</p>
        </a>
        <p class="my-6 text-gray-500 dark:text-gray-400">
          Redefining the Future of Electric Transportation.
        </p>
        <ul class="footer-main-heading flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6 ">
              About Us
            </a>
          </li>
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">
              Careers
            </a>
          </li>
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6 ">
              Become Partner
            </a>
          </li>
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">
              FAQs
            </a>
          </li>
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">
              Terms of Services
            </a>
          </li>
        </ul>
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <a href="#" class="hover:underline">
            SmartEV™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;

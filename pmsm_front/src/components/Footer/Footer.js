import React from "react";
import "./Footer.css";
import Link from "react-scroll";

function Footer() {
  return (
    <footer className="footer-main p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
      <div className="mx-auto max-w-screen-xl text-center">
        <a
          href="#"
          className="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <span className="footer-main-heading material-symbols-outlined">
            satellite_alt
          </span>
          <p className="footer-main-heading-1">SmartEV</p>
        </a>
        <p className="my-6 text-gray-500 dark:text-gray-400">
          Redefining the Future of Electric Transportation.
        </p>
        <ul className="footer-main-heading flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              About Us
            </a>
          </li>
          <li>
            
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Careers
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              Become Partner
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              FAQs
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Terms of Services
            </a>
          </li>
        </ul>
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <a href="#" className="hover:underline">
            SmartEV™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;

// LoginSignupModal.js
import React, { useState } from "react";
import Modal from "react-modal";
import "./LoginSignupModal.css"; // Import your modal styles

const LoginSignupModal = ({ isOpen, onRequestClose }) => {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const [signupData, setSignupData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleLoginChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignupChange = (e) => {
    setSignupData({
      ...signupData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Implement login logic here
    console.log("Login data submitted:", loginData);
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Implement signup logic here
    console.log("Signup data submitted:", signupData);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Login/Signup Modal"
      className="modal-content"
      overlayClassName="modal-overlay"
    >
      <div>
        <h2>Login</h2>
        <form onSubmit={handleLoginSubmit}>
          {/* Login form fields */}
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleLoginChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleLoginChange}
          />
          <button type="submit">Login</button>
        </form>
      </div>
      <div>
        <h2>Signup</h2>
        <form onSubmit={handleSignupSubmit}>
          {/* Signup form fields */}
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleSignupChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleSignupChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleSignupChange}
          />
          <button type="submit">Signup</button>
        </form>
      </div>
    </Modal>
  );
};

export default LoginSignupModal;

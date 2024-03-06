import React, { useState } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

import "./Login.css";

const Login = (props) => {
  const navigate = useNavigate();
  const [userid, setUserid] = useState("");
  const [vehicleid, setVehicleid] = useState("");
  const [userType, setUserType] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");

  // login sumbit
  async function submitLogin(e) {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:5000/login", {
          userid,
          vehicleid,
          password,
        })
        .then((res) => {
          console.log(res.status);
          if (res.status === 200) {
            console.log("Login successful");
            props.notifysuccess("Login successful");
            
            localStorage.setItem("authToken", res.data.authToken);
            localStorage.setItem("isLoggedIn", "true");

            props.setOpenModal();
            props.setLogstat();
            navigate("/Profile");
          } else {
            console.log(res);
          }
        })
        .catch((e) => {
          if (e.response.status === 401) {
            props.notifyerror("Incorrect Password");
          } else if (e.response.status === 404) {
            props.notifyerror("User does not exist");
          } else if (e.response.status === 400) {
            props.notifyerror("Incomplete details provided.");
          } else {
            props.notifyerror("Something went wrong during login.");
            console.error("Error during login:", e);
          }
        });
    } catch (e) {
      props.notifyerror("Something went wrong during login.");
      console.error("Error during login:", e);
    }
  }

  // signup submit
  async function submit(e) {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:5000/signup", {
          userid,
          vehicleid,
          userType,
          contactNumber,
          email,
          address,
          password,
        })
        .then((res) => {
          if (res.status === 201) {
            props.notifysuccess("Signup successful");
            localStorage.setItem("authToken", res.data.authToken);
            localStorage.setItem("isLoggedIn", "true");
            navigate("/profile");
            props.setOpenModal();
            props.setToggleLogStatus();
          } else {
            console.log(res);
          }
        })
        .catch((e) => {
          if (e.response.status === 409) {
            props.notifyerror(
              "User already exists with this User Id or Vehicle Id."
            );
          } else if (e.response.status === 400) {
            props.notifyerror("Incomplete details provided.");
          } else {
            props.notifyerror("Something went wrong during signup.");
            console.error("Error during signup:", e);
          }
        });
    } catch (e) {
      props.notifyerror("Something went wrong during signup.");
      console.error("Error during signup:", e);
    }
  }
  return (
    <div>
      <div className="modal">
        <div
          onClick={() => {
            props.setOpenModal();
          }}
          className="overlay"
        ></div>
        <div className="login2-main modal-content">
          <input type="checkbox" id="login2-chk" aria-hidden="true" />
          <div className="login2-signup">
            <div className="modal-closer">
              <p
                onClick={() => {
                  props.setOpenModal();
                }}
              >
                X
              </p>
            </div>

            
            {/* login */}
            <form action="POST">
              <label
                className="login-heading"
                htmlFor="login2-chk"
                aria-hidden="true"
              >
                Login
              </label>
              <input
                type="text"
                name="txt"
                placeholder="User Id"
                required=""
                onChange={(e) => {
                  setUserid(e.target.value);
                }}
              />
              <input
                type="text"
                name="txt"
                placeholder="Vehicle Id"
                required=""
                onChange={(e) => {
                  setVehicleid(e.target.value);
                }}
              />
              <input
                type="Password"
                name="pswd"
                placeholder="Password"
                required=""
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <button className="fill" onClick={submitLogin}>
                Login
              </button>
            </form>
          </div>

          
          {/* Sign-up */}
          <div className="login2-login">
            <form action="POST">
              <label
                className="sign-up-heading"
                htmlFor="login2-chk"
                aria-hidden="true"
              >
                Sign Up
              </label>
              <div className="signup-contents">
                <input
                  type="text"
                  name="txt"
                  placeholder="User Id"
                  required=""
                  onChange={(e) => {
                    setUserid(e.target.value);
                  }}
                />
                <input
                  type="text"
                  name="txt"
                  placeholder="Vehicle Id"
                  required=""
                  onChange={(e) => {
                    setVehicleid(e.target.value);
                  }}
                />
                <select
                  className="user-type"
                  name="dropdown"
                  onChange={(e) => setUserType(e.target.value)}
                >
                  <option
                    className="user-type-initial-option"
                    value=""
                    disabled
                    selected
                  >
                    Select User Type
                  </option>
                  <option value="Owner">Owner</option>
                  <option value="Manufacturer">Manufacturer</option>
                </select>

                <input
                  type="tel"
                  name="contactNumber"
                  placeholder="Contact Number"
                  required=""
                  onChange={(e) => setContactNumber(e.target.value)}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email ID"
                  required=""
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="text"
                  name="tet"
                  placeholder="Address"
                  required=""
                  onChange={(e) => setAddress(e.target.value)}
                />
                <input
                  type="Password"
                  name="pswd"
                  placeholder="Password"
                  required=""
                  onChange={(e) => setPassword(e.target.value)}
                />
                <input
                  type="Password"
                  name="pswd2"
                  placeholder="Re Enter Password"
                  required=""
                />
                <button onClick={submit}>Sign Up</button>

                <label
                  className="login-instead"
                  htmlFor="login2-chk"
                  aria-hidden="true"
                >
                  Login instead
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

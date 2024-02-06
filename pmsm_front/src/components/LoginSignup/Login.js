import React, { useState } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";


import "./Login.css";

const Login = (props) => {
  const navigate = useNavigate();
  const [userid, setUserid] = useState("");
  const [vehicleid, setVehicleid] = useState("");
  const [password, setPassword] = useState("");

  // login sumbit
  async function submitLogin(e) {
    e.preventDefault();

    try {
      await axios
        .post("http://localhost:8000/login", {
          userid,
          vehicleid,
          password,
        })
        .then((res) => {
          if (res.data === "exist") {
            // history("/home", { state: { id: email } });
            alert("Login successful");
            navigate("/profile");
            props.setOpenModal();
            props.setToggleLogStatus();
          } else if (res.data === "notexist") {
            alert("User have not sign up");
          }
        })
        .catch((e) => {
          alert("wrong details");
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  }

  // signup submit 
  async function submit(e) {
    e.preventDefault();

    try {
      await axios
        .post("http://localhost:8000/signup", {
          userid,
          vehicleid,
          password,
        })
        .then((res) => {
          if (res.data === "exist") {
            alert("User already exists");
          } else if (res.data === "notexist") {
            // history("/home", { state: { id: email } });
            alert("Signup Successful");
          }
        })
        .catch((e) => {
          alert("wrong details");
          console.log(e);
        });
    } catch (e) {
      console.log(e);
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
            {/* login */}
            {/* login */}
            {/* login */}
            {/* login */}
            <form action="POST">
              <label htmlFor="login2-chk" aria-hidden="true">
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
              <button onClick={submitLogin}>Login</button>
            </form>
          </div>

          {/* Sign-up */}
          {/* Sign-up */}
          {/* Sign-up */}
          {/* Sign-up */}
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
                  placeholder="User Name"
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
                  type="text"
                  name="txt"
                  placeholder="User Name"
                  required=""
                />
                <select className="user-type" name="dropdown">
                  <option
                    className="user-type-initial-option"
                    value=""
                    disabled
                    selected
                  >
                    Select User Type
                  </option>
                  <option value="option1">Owner</option>
                  <option value="option2">Manufacturer</option>
                </select>

                <input
                  type="tel"
                  name="contactNumber"
                  placeholder="Contact Number"
                  required=""
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email ID"
                  required=""
                />
                <input
                  type="text"
                  name="tet"
                  placeholder="Address"
                  required=""
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

import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import "./Login2.css";

const Login = (props) => {
  // const { setToggleLogStatus } = props;
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
            <form>
              <label htmlFor="login2-chk" aria-hidden="true">
                Sign Up
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email ID"
                required=""
              />
              <input
                type="text"
                name="txt"
                placeholder="User Name"
                required=""
              />
              <input
                type="Password"
                name="pswd"
                placeholder="Password"
                required=""
              />
              <button>Sign Up</button>
            </form>
          </div>
          <div className="login2-login">
            <form>
              <label htmlFor="login2-chk" aria-hidden="true">
                Login
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email ID"
                required=""
              />
              <input
                type="Password"
                name="pswd"
                placeholder="Password"
                required=""
              />
              <button>Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

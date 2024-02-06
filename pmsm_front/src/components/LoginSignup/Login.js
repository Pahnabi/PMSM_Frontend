import React from "react";
// import { Link } from "react-router-dom";
import "./Login.css";

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
            <form>
              <label htmlFor="login2-chk" aria-hidden="true">
                Login
              </label>
              <input type="text" name="txt" placeholder="User Id" required="" />
              <input
                type="text"
                name="txt"
                placeholder="Vehicle Id"
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

          {/* Sign-up */}
          {/* Sign-up */}
          {/* Sign-up */}
          {/* Sign-up */}
          {/* Sign-up */}
          <div className="login2-login">
            <form>
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
                />
                <input
                  type="text"
                  name="txt"
                  placeholder="Vehicle Id"
                  required=""
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
                />
                <input
                  type="Password"
                  name="pswd2"
                  placeholder="Re Enter Password"
                  required=""
                />
                <button>Sign Up</button>

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

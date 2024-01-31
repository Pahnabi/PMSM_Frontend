import React from "react";
import { Link } from "react-router-dom";
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
        <div className="modal-content">
          {/* <h2>Hello Modal</h2> */}
          <p>click below</p>
          {!props.loginstatus && (
            <Link
              to="/profile"
              onClick={() => {
                props.setOpenModal();
                props.setToggleLogStatus();
              }}
            >
              <button>Login</button>
            </Link>
          )}
          {props.loginstatus && (
            <Link
              to="/"
              onClick={() => {
                props.setOpenModal();
                props.setToggleLogStatus();
              }}
            >
              <button>Logout</button>
            </Link>
          )}
          <p>click above</p>

          <button
            className="close-modal"
            onClick={() => {
              props.setOpenModal();
            }}
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

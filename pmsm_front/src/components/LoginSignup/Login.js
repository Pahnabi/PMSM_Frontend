import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

import "./Login.css";

const Login = (props) => {
  const history = useNavigate();
  // const { setToggleLogStatus } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      await axios
        .post("http://localhost:8000/", {
          email,
          password,
        })
        .then((res) => {
          if (res.data === "exist") {
            history("/home", { state: { id: email } });
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
          {!props.loginstatus && (
            <>
              <form className="login-form" action="POST">
                <input
                  type="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  placeholder="Email"
                />
                <input
                  type="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  placeholder="Password"
                />
                <input type="submit" onClick={submit} />
              </form>
              <Link
                to="/profile"
                onClick={() => {
                  props.setOpenModal();
                  props.setToggleLogStatus();
                }}
              >
                <button>Login</button>
              </Link>
            </>
          )}

          {/* For logout purposes */}
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

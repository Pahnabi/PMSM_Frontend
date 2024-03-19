import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "./Login.css";

const Login = (props) => {
  const navigate = useNavigate();

  const [loginState, setloginState] = useState(true);

  const [userid, setUserid] = useState("");
  const [vehicleid, setVehicleid] = useState("");
  const [userType, setUserType] = useState("Owner");
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
            props.setOpenModal();
            props.setLogstat();
            navigate("/profile");
          } else {
            console.log(res);
          }
        })
        .catch((e) => {
          console.log(e);
          console.log("1");
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
        <div className="modal-content">
          <input type="checkbox" id="login2-chk" aria-hidden="true" />
          <div className="modal-closer">
            <p
              onClick={() => {
                props.setOpenModal();
              }}
            >
              X
            </p>
          </div>

          {loginState && (
            <div class="model-content-form w-full rounded-lg shado md:mt-0 sm:max-w-md xl:p-0">
              <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
                </h1>
                <form class="space-y-4 md:space-y-6" action="POST">
                  <div>
                    <label
                      for="User Id"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your User Id
                    </label>
                    <input
                      type="text"
                      name="User Id"
                      id="User Id"
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="UID"
                      required=""
                      onChange={(e) => {
                        setUserid(e.target.value);
                      }}
                    />
                  </div>
                  <div>
                    <label
                      for="Vehicle Id"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your Vehicle Id
                    </label>
                    <input
                      type="text"
                      name="Vehicle Id"
                      id="Vehicle Id"
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="VID"
                      required=""
                      onChange={(e) => {
                        setVehicleid(e.target.value);
                      }}
                    />
                  </div>
                  <div>
                    <label
                      for="password"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                  </div>
                  {/* <div class="flex items-center justify-between">
                  <div class="flex items-start">
                    <div class="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required=""
                      />
                    </div>
                    <div class="ml-3 text-sm">
                      <label
                        for="remember"
                        class="text-gray-500 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </a>
                </div> */}
                  <button
                    type="submit"
                    class="sign-in-button w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    onClick={submitLogin}
                  >
                    Sign in
                  </button>

                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                    Don’t have an account yet?{" "}
                    <a
                      class="go-to-login-state font-medium text-primary-600 hover:underline dark:text-primary-500"
                      onClick={() => {
                        setloginState(false);
                      }}
                    >
                      Sign up
                    </a>
                  </p>
                </form>
              </div>
            </div>
          )}
          {!loginState && (
            <div class="model-content-form w-full  rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0">
              <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign up to your account
                </h1>
                <form action="POST">
                  <div class="grid gap-4 mb-4 sm:grid-cols-2">
                    <div>
                      <label
                        for="userid"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        User Id
                      </label>
                      <input
                        type="text"
                        name="userid"
                        id="userid"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="UID"
                        onChange={(e) => {
                          setUserid(e.target.value);
                        }}
                      />
                    </div>
                    <div>
                      <label
                        for="vehicleid"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Vehicle Id
                      </label>
                      <input
                        type="text"
                        name="vehicleid"
                        id="vehicleid"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="VID"
                        onChange={(e) => {
                          setVehicleid(e.target.value);
                        }}
                      />
                    </div>
                    <div>
                      <label
                        for="email"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Email Id
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="abc@gmail.com"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div>
                      <label
                        for="category"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        User Type
                      </label>
                      <select
                        id="category"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        onChange={(e) => setUserType(e.target.value)}
                      >
                        <option value="Owner">Owner</option>
                        <option value="Manufacturer">Manufacturer</option>
                      </select>
                    </div>
                    <div>
                      <label
                        for="contactnumber"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Contact Number
                      </label>
                      <input
                        type="tel"
                        name="contactnumber"
                        id="contactnumber"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Contact Number"
                        onChange={(e) => setContactNumber(e.target.value)}
                      />
                    </div>
                    <div>
                      <label
                        for="address"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Address
                      </label>
                      <input
                        type="text"
                        name="address"
                        id="address"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Kharagpur "
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </div>
                    <div>
                      <label
                        for="password"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="••••••••"
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required=""
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                      />
                    </div>
                    <div>
                      <label
                        for="password"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Re Enter Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password2"
                        placeholder="••••••••"
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required=""
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                      />
                    </div>

                    <button
                      type="submit"
                      class="sign-in-button w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                      onClick={submit}
                    >
                      Sign up
                    </button>

                    <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                      Already have an account?{" "}
                      <a
                        class="go-to-login-state font-medium text-primary-600 hover:underline dark:text-primary-500"
                        onClick={() => {
                          setloginState(true);
                        }}
                      >
                        Sign in
                      </a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;

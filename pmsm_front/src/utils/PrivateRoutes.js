import { Navigate } from "react-router-dom";
import React from "react";
import UserProfile2 from "../components/UserProfile/UserProfile2";

const PrivateRoutes = () => {

  const loggedInStatus = localStorage.getItem("isLoggedIn");
  console.log(loggedInStatus);
  return loggedInStatus ? <UserProfile2 /> : <Navigate to="/" />;
  
};

export default PrivateRoutes;

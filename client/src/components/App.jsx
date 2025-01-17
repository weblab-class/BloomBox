import React, { useState, useEffect, createContext } from "react";
import { Outlet } from "react-router-dom";

import jwt_decode from "jwt-decode";

import "../utilities.css";

import { get, post } from "../utilities";

import Loading from "./pages/Loading/Loading";

// export const UserContext = createContext(null);

/**
 * Define the "App" component
 */
const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 4000);
  }, []);
  if (loading) {
    return <Loading />
  }
  
  // const [userId, setUserId] = useState(undefined);

  // useEffect(() => {
  //   get("api/users/current").then((user) => {
  //     if (user._id){
  //       setUserId(user._id);
  //     }
  //   })
  // }, []);

  // const handleLogin = () => {

  // };

  // const handleLogout = () => {
  //   setUserId(undefined);
  //   post("/api/users/logout");
  // };

  // const authContextValue = {
  //   userId,
  //   handleLogin,
  //   handleLogout,
  // };

  return (
    <Outlet />
  );
  // return (
  //   <UserContext.Provider value={authContextValue}>
  //     <Outlet />
  //   </UserContext.Provider>
  // );

  // const handleLogin = (credentialResponse) => {
  //   const userToken = credentialResponse.credential;
  //   const decodedCredential = jwt_decode(userToken);
  //   console.log(`Logged in as ${decodedCredential.name}`);
  //   post("/api/login", { token: userToken }).then((user) => {
  //     setUserId(user._id);
  //     post("/api/initsocket", { socketid: socket.id });
  //   });
  // };
};

export default App;

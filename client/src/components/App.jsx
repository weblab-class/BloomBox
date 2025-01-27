import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

import "../utilities.css";


import Loading from "./pages/Loading/Loading";


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

  return (
    <Outlet />
  );
};

export default App;

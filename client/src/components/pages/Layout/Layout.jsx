import React from "react";
import "./Layout.css";
import DarkBackground from "../DarkBackground/DarkBackground";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
        <Header />
        <DarkBackground />
        <Outlet />
        </>
    );
};

export default Layout;

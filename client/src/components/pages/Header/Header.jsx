import React from "react";
import "./Header.css";
import fillLogo from "../../../assets/images/icon-fill.svg";
import noFillLogo from "../../../assets/images/icon-no-fill.svg";

const Header = () => {
    return (
        <header>
            <div className="logo-container">
                <img src={fillLogo} className="logo"/>
                <div className="site-title">BloomBox</div>
            </div>
        </header>
    );
};

export default Header;
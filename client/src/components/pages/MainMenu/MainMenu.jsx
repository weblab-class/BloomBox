import React from "react";
import "./MainMenu.css";
import MainButton from "../MainButton/MainButton";
import ScrollingMarquee from "../ScrollingMarquee/ScrollingMarquee";
import { createRoom } from "../../../../webRTC";

const MainMenu = () => {
    return (
        <div className="main-menu-container">
            {/* <div className="main-menu-panel">
                <ScrollingMarquee />
            </div> */}
            <div className="main-menu-body">
                <MainButton text="create room" onClick={() => {}}/>
                <MainButton text="join room" onClick={() => {}}/>
                <MainButton text="view profile" onClick={() => {}}/>
            </div>
            {/* <div className="main-menu-panel">
                <ScrollingMarquee />
            </div> */}
        </div>
    );
};

export default MainMenu;
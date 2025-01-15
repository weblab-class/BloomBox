import React from "react";
import "./MainMenu.css";
import MainButton from "../MainButton/MainButton";
import ScrollingMarquee from "../ScrollingMarquee/ScrollingMarquee";
import { createRoom } from "../../../../webRTC";
import { useNavigate } from "react-router-dom";

const MainMenu = () => {
    const navigate = useNavigate();

    return (
        <div className="main-menu-container">
            <div className="main-menu-panel">
            </div>
            <div className="main-menu-body">
                <MainButton text="create room" onClickAction={() => { navigate('room/1', { relative: 'path' }); }}/>
                <MainButton text="join room" onClickAction={() => { navigate('join', { relative: 'path' }); }}/>
                <MainButton text="view profile" onClickAction={() => { navigate('profile/1', { relative: 'path' }); }}/>
            </div>
            <div className="main-menu-panel">
            </div>
        </div>
    );
};

export default MainMenu;
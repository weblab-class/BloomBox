import React from "react";
import "./MainMenu.css";
import MainButton from "../MainButton/MainButton";
import ScrollingMarquee from "../ScrollingMarquee/ScrollingMarquee";
import { useNavigate } from "react-router-dom";

const USER_ID = 1;

const MainMenu = () => {
    const navigate = useNavigate();

    return (
        <div className="main-menu-container">
            <div className="main-menu-panel">
            </div>
            <div className="main-menu-body">
                <MainButton text="create room" onClickAction={async () => { 
                }}/>
                <MainButton text="join room" onClickAction={() => { navigate('join', { relative: 'path' }); }}/>
                <MainButton text="view profile" onClickAction={() => { navigate('profile/1', { relative: 'path' }); }}/>
            </div>
            <div className="main-menu-panel">
            </div>
        </div>
    );
};

export default MainMenu;
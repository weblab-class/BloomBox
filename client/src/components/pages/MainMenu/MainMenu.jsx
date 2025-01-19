import React, { useEffect } from "react";
import "./MainMenu.css";
import MainButton from "../MainButton/MainButton";
import ScrollingMarquee from "../ScrollingMarquee/ScrollingMarquee";
import { useNavigate } from "react-router-dom";
import { useSocketContext } from "../../../context/SocketContext";

const MainMenu = () => {
    const navigate = useNavigate();

    // const { localStream } = useSocketContext();

    const generateRoomCode = (length) => {
        const numbers = "1234567890";
        let output = "";
        for (let i = 0; i < length; i++){
            output += numbers.charAt(Math.floor(Math.random() * numbers.length));
        }
        return output;
    };

    // useEffect(() => {
    //     navigator.mediaDevices.getUserMedia({ audio: false});
    //     if (localStream) {
    //         localStream.getAudioTracks().forEach((track) => track.stop());
    //     }
    // }, [localStream]);

    return (
        <div className="main-menu-container">
            <div className="main-menu-panel">
            </div>
            <div className="main-menu-body">
                <MainButton text="create room" onClickAction={() => { navigate(`room/${generateRoomCode(6)}`, { relative: 'path' }); }}/>
                <MainButton text="join room" onClickAction={() => { navigate('join', { relative: 'path' }); }}/>
                <MainButton text="view profile" onClickAction={() => { navigate('profile/1', { relative: 'path' }); }}/>
            </div>
            <div className="main-menu-panel">
            </div>
        </div>
    );
};

export default MainMenu;
import React, { useEffect } from "react";
import "./MainMenu.css";
import MainButton from "../MainButton/MainButton";
import Marquee from "../Marquee/Marquee";
import { useLocation, useNavigate } from "react-router-dom";
import { useSocketContext } from "../../../context/SocketContext";
import { get } from "../../../utilities";

const MainMenu = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const myUser = location.state?.myUser;

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
                <MainButton text="create room" onClickAction={() => { 
                    navigate(`room/${generateRoomCode(6)}`, 
                        { relative: 'path',
                          state: { myUser},
                        }); 
                }}/>
                <MainButton text="join room" onClickAction={() => { navigate('join', { relative: 'path' }); }}/>
                <MainButton text="view profile" onClickAction={async () => {
                    const user = (await get("/api/users/current")).user;
                    navigate(`profile/${user._id}`, { relative: 'path' }); 
                }}/>
            </div>
            <div className="main-menu-panel">
            </div>
        </div>
    );
};

export default MainMenu;
import React from "react";
import "./Avatar.css";
import { mainTracks } from "../../../assets/data/mainTracks";
import soundIndicator from "../../../assets/images/white-audio.svg";

const Avatar = ({ sound }) => {
    return (
        <div className="avatar-container">
            <div className="avatar-pic">
                <img src={mainTracks[0].image} />
            </div>
            <div className="avatar-name">Player Name</div>
            <div className="avatar-speak-indicator">
                <img src={soundIndicator} />
                <audio ref={sound}/>
            </div>
        </div>
    );
};

export default Avatar;
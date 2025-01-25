import React from "react";
import "./Avatar.css";
import soundIndicator from "../../../assets/images/white-audio.svg";
import { ALBUMS } from "../../../assets/data/albums";

const Avatar = ({ user, height="75%", width="25%" }) => {
    return (
        <div className="avatar-container" style={{ height: height, width: width}}>
            <div className="avatar-pic">
                <img src={ALBUMS[(user?.songIndex || 0)].image} />
            </div>
            <div className="avatar-name">{user?.displayName || "Loading"}</div>
            <div className="avatar-speak-indicator">
                <img src={soundIndicator} />
            </div>
        </div>
    );
};

export default Avatar;
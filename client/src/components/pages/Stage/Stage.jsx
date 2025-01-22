import React from "react";
import "./Stage.css";
import microphone from "../../../assets/images/microphone.svg";
import Avatar from "../Avatar/Avatar";
import jolene from "../../../assets/videos/jolene.mp4";

const Stage = () => {
    return (
        <div className="stage-container">
            <div className="stage-top-half">
                <div className="stage-audience">
                    <Avatar/>
                    <Avatar/>
                    <Avatar/>
                </div>
                <div className="stage-performer">
                    <img src={microphone}/>
                    <Avatar />
                </div>
            </div>
            <div className="stage-bottom-half">
                <video src={jolene} controls /> 
            </div>
        </div>
    );
};

export default Stage;
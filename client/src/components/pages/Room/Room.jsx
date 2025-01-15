import React from "react";
import "./Room.css";
import MainButton from "../MainButton/MainButton";
import Avatar from "../Avatar/Avatar";

const Room = () => {
    return (
        <div className="room-container">
            <div className="room-header">
                <MainButton text="Leave" onClick={() => {}}/>
                <div className="room-code">ROOM CODE: XXXXX</div>
            </div>
            <div className="room-main">
                <Avatar/>
                {/* <Avatar/>
                <Avatar/>
                <Avatar/> */}
            </div>
            <div className="room-footer">
                <MainButton text="settings" onClick={() => {}}/>
                <MainButton text="start" onClick={() => {}}/>
            </div>
        </div>
    );
};

export default Room;
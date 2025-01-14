import React from "react";
import "./Lobby.css";
import MainButton from "../MainButton/MainButton";
import Avatar from "../Avatar/Avatar";

const Lobby = () => {
    return (
        <div className="lobby-container">
            <div className="lobby-header">
                <MainButton text="Leave" onClick={() => {}}/>
                <div className="room-code">ROOM CODE: XXXXX</div>
            </div>
            <div className="lobby-main">
                <Avatar/>
                <Avatar/>
                <Avatar/>
                <Avatar/>
            </div>
            <div className="lobby-footer">
                <MainButton text="settings" onClick={() => {}}/>
                <MainButton text="start" onClick={() => {}}/>
            </div>
        </div>
    );
};

export default Lobby;
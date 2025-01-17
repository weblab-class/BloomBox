import React from "react";
import "./Room.css";
import MainButton from "../MainButton/MainButton";
import Avatar from "../Avatar/Avatar";
import { useParams, useNavigate } from "react-router-dom";

const Room = () => {
    const { roomId } = useParams();
    const navigate = useNavigate();

    return (
        <div className="room-container">
            <div className="room-header">
                <MainButton text="Leave" onClickAction={() => {navigate('/game');}}/>
                <div className="room-code">ROOM CODE: {roomId}</div>
            </div>
            <div className="room-main">
                <Avatar/>
            </div>
            <div className="room-footer">
                <MainButton text="settings" onClickAction={() => {}}/>
                <MainButton text="start" onClickAction={() => {}}/>
            </div>
        </div>
    );
};

export default Room;
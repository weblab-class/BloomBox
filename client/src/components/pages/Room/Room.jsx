import React, { useEffect, useState, useContext } from "react";
import "./Room.css";
import MainButton from "../MainButton/MainButton";
import Avatar from "../Avatar/Avatar";
import { useParams, useNavigate } from "react-router-dom";
import { SocketContext } from "../../../context/SocketContext";
import { UserContext } from "../../../context/UserContext";
import { RoomContext } from "../../../context/RoomContext";

const Room = () => {
    const socket = useContext(SocketContext);
    const navigate = useNavigate();
    const { users, roomId } = useContext(RoomContext);

    return (
        <div className="room-container">
            <div className="room-header">
                <MainButton text="Leave" onClickAction={() => {
                    socket.emit('leave room', roomId);
                    navigate('/game');
                    window.location.reload();
                }}/>
                <div className="room-code">ROOM CODE: {roomId}</div>
            </div>
            <div className="room-main">
                {
                    users.map((user, index) => {
                        return <Avatar key={index} user={user} />;
                    })
                }
            </div>
            <div className="room-footer">
                <MainButton text="settings" onClickAction={() => {}}/>
                <MainButton text="start" onClickAction={() => {}}/>
            </div>
        </div>
    );
};

export default Room;
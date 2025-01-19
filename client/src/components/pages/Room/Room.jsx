import React, { useEffect } from "react";
import "./Room.css";
import MainButton from "../MainButton/MainButton";
import Avatar from "../Avatar/Avatar";
import { useParams, useNavigate } from "react-router-dom";
import { socket, useSocketContext } from "../../../context/SocketContext";

const Room = () => {
    const { roomId } = useParams();
    const navigate = useNavigate();
    const { myAudio } = useSocketContext();

    useEffect(() => {
        socket.emit('create or join room', roomId);

        socket.on('full', () => {
            alert(`Room ${roomId} is full!`);
            console.log("hi");
            navigate("../../join", { relative: 'path' });
        });

        return () => {
            socket.emit('leave room', roomId);
            socket.off('full');
        };
    }, []);

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
                <Avatar sound={myAudio}/>
            </div>
            <div className="room-footer">
                <MainButton text="settings" onClickAction={() => {}}/>
                <MainButton text="start" onClickAction={() => {}}/>
            </div>
        </div>
    );
};

export default Room;
import React, { useEffect, useState } from "react";
import "./Room.css";
import MainButton from "../MainButton/MainButton";
import Avatar from "../Avatar/Avatar";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { socket, useSocketContext } from "../../../context/SocketContext";
import { get } from "../../../utilities";

const Room = () => {
    const { roomId } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const myUser = location.state?.myUser;
    const { myAudio } = useSocketContext();
    const [users, setUsers] = useState([myUser]);

    useEffect(() => {
        
        socket.emit('create or join room', roomId, myUser);
        socket.on("joined", (otherUser, senderId) => {
            setUsers((prevUsers) => [
                ...prevUsers,
                otherUser,
            ]);

            socket.emit("others in room", senderId, myUser);

        });

        socket.on("others in room", (otherUser) => {
            setUsers((prevUsers) => [
                ...prevUsers,
                otherUser,
            ]);
        });

        socket.on('full', () => {
            alert(`Room ${roomId} is full!`);
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
                    navigate('/game', { state: { myUser } });
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
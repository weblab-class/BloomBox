import { createContext, useContext, useEffect, useState } from "react";
import { SocketContext } from "./SocketContext";
import { useParams } from "react-router-dom";


const RoomContext = createContext();

const RoomProvider = ({ children }) => {
    const socket = useContext(SocketContext);
    const { roomId: paramRoomId } = useParams();
    const [users, setUsers] = useState([]);
    const [roomId, setRoomId] = useState(null);

    useEffect(() => {
        setRoomId(paramRoomId);
    }, [paramRoomId]);

    useEffect(() => {
        if (!roomId) return;

        socket.emit('create or join room', roomId);

        socket.on('existing users', (otherUsers) => {
            setUsers((prevUsers) => [
                ...prevUsers,
                ...otherUsers,
            ]);
        });

        socket.on('new user joined', (newUser) => {
            setUsers((prevUsers) => [
                ...prevUsers,
                newUser,
            ]);
        })

        socket.on('full', () => {
            alert(`Room ${roomId} is full!`);
            navigate("/game/join");
        });

        return () => {
            socket.emit('leave room', roomId);
            socket.off('existing users');
            socket.off('new user joined');
            socket.off('full');
        };
    }, [socket, roomId]);

    return (
        <RoomContext.Provider value={{
            users,
            roomId,
        }}>
            { children }
        </RoomContext.Provider>
    );
};

export { RoomContext, RoomProvider };
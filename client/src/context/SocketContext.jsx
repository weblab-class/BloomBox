import socketIOClient from "socket.io-client";
import { createContext } from "react";


const SocketContext = createContext();

const SocketProvider = ({ children }) => {
    const endpoint = window.location.hostname + ":" + window.location.port;
    const socket = socketIOClient(endpoint);

    return (
        <SocketContext.Provider value={socket}>
            { children }
        </SocketContext.Provider>
    );
};

export { SocketContext, SocketProvider };
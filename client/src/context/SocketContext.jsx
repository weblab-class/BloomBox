import socketIOClient from "socket.io-client";
import Peer from "simple-peer";
import { createContext, useContext, useEffect, useRef, useState } from "react";

const endpoint = window.location.hostname + ":" + window.location.port;
export const socket = socketIOClient(endpoint);
const SocketContext = createContext({});

export const SocketContextProvider = ({ children }) => {
    const [localStream, setLocalStream] = useState();
    const myAudio = useRef();

    // useEffect(() => {
    //     navigator.mediaDevices.getUserMedia({ audio: true })
    //     .then((stream) => {
    //         setLocalStream(stream);
    //         myAudio.current.srcObject = stream;
    //     })
    //     .catch((error) => {
    //         console.error("Error accesing media devices", error);
    //     });
        

    // }, []);

    // const answerCall = () => {
    //     const peer = new Peer({ initiator: false, trickle: false, localStream});
    // }

    return (
        <SocketContext.Provider value={{
            localStream,
            myAudio,
        }}
        >
            { children }
        </SocketContext.Provider>
    );

};

export const useSocketContext = () => useContext(SocketContext);
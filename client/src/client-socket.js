import socketIOClient from "socket.io-client";

const endpoint = window.location.hostname + ":" + window.location.port;
export const socket = socketIOClient(endpoint);
const roomId = "ADD_SOME_ROOM_ID";

let peerConnection = null;

const localAudio = null;
const remoteAudio = null;

const createPeerConnection = () => {
    const config = {
        iceServers: [
            {
              urls: [
                'stun:stun1.l.google.com:19302',
                'stun:stun2.l.google.com:19302',
              ],
            },
          ],
        iceCandidatePoolSize: 4,
    };    

    peerConnection = new RTCPeerConnection(config);

    // Handle ICE candidates
    peerConnection.onicecandidate = (event) => {
        if (event.candidate) {
            socket.emit("ice candidate", event.candidate, roomId);
        }
    }

    // Handle remote audio stream
    peerConnection.ontrack = (event) => {
        remoteAudio.srcObject = event.streams[0];
    };

    // Add local stream to peer connection
    const localStream = localAudio.srcObject;
    for (const track of localStream.getTracks()) {
        peerConnection.addTrack(track, localStream);
    }
};



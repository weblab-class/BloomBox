import { useNavigate } from "react-router-dom";
import { post } from "./utilities";


const configuration = {
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

// let peerConnection = null;
// // let localStream = null;
// // let remoteStream = null;

function getRandomId(length) {
  let output = "";
  const chars = "0123456789";
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * chars.length);
    output += chars.charAt(index);
  }
  return output;
}

export async function createRoom(userId) {
  const roomId = getRandomId(6);
  return roomId;
}
// export async function createRoom(userId) {
//   // add some safe gaurd to make sure room doesnt already exist before creating
//   const [localStream, remoteStream] = await openUserMedia();

//   console.log('Create PeerConnection with configuration: ', configuration);
//   peerConnection = new RTCPeerConnection(configuration);

//   registerPeerConnectionListeners();

//   const offer = await peerConnection.createOffer();
//   await peerConnection.setLocalDescription(offer);

//   const roomId = getRandomId(5);

//   const offerObject = {
//       offer: {
//           type: offer.type,
//           sdp: offer.sdp
//       }
//   }

//   const request = {
//     roomId: roomId,
//     offer: offerObject,
//     userId: userId, 
//   }

//   await post("/api/rooms/create", request); 
  

//   const eventSource = new EventSource(`/api/rooms/listen/${roomId}`);

//   eventSource.onmessage = async (event) => {
//     const data = JSON.parse(event.data);
//     console.log('Got updated room: ', data);

//     if (!peerConnection.currentRemoteDescription && data.answer) {
//       console.log('Set remote description: ', data.answer);
//       const answer = new RTCSessionDescription(data.answer);
//       await PeerConnection.setRemoteDescription(answer);
//     }
//   };

//   localStream.getTracks().forEach(track => {
//     peerConnection.addTrack(track, localStream);
//   });

//   peerConnection.addEventListener('track', event => {
//     console.log('Got remote track:', event.streams[0]);
//     event.streams[0].getTracks().forEach(track => {
//       console.log('Add a track to the remoteStream:', track);
//       remoteStream.addTrack(track);
//     });
//   });

//   return roomId;

// }

// async function joinRoomById(roomId) {
//     // const db = null;
//     // const roomRef = null; //nsearch database for room using roomID

// }

// async function openUserMedia(e) {
//   const localStream = await navigator.mediaDevices.getUserMedia(
//     {video: true, audio: true}
//   );

//   const remoteStream = new MediaStream();
  
//   return [localStream, remoteStream];
// }

// async function hangUp(e) {

// }

// function registerPeerConnectionListeners() {
//   peerConnection.addEventListener('icegatheringstatechange', () => {
//     console.log(
//         `ICE gathering state changed: ${peerConnection.iceGatheringState}`);
//   });

//   peerConnection.addEventListener('connectionstatechange', () => {
//     console.log(`Connection state change: ${peerConnection.connectionState}`);
//   });

//   peerConnection.addEventListener('signalingstatechange', () => {
//     console.log(`Signaling state change: ${peerConnection.signalingState}`);
//   });

//   peerConnection.addEventListener('iceconnectionstatechange ', () => {
//     console.log(
//         `ICE connection state change: ${peerConnection.iceConnectionState}`);
//   });
// }
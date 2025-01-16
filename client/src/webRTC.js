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

let peerConnection = null;
let localStream = null;
let remoteStream = null;

export async function createRoom(userId) {
  openUserMedia();

  console.log('Create PeerConnection with configuration: ', configuration);
  peerConnection = new RTCPeerConnection(configuration);

  registerPeerConnectionListeners();

  const offer = await peerConnection.createOffer();
  await peerConnection.setLocalDescription(offer);

  const roomId = null;

  const offerObject = {
      offer: {
          type: offer.type,
          sdp: offer.sdp
      }
  }

  const request = {
    roomId: roomId,
    offer: offerObject,
    userId: userId, 
  }

  await post("/api/rooms/create", request); 

  const eventSource = new EventSource(`/api/rooms/listen/${roomId}`);

  eventSource.onmessage = async (event) => {
    const data = JSON.parse(event.data);
    console.log('Got updated room: ', data);

    if (!peerConnection.currentRemoteDescription && data.answer) {
      console.log('Set remote description: ', data.answer);
      const answer = new RTCSessionDescription(data.answer);
      await PeerConnection.setRemoteDescription(answer);
    }
  };

  localStream.getTracks().forEach(track => {
    peerConnection.addTrack(track, localStream);
  });

  peerConnection.addEventListener('track', event => {
    console.log('Got remote track:', event.streams[0]);
    event.streams[0].getTracks().forEach(track => {
      console.log('Add a track to the remoteStream:', track);
      remoteStream.addTrack(track);
    });
  });

}

async function joinRoomById(roomId) {
    // const db = null;
    // const roomRef = null; //nsearch database for room using roomID

}

async function openUserMedia(e) {
  localStream = await navigator.mediaDevices.getUserMedia(
    {video: true, audio: true}
  );

  remoteStream = new MediaStream();
}

async function hangUp(e) {

}

function registerPeerConnectionListeners() {
  peerConnection.addEventListener('icegatheringstatechange', () => {
    console.log(
        `ICE gathering state changed: ${peerConnection.iceGatheringState}`);
  });

  peerConnection.addEventListener('connectionstatechange', () => {
    console.log(`Connection state change: ${peerConnection.connectionState}`);
  });

  peerConnection.addEventListener('signalingstatechange', () => {
    console.log(`Signaling state change: ${peerConnection.signalingState}`);
  });

  peerConnection.addEventListener('iceconnectionstatechange ', () => {
    console.log(
        `ICE connection state change: ${peerConnection.iceConnectionState}`);
  });
}
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


export async function createRoom() {
    const db = null;

    console.log('Create PeerConnection with configuration: ', configuration);
    peerConnection = new RTCPeerConnection(configuration);

    registerPeerConnectionListeners();

    const offer = await peerConnection.createOffer();
    await peerConnection.setLocalDescription(offer);

    const roomWithOffer = {
        offer: {
            type: offer.type,
            sdp: offer.sdp
        }
    }

    const roomRef = null; // add room to mongoDB rooms section and get reference

    const roomId = roomRef.id;

    //// MORE BELOW THIS
}

async function joinRoomById(roomId) {
    // const db = null;
    // const roomRef = null; //nsearch database for room using roomID

}

async function openUserMedia(e) {

}

async function hangUp(e) {

}

function registerPeerConnectionListeners() {

}
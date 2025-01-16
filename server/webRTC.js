const Room = require("./models/room");

function createRoom (req, res) {
    const { roomId, offer, userId } = req.body;

    const newRoom = new Room({
        roomId: roomId,
        participants: [userId],
        offer: offer,
    });

    room = newRoom.save();

    req.session = room;
    res.send(room);
}

function listen (req, res) {
    const roomId = req.params.roomId;

    console.log(`Listening to room: ${roomId}`);

    const filter = [
        {
            $match: {
                'fullDocument.roomId': specificRoomId,
            },
        },
    ];

    const change = Room.watch(filter);
    change.on('change', data => {
        console.log(data);
        if (data.operationType === "update") {
            const updatedFields = data.updateDescription.updatedFields;

            res.write(`data: ${JSON.stringify(updatedFields)}`);
        }
    });

    req.on('close', () => {
        console.log("Disconnected from room: " , roomId);
        change.close.then(() => {
            console.log("Watch stream successfully closed");
        }).catch((error) => {
            console.log("Error while trying to close watch stream, ", error);
        });

        res.end();
    });
}

module.exports = {
    createRoom,
    listen,
};
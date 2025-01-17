let io;

const init = (http) => {
    io = require("socket.io")(http);

    io.on("connection", (socket) => {
        console.log("A user connected: ", socket.id);

        socket.on('create or join room', (roomId) => {
            const clientsInRoom = io.sockets.adapter.rooms[roomId];
            const numClients = clientsInRoom ? Object.keys(clientsInRoom.sockets).length : 0;

            if (numClients === 0) {
                socket.join(roomId);
                socket.emit('created: ', roomId);
            } else if (numClients <= 4) {
                socket.join(roomId);
                socket.emit("joined: ", roomId);
            } else {
                socket.emit(`room ${roomId} is full`);
            }
            // socket.join(roomId);
            // console.log(`User ${socket.id} joined room ${roomId}`);
        });

        socket.on('offer', (offer, roomId) => {
            socket.to(roomId).emit('offer', offer);
        });

        socket.on('answer', (answer, roomId) => {
            socket.to(roomId).emit('answer', answer);
        });

        socket.on('ice candidate', (candidate, roomId) => {
            socket.to(roomId).emit('ice candidate', candidate);
        });

        socket.on('disconnect', () => {
            console.log("User disconnected: ");
        });
    });
};

module.exports = {
    init,
};
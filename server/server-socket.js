let io;

module.exports = {
    init: (http) => {
        io = require("socket.io")(http);

        io.on("connection", (socket) => {
            console.log("A user connected: ", socket.id);
    
            socket.on('create or join room', (roomId) => {
                const rooms = io.of("/").adapter.rooms;
                const room = rooms.get(roomId);
                const numClients = room ? room.size : 0;
                if (numClients === 0) {
                    socket.join(roomId);
                    socket.emit('created: ', roomId);
                    console.log(`Room ${roomId} created by ${socket.id}`);
                } else if (numClients < 4) {
                    socket.join(roomId);
                    socket.emit("joined: ", roomId);
                    console.log(`Client ${socket.id} joined room ${roomId}`);
                } else {
                    socket.emit("full", roomId);
                    console.log(`Room ${roomId} is full. Client ${socket.id} denied entry`);
                }
                console.log()
            });
    
            socket.on('leave room', (roomId) => {
                socket.leave(roomId);
                console.log(`Client ${socket.id} left room ${roomId}`);
            });

        });
    },
};
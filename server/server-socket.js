let io;

const userToSocketMap = {};
const socketToUserMap = {};

const getAllConnectedUsers = () => Object.values(socketToUserMap);
const getSocketFromUserID = (userid) => userToSocketMap[userid];
const getUserFromSocketID = (socketid) => socketToUserMap[socketid];
const getSocketFromSocketID = (socketid) => io.sockets.sockets.get(socketid);


const addUser = (user, socket) => {
    const oldSocket = userToSocketMap[user._id];
    if (oldSocket && oldSocket.id !== socket.id) {
        oldSocket.disconnect();
        delete socketToUserMap[oldSocket.id];
    }

    userToSocketMap[user._id] = socket;
    socketToUserMap[socket.id] = user;
};

const removeUser = (user, socket) => {
    if (user) delete userToSocketMap[user._id];
    delete socketToUserMap[socket.id];
};

module.exports = {
    init: (http) => {
        io = require("socket.io")(http);

        io.on("connection", (socket) => {
            console.log("A socket has connected: ", socket.id);

            socket.on('set user', (user) => {
                if (user) {
                    addUser(user, socket);
                    console.log(`Added user: ${user} with socket: ${socket}`);
                }
            });
            
            socket.on("disconnect", (reason) => {
                const user = getUserFromSocketID(socket.id);
                removeUser(user, socket);
            });
            socket.on('create or join room', (roomId) => {
                const rooms = io.of("/").adapter.rooms;
                const room = rooms.get(roomId);
                const numClients = room ? room.size : 0;
                const user = getUserFromSocketID(socket.id);

                if (numClients === 0) {
                    socket.join(roomId);
                    io.in(roomId).emit('new user joined', user);
                    console.log(`Room ${roomId} created by ${socket.id}`);
                } else if (numClients < 4) {
                    existingUsers = Array.from(room).map(id => getUserFromSocketID(id));
                    socket.join(roomId);
                    io.in(roomId).emit('new user joined', user);
                    io.to(socket.id).emit('existing users', existingUsers);
                    console.log(`Client ${socket.id} joined room ${roomId}`);
                } else {
                    socket.to(socket.id).emit("full", roomId);
                    console.log(`Room ${roomId} is full. Client ${socket.id} denied entry`);
                }
            });

            socket.on('leave room', (roomId) => {
                socket.leave(roomId);
                console.log(`Client ${socket.id} left room ${roomId}`);
            });
        });
    },
};
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIo(server); // Initialize Socket.IO with our HTTP server

const PORT = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

let connectedUsers = 0; // Simple counter for connected users

// Socket.IO connection handling
io.on('connection', (socket) => {
    connectedUsers++;
    console.log(`A user connected. Total users: ${connectedUsers}`);
    
    // Broadcast a 'user connected' message to all clients
    io.emit('chat message', `A new user joined the chat. Current users: ${connectedUsers}`);

    // Listen for 'chat message' events from clients
    socket.on('chat message', (msg) => {
        console.log('Message received:', msg);
        // Broadcast the received message to all connected clients
        io.emit('chat message', msg); 
    });

    // Listen for 'disconnect' events
    socket.on('disconnect', () => {
        connectedUsers--;
        console.log(`A user disconnected. Total users: ${connectedUsers}`);
        // Broadcast a 'user disconnected' message to all clients
        io.emit('chat message', `A user left the chat. Current users: ${connectedUsers}`);
    });
});

// Start the server
server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
    console.log(`Open your browser at http://localhost:${PORT}`);
});

document.addEventListener('DOMContentLoaded', () => {
    // Establish connection to the Socket.IO server
    // By default, it connects to the host that serves the page
    const socket = io(); 

    const chatForm = document.getElementById('chat-form');
    const usernameInput = document.getElementById('username-input');
    const messageInput = document.getElementById('message-input');
    const messagesDiv = document.getElementById('messages');

    // Scroll messages to the bottom
    function scrollToBottom() {
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
    }

    // Function to add a message to the display
    function addMessage(msg, type = 'other') {
        const p = document.createElement('p');
        p.textContent = msg;
        if (type === 'own') {
            p.classList.add('own-message');
        } else if (type === 'system') {
            p.classList.add('system-message');
        } else {
            p.classList.add('other-message');
        }
        messagesDiv.appendChild(p);
        scrollToBottom();
    }

    // Handle form submission
    chatForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent default form submission (page reload)

        const username = usernameInput.value.trim();
        const message = messageInput.value.trim();

        if (username && message) {
            const fullMessage = `${username}: ${message}`;
            socket.emit('chat message', fullMessage); // Send message to server
            addMessage(fullMessage, 'own'); // Display own message immediately
            messageInput.value = ''; // Clear the message input
        } else if (!username) {
            alert('Please enter your name!');
            usernameInput.focus();
        }
    });

    // Listen for 'chat message' events from the server
    socket.on('chat message', (msg) => {
        // Only display if it's not our own message (which we added immediately on send)
        // A more robust app might send an ID or sender info to distinguish.
        // For this simple example, we just check if it contains our username.
        const username = usernameInput.value.trim();
        if (msg.includes(`${username}:`) && msg.startsWith(username + ':')) {
             // This is a message we sent, it's already displayed.
             // If we wanted to rely solely on server echoing, we wouldn't add 'own' message client-side.
             // But for real-time feel, displaying immediately is good.
             return; 
        } else if (msg.includes('user joined the chat') || msg.includes('user left the chat')) {
             addMessage(msg, 'system'); // System messages
        }
        else {
            addMessage(msg, 'other'); // Other users' messages
        }
    });

    // Optional: Handle connection/disconnection visual feedback (Socket.IO client handles reconnection)
    socket.on('connect', () => {
        console.log('Connected to chat server!');
    });

    socket.on('disconnect', () => {
        console.log('Disconnected from chat server!');
        // addMessage('You have been disconnected. Attempting to reconnect...', 'system');
    });

    // Focus on username input when page loads
    usernameInput.focus();
});

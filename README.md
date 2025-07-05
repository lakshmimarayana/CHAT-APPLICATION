# CHAT-APPLICATION

*NAME*: Krishnapuram Lakshminarayana

*COMPANY*: CODTECH IT SOLUTIONS

*INTERN ID*: CT08DM647

*DOMAIN*: FULL STACK WEB DEVELOPMENT

*DURATION*: 8 WEEKS

*MENTOR NAME*: NEELA SANTOSH

#DESCRIPTION:
A real-time chat application is a fantastic project to demonstrate the power of WebSockets (or libraries like Socket.IO built on top of them). It allows instant, two-way communication between a server and multiple clients, which is crucial for features like live chat, notifications, and collaborative tools.

Let's develop a simple real-time chat application using Socket.IO.

# Why Socket.IO?

Simplifies WebSockets: While you can use raw WebSockets, Socket.IO provides a higher-level abstraction, handling connection management (reconnection, fallback to HTTP long-polling if WebSockets aren't supported), broadcasting, and rooms.

Cross-Browser Compatibility: Ensures consistent behavior across different browsers.

Ease of Use: Its API is very intuitive for both client-side and server-side development.

# Core Concepts:

Server (Node.js + Express + Socket.IO):

Listens for incoming client connections.

Handles sending and receiving messages.

Broadcasts messages to all connected clients (or specific rooms).

Client (HTML, CSS, JavaScript + Socket.IO client library):

Connects to the Socket.IO server.

Sends messages to the server.

Receives and displays messages from the server.

# Features of our Chat Application:

Users can join the chat.

Users can send messages.

All connected users see messages in real-time.

Displays when a user connects or disconnects.

# Project Files:
Inside your realtime_chat folder, create the following files:

server.js (Our Node.js server)

public/ (Create this sub-folder)

public/index.html (The client-side HTML)

public/style.css (Client-side styling)

public/client.js (Client-side JavaScript)

# How to Run the Application:
Open your terminal/command prompt.

Navigate to your realtime_chat directory.

Start the server:

node server.js

You should see output like:

Server listening on port 3000

Open your browser at http://localhost:3000

Open your web browser(s): Go to http://localhost:3000.

Open multiple tabs or different browsers: To see the real-time chat in action, open http://localhost:3000 in several browser tabs or even different browsers (e.g., Chrome, Firefox).

Enter your name and start chatting!

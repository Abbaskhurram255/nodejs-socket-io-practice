const express = require("express");
require("dotenv").config();
const app = express();
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
    res.set({
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        "Access-Control-Allow-Credentials": "true",
    });
    next();
});
const server = require("http").createServer(app);
const io = require("socket.io")(server);

io.on("connection", (socket) => {
    console.log("New user connected");
    socket.on("message", (msg) => {
        console.log("Message received: " + msg);
        socket.emit("message", msg);
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Listening on port ${PORT}`));

const express = require("express");
require("dotenv").config();
const app = express();
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
const server = require("http").createServer(app);
const io = require("socket.io")(server);

io.on("connection", (socket) => {
    console.log("New user connected");
    socket.on("message", (msg) => {
        socket.broadcast.emit("message", msg);
    });
});
app.use((req, res, next) => {
    
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Listening on port ${PORT}`));
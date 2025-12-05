const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

let users = {}; // Stores { socketId: 'username' }

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html"); // Serve your HTML client
});

io.on("connection", (socket) => {
    console.log("A user connected:", socket.id);

    socket.on("set name", (name) => {
        users[socket.id] = name;
        io.emit("user joined", name); // Inform others of new user
    });

    socket.on("chat message", (msg) => {
        const username = users[socket.id] || "Anonymous";
        io.emit("chat message", { username: username, message: msg });
    });

    socket.on("disconnect", () => {
        const disconnectedUser = users[socket.id];
        if (disconnectedUser) {
            delete users[socket.id];
            io.emit("user left", disconnectedUser); // Inform others of user leaving
        }
        console.log("User disconnected:", socket.id);
    });
});

http.listen(process.env.PORT || 3000, () => {
    console.log(`Listening on PORT ${process.env.PORT || 3000}`);
});

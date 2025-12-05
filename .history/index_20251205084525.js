const express = require("express");
require("dotenv").config();
const app = express();
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
const server = require("http").createServer(app);
const io = require("socket.io")(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
})
app.get("/", (req, res) => {
    res.status(200).json({message: "Server is up and running"});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

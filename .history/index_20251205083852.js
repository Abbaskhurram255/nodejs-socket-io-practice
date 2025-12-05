const express = require("express");
const app = express();
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => res.sendFile(__dirname + "/public/index.html"));

const PORT = process

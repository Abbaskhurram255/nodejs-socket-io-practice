const io = require("socket.io");
const socket = io();

const form = document.querySelector("#form");
const input = document.querySelector("#input");
const messages = document.querySelector("#messages");

form.addEventListener("submit", e => {
    e.preventDefault();
    if (input.value) {
        socket.emit("message", input.value);
        input.value = "";
    }
});

socket.on("message", msg => {
    const item = document.createElement("li");
    item.textContent = msg;
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
});

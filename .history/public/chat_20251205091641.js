import io from "./socket.io";
const socket = io();

const form = document.querySelector("#form");
const input = document.querySelector("#input");
const messages = document.querySelector("#messages");

form.addEventListener("submit", e => {
    e.preventDefault();
})

const socket = io();

socket.on("message", (msg) => {
    console.log("Message received: " + msg);
    const messages = document.getElementById("messages");
    const li = document.createElement("li");
    li.textContent = msg;
    messages.appendChild(li);
});

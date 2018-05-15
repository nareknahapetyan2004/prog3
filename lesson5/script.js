function main() {
    var socket = io.connect('http://localhost:8080');
    var chatDiv = document.getElementById('chat');
    var input = document.getElementById('message');
    var button = document.getElementById('submit');
    var jnjel = document.getElementById('Delete all messages');

    function handleSubmit(evt) {
        var val = input.value;
        if (val != "") {
            socket.emit("send message", val);
        }
    }

    button.onclick = handleSubmit;
    jnjel.onclick = handleSubmit;

    function handleMessage(msg) {
        var p = document.createElement('p');
        p.innerText = msg;
        chatDiv.appendChild(p);
        input.value = "";
    }

    socket.on('display message', handleMessage);
} // main closing bracket

window.onload = main;